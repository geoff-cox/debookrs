import os
import sqlite3
import xml.etree.ElementTree as ET

# Function to scan directory and create/update the database
def scan_directory(base_path, db_path):
    # Connect to the database
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Create table if not exists
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS dir_structure (
            id INTEGER PRIMARY KEY,
            path TEXT UNIQUE,
            parent_id INTEGER,
            FOREIGN KEY(parent_id) REFERENCES dir_structure(id)
        )
    ''')

    # Function to recursively scan directory and update database
    def scan_and_update(current_path, parent_id=None):
        for entry in os.listdir(current_path):
            full_path = os.path.join(current_path, entry)
            if os.path.isdir(full_path):
                cursor.execute('INSERT OR IGNORE INTO dir_structure (path, parent_id) VALUES (?, ?)', (full_path, parent_id))
                new_parent_id = cursor.lastrowid if cursor.lastrowid else cursor.execute('SELECT id FROM dir_structure WHERE path = ?', (full_path,)).fetchone()[0]
                scan_and_update(full_path, new_parent_id)
            else:
                cursor.execute('INSERT OR IGNORE INTO dir_structure (path, parent_id) VALUES (?, ?)', (full_path, parent_id))
    
    # Start scanning from the base path
    scan_and_update(base_path)
    conn.commit()
    conn.close()

# Function to parse the main-focus.ptx file to determine the new structure
def parse_main_focus(file_path):
    tree = ET.parse(file_path)
    root = tree.getroot()
    
    paths = []
    def extract_paths(element, base_path=""):
        for child in element:
            if child.tag == '{http://www.w3.org/2001/XInclude}include':
                href = child.attrib.get('href', '')
                paths.append(os.path.normpath(os.path.join(base_path, href)))
            extract_paths(child, base_path)
    
    extract_paths(root)
    return paths

# Function to detect changes in directory structure
def detect_changes(old_structure, new_structure):
    old_set = set(old_structure)
    new_set = set(new_structure)

    added = new_set - old_set
    removed = old_set - new_set

    return added, removed

# Function to update references in XML files
def update_references(base_path, changes):
    for root, _, files in os.walk(base_path):
        for file in files:
            if file.endswith('.ptx'):
                file_path = os.path.join(root, file)
                tree = ET.parse(file_path)
                root_element = tree.getroot()
                updated = False
                for elem in root_element.iter():
                    if elem.tag == '{http://www.w3.org/2001/XInclude}include':
                        href = elem.attrib.get('href', '')
                        for old, new in changes:
                            if old in href:
                                elem.attrib['href'] = href.replace(old, new)
                                updated = True
                if updated:
                    tree.write(file_path)

# Main function to execute the script
def main(base_path, db_path, main_focus_file):
    if not os.path.exists(db_path):
        scan_directory(base_path, db_path)
    else:
        # Parse the main-focus.ptx file to get the new structure
        new_structure = parse_main_focus(main_focus_file)
        
        # Get the old structure from the database
        conn = sqlite3.connect(db_path)
        cursor = conn.cursor()
        cursor.execute('SELECT path FROM dir_structure')
        old_structure = [row[0] for row in cursor.fetchall()]
        conn.close()
        
        # Detect changes
        added, removed = detect_changes(old_structure, new_structure)
        changes = []

        if added or removed:
            print("Detected changes in the directory structure:")
            if added:
                print("Added:")
                for item in added:
                    print(f"  {item}")
            if removed:
                print("Removed:")
                for item in removed:
                    print(f"  {item}")

            # Assuming changes are renames or moves
            for item in removed:
                new_name = input(f"Enter new name or path for '{item}' if it was renamed or moved (leave empty if not applicable): ").strip()
                if new_name:
                    changes.append((item, new_name))

            # Confirm changes
            if changes:
                confirm = input("Do you want to apply these changes? (yes/no): ").strip().lower()
                if confirm == 'yes':
                    update_references(base_path, changes)
                    scan_directory(base_path, db_path)  # Update the database with the new structure

# Example usage
base_path = 'source/'  # Replace with the path to the book's directory
db_path = 'assets/code/directory-renamer/dir_structure.db'
main_focus_file = 'source/main-focus.ptx'  # Replace with the path to the main-focus.ptx file

main(base_path, db_path, main_focus_file)
