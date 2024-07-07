import os
import shutil
import xml.etree.ElementTree as ET

# Register namespaces
ET.register_namespace('xi', 'http://www.w3.org/2001/XInclude')

# Function to parse the main-focus.ptx file to determine the directory structure
def parse_main_focus(file_path, source_base):
    tree = ET.parse(file_path)
    root = tree.getroot()
    
    paths = []
    def extract_paths(element, base_path=source_base):
        for child in element:
            if 'href' in child.attrib:
                href = child.attrib['href']
                paths.append(os.path.normpath(os.path.join(base_path, href)))
            extract_paths(child, base_path)
    
    extract_paths(root)
    return paths

# Function to detect changes between old and new structures
def detect_specific_changes(old_structure, new_structure):
    changes = []
    old_set = set(old_structure)
    new_set = set(new_structure)

    removed = old_set - new_set
    added = new_set - old_set

    for old_path in removed:
        old_name, old_ext = os.path.splitext(os.path.basename(old_path))
        possible_matches = [new_path for new_path in added if os.path.splitext(os.path.basename(new_path))[0] == old_name]
        for new_path in possible_matches:
            changes.append((old_path, new_path))
            added.remove(new_path)
            break

    for old_path in removed:
        old_dir = os.path.dirname(old_path)
        possible_matches = [new_path for new_path in added if os.path.dirname(new_path) == old_dir]
        for new_path in possible_matches:
            changes.append((old_path, new_path))
            added.remove(new_path)
            break

    return changes

# Function to update references in XML files
def update_references(base_path, changes):
    for root, _, files in os.walk(base_path):
        for file in files:
            if file.endswith('.ptx'):
                file_path = os.path.join(root, file)
                try:
                    tree = ET.parse(file_path)
                    root_element = tree.getroot()
                    updated = False
                    for elem in root_element.iter():
                        if 'href' in elem.attrib:
                            href = elem.attrib['href']
                            for old, new in changes:
                                old_name, old_ext = os.path.splitext(os.path.basename(old))
                                new_name, new_ext = os.path.splitext(os.path.basename(new))
                                if old_name in href:
                                    elem.attrib['href'] = href.replace(old_name, new_name)
                                    elem.tag = '{http://www.w3.org/2001/XInclude}include'  # Ensure the tag is correct
                                    updated = True
                    if updated:
                        tree.write(file_path)
                except ET.ParseError as e:
                    print(f"Error parsing {file_path}: {e}")

# Function to rename files and folders
def rename_files_and_folders(base_path, changes):
    def rename_path(old, new):
        old_path = os.path.abspath(old)
        new_path = os.path.abspath(new)
        print(f"Attempting to rename: {old_path} -> {new_path}")
        if os.path.exists(old_path):
            if os.path.isdir(old_path):
                if not os.path.exists(new_path):
                    os.makedirs(new_path)
                for item in os.listdir(old_path):
                    old_item_path = os.path.join(old_path, item)
                    new_item_path = os.path.join(new_path, item.replace(old_name, new_name))
                    rename_path(old_item_path, new_item_path)
                shutil.rmtree(old_path)
            else:
                new_dir = os.path.dirname(new_path)
                if not os.path.exists(new_dir):
                    os.makedirs(new_dir)
                shutil.move(old_path, new_path)
            print(f"Successfully renamed: {old_path} -> {new_path}")
        else:
            print(f"Error: {old_path} does not exist.")

    # Rename initial changes
    for old, new in changes:
        old_name, old_ext = os.path.splitext(os.path.basename(old))
        new_name, new_ext = os.path.splitext(os.path.basename(new))
        rename_path(old, new)

    # Rename any additional files containing the changed names
    for root, _, files in os.walk(base_path):
        for file in files:
            file_path = os.path.join(root, file)
            for old, new in changes:
                old_name, old_ext = os.path.splitext(os.path.basename(old))
                new_name, new_ext = os.path.splitext(os.path.basename(new))
                if old_name in file:
                    new_file_path = file_path.replace(old_name, new_name)
                    rename_path(file_path, new_file_path)

# Main function to execute the script
def main(base_path, main_focus_file):
    old_main_focus_file = main_focus_file + '.old'
    source_base = os.path.join(base_path, 'source')
    
    # Save the current main-focus.ptx as the old version if it doesn't exist
    if not os.path.exists(old_main_focus_file):
        shutil.copy2(main_focus_file, old_main_focus_file)
    
    # Parse the old and new main-focus files to get the structures
    old_structure = parse_main_focus(old_main_focus_file, source_base)
    new_structure = parse_main_focus(main_focus_file, source_base)
    
    # Detect specific changes between old and new structures
    specific_changes = detect_specific_changes(old_structure, new_structure)

    if specific_changes:
        print("Detected changes:")
        for old, new in specific_changes:
            print(f"  {old} -> {new}")

        # Confirm changes
        confirm = input("Do you want to apply these changes? (yes/no): ").strip().lower()
        if confirm == 'yes':
            update_references(source_base, specific_changes)
            rename_files_and_folders(source_base, specific_changes)
            print("References and file names updated successfully.")
            # Update the old main-focus file to the current one for future comparisons
            shutil.copy2(main_focus_file, old_main_focus_file)
        else:
            print("No changes applied.")
    else:
        print("No changes detected in the directory structure.")

# Example usage
base_path = '/home/gcox/runestone/books/debookrs'  # Replace with the path to the book's directory
main_focus_file = '/home/gcox/runestone/books/debookrs/source/main-focus.ptx'  # Replace with the path to the main-focus.ptx file

main(base_path, main_focus_file)
