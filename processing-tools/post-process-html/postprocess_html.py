#!/usr/bin/env python3

import os
import sys
import json
import argparse
import re
from pathlib import Path

def load_replacements(json_path):
    try:
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        if not isinstance(data, list):
            raise ValueError("JSON must be a list of replacement rules.")

        replacements = []
        for i, item in enumerate(data):
            if not isinstance(item, dict):
                raise ValueError(f"Item {i+1} in JSON is not a dictionary.")

            find = item.get("find")
            replace = item.get("replace")
            use_regex = item.get("regex", False)

            if not isinstance(find, str) or not isinstance(replace, str):
                raise ValueError(f"Item {i+1} must contain string 'find' and 'replace' fields.")
            if not isinstance(use_regex, bool):
                raise ValueError(f"Item {i+1} has non-boolean 'regex' field.")

            # Validate regex syntax early
            if use_regex:
                try:
                    re.compile(find)
                except re.error as e:
                    raise ValueError(f"Invalid regex in item {i+1}: {e}")

            replacements.append((find, replace, use_regex))

        return replacements

    except FileNotFoundError:
        sys.exit(f"Error: JSON file '{json_path}' not found.")
    except json.JSONDecodeError as e:
        sys.exit(f"Error parsing JSON: {e}")
    except Exception as e:
        sys.exit(f"Unexpected error reading JSON: {e}")

def get_html_files(root_dir):
    html_files = []
    for dirpath, _, filenames in os.walk(root_dir):
        for file in filenames:
            if file.endswith('.html'):
                html_files.append(Path(dirpath) / file)
    return html_files

def process_html_file(file_path, replacements):
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content
        for find, replace, use_regex in replacements:
            if use_regex:
                content = re.sub(find, replace, content)
            else:
                content = content.replace(find, replace)

        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Updated: {file_path}")
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

def main():
    cwd = os.getcwd()
    parser = argparse.ArgumentParser(description="Post-process PreTeXt HTML files with regex or plain string replacements.")
    parser.add_argument("replacements_json", help="Path to the JSON file with replacement rules.")
    parser.add_argument("html_directory", help="Path to the directory containing HTML files.")
    args = parser.parse_args()
    
    html_dir = Path(f"{cwd}/{args.html_directory}")
    if not html_dir.exists() or not html_dir.is_dir():
        sys.exit(f"Error: '{html_dir}' is not a valid directory.")

    replacements = load_replacements(f"{cwd}/{args.replacements_json}")
    html_files = get_html_files(html_dir)

    if not html_files:
        print(f"No HTML files found in '{html_dir}'.")
        return

    for file_path in html_files:
        process_html_file(file_path, replacements)

if __name__ == "__main__":
    main()
