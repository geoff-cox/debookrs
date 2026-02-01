#!/usr/bin/env python3

"""Apply replacement rules to generated PreTeXt HTML output.

This script accepts a JSON list of replacement rules and applies them to every
HTML file in the provided directory. For large builds, a future enhancement
could stream file updates or skip unchanged files to reduce memory usage.
"""

import argparse
import json
import re
import sys
from pathlib import Path

def load_replacements(json_path: Path) -> list[tuple[str, str, bool]]:
    """Load and validate replacement rules from a JSON file."""
    try:
        with json_path.open("r", encoding="utf-8") as file_handle:
            data = json.load(file_handle)

        if not isinstance(data, list):
            raise ValueError("JSON must be a list of replacement rules.")

        replacements = []
        for i, item in enumerate(data, start=1):
            if not isinstance(item, dict):
                raise ValueError(f"Item {i} in JSON is not a dictionary.")

            find = item.get("find")
            replace = item.get("replace")
            use_regex = item.get("regex", False)

            if not isinstance(find, str) or not isinstance(replace, str):
                raise ValueError(f"Item {i} must contain string 'find' and 'replace' fields.")
            if not isinstance(use_regex, bool):
                raise ValueError(f"Item {i} has non-boolean 'regex' field.")

            # Validate regex syntax early
            if use_regex:
                try:
                    re.compile(find)
                except re.error as exc:
                    raise ValueError(f"Invalid regex in item {i}: {exc}") from exc

            replacements.append((find, replace, use_regex))

        return replacements

    except FileNotFoundError:
        sys.exit(f"Error: JSON file '{json_path}' not found.")
    except PermissionError as exc:
        sys.exit(f"Error: permission denied reading '{json_path}': {exc}")
    except UnicodeDecodeError as exc:
        sys.exit(f"Error: unable to decode '{json_path}' as UTF-8: {exc}")
    except json.JSONDecodeError as exc:
        sys.exit(f"Error parsing JSON: {exc}")
    except OSError as exc:
        sys.exit(f"Error reading JSON file '{json_path}': {exc}")
    except Exception as exc:
        sys.exit(f"Unexpected error reading JSON ({type(exc).__name__}): {exc}")

def get_html_files(root_dir: Path) -> list[Path]:
    """Collect all HTML files beneath the provided root directory."""
    return sorted(path for path in root_dir.rglob("*.html") if path.is_file())

def process_html_file(file_path: Path, replacements: list[tuple[str, str, bool]]) -> bool:
    """Apply replacement rules to a single HTML file.

    Returns True when the file content changes, otherwise False.
    """
    try:
        content = file_path.read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError) as exc:
        print(f"Error reading {file_path}: {exc}")
        return False

    original_content = content
    try:
        for find, replace, use_regex in replacements:
            if use_regex:
                content = re.sub(find, replace, content)
            else:
                content = content.replace(find, replace)
    except re.error as exc:
        print(f"Error applying replacements to {file_path}: {exc}")
        return False
    except Exception as exc:
        print(f"Error processing replacements for {file_path}: {exc}")
        return False

    if content != original_content:
        try:
            file_path.write_text(content, encoding="utf-8")
        except OSError as exc:
            print(f"Error writing {file_path}: {exc}")
            return False
        print(f"Updated: {file_path}")
        return True
    return False

def main() -> None:
    """CLI entry point for applying HTML post-processing rules."""
    parser = argparse.ArgumentParser(
        description="Post-process PreTeXt HTML files with regex or plain string replacements."
    )
    parser.add_argument("replacements_json", help="Path to the JSON file with replacement rules.")
    parser.add_argument("html_directory", help="Path to the directory containing HTML files.")
    args = parser.parse_args()

    html_dir = Path(args.html_directory).expanduser().resolve()
    if not html_dir.is_dir():
        sys.exit(f"Error: '{html_dir}' is not a valid directory.")

    replacements_path = Path(args.replacements_json).expanduser().resolve()
    replacements = load_replacements(replacements_path)
    html_files = get_html_files(html_dir)

    if not html_files:
        print(f"No HTML files found in '{html_dir}'.")
        return

    for file_path in html_files:
        process_html_file(file_path, replacements)

if __name__ == "__main__":
    main()
