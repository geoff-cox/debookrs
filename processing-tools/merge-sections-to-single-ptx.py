"""De-modularize PreTeXt sources by resolving xi:include tags.

This utility flattens a main .ptx file by inlining referenced xi:include files.
For very large projects or frequent runs, a streaming XML parser or caching
includes would be a more scalable upgrade than loading whole files in memory.
"""

from pathlib import Path
import re

INCLUDE_PATTERN = re.compile(r'<xi:include href="([^"]+)"')


def read_file(file_path: str | Path) -> str:
    """Return the UTF-8 contents of a file."""
    with open(file_path, "r", encoding="utf-8") as file:
        return file.read()


def write_file(file_path: str | Path, content: str) -> None:
    """Write content to a file using UTF-8 encoding."""
    with open(file_path, "w", encoding="utf-8") as file:
        file.write(content)


def process_includes(content: str, base_path: str | Path) -> str:
    """Recursively replace xi:include tags with their referenced content."""
    base_dir = Path(base_path)
    search_pos = 0
    match = INCLUDE_PATTERN.search(content, search_pos)
    while match:
        include_file = match.group(1)
        include_file_path = (base_dir / include_file).resolve()
        include_dir = include_file_path.parent

        if include_file_path.exists():
            included_content = read_file(include_file_path)
            included_content = process_includes(included_content, include_dir)
            content = content[: match.start()] + included_content + content[match.end() :]
            search_pos = match.start() + len(included_content)
        else:
            print(f"Warning: Included file {include_file} not found at {include_file_path}")
            placeholder = f"<!-- Missing include: {include_file} -->"
            content = content[: match.start()] + placeholder + content[match.end() :]
            search_pos = match.start() + len(placeholder)
        match = INCLUDE_PATTERN.search(content, search_pos)
    return content


def find_main_ptx_files(search_root: str | Path = ".") -> list[Path]:
    """Locate main*.ptx files under the provided search root."""
    return sorted(Path(search_root).rglob("main*.ptx"))


def main() -> None:
    """Prompt for a main .ptx file and produce a de-modularized output."""
    main_ptx_files = find_main_ptx_files()

    if not main_ptx_files:
        print("No main .ptx files found in the current directory and subdirectories.")
        return

    print("\nSelect a main .ptx file to de-modularize:\n")
    for index, file_path in enumerate(main_ptx_files, start=1):
        print(f"    {index}. {file_path}")

    try:
        selection = int(input("\nEnter the number of the file: "))
        input_file = main_ptx_files[selection - 1]
    except (ValueError, IndexError):
        print("Invalid selection.")
        return

    output_file = input("\nEnter the name for the de-modularized .ptx file: ").strip()
    if not output_file:
        print("Output file name cannot be empty.")
        return
    if output_file in {".", ".."}:
        print("Output file name must be a valid file path.")
        return

    output_path = Path(output_file).expanduser()
    resolved_output_path = output_path.resolve()
    if resolved_output_path.exists() and resolved_output_path.is_dir():
        print("Output file path must point to a file, not a directory.")
        return

    base_path = input_file.parent
    main_content = read_file(input_file)
    de_modularized_content = process_includes(main_content, base_path)

    write_file(resolved_output_path, de_modularized_content)
    print(f"\nDe-modularized file created: {resolved_output_path}")

if __name__ == "__main__":
    main()
