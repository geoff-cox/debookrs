#!/usr/bin/env python3
"""Copy every file with one extension to a new file with a different extension.

For each `.sourceType` file in the current working directory, this makes a copy
with the same base name but a `.copyType` extension, written into a
`copied-files` subfolder. The subfolder is created if it doesn't exist and
reused if it does; files of the same name are overwritten.

Usage:
    python copy_ext.py <sourceType> <copyType>

Examples:
    python copy_ext.py .txt .bak      # report.txt -> copied-files/report.bak
    python copy_ext.py csv tsv        # leading dots are optional
"""

import shutil
import sys
from pathlib import Path

DEST_DIRNAME = "copied-files"


def normalize_ext(ext: str) -> str:
    """Return the extension with exactly one leading dot (e.g. 'txt' -> '.txt')."""
    return "." + ext.strip().lstrip(".")


def copy_by_extension(source_ext: str, copy_ext: str) -> int:
    """Copy each source_ext file in the CWD into copied-files/. Returns the count."""
    source_ext = normalize_ext(source_ext)
    copy_ext = normalize_ext(copy_ext)

    cwd = Path.cwd()
    dest_dir = cwd / DEST_DIRNAME
    dest_dir.mkdir(exist_ok=True)  # create if missing, reuse if present

    count = 0
    for src in sorted(cwd.glob(f"*{source_ext}")):
        if not src.is_file():
            continue
        dst = dest_dir / f"{src.stem}{copy_ext}"
        shutil.copy2(src, dst)  # overwrites an existing file of the same name
        print(f"{src.name} -> {dest_dir.name}/{dst.name}")
        count += 1

    if count == 0:
        print(f"No '{source_ext}' files found in {cwd}")
    else:
        print(f"Copied {count} file(s) into {dest_dir}")
    return count


def main() -> None:
    if len(sys.argv) != 3:
        sys.exit("Usage: python copy_ext.py <sourceType> <copyType>")
    copy_by_extension(sys.argv[1], sys.argv[2])


if __name__ == "__main__":
    main()
