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
        CREATE TABLE IF NOT EXISTS file_structure (
            id INTEGER PRIMARY KEY,
            path TEXT UNIQUE,
            parent_id INTEGER,
            FOREIGN KEY(parent_id) REFERENCES file_structure(id)
        )
    ''')

    # Function to recursively scan directory and update database
    def scan_and_update(current_path, parent_id=None):
        for entry in os.listdir(current_path):
            full_path = os.path.join(current_path, entry)
            if os.path.isdir(full_path):
                cursor.execute('INSERT OR IGNORE INTO file_structure (path, parent_id) VALUES (?, ?)', (full_path, parent_id))
                new_parent_id = cursor.lastrowid if cursor.lastrowid else cursor.execute('SELECT id FROM file_structure WHERE path = ?', (full_path,)).fetchone()[0]
                scan_and_update(full_path, new_parent_id)
            else:
                cursor.execute('INSERT OR IGNORE INTO file_structure (path, parent_id) VALUES (?, ?)', (full_path, parent_id))
    
    # Start scanning from the base path
    scan_and_update(base_path)
    conn.commit()
    conn.close()

# Function to detect changes in directory structure
def detect_changes(base_path, db_path):
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    current_structure = []
    for root, dirs, files in os.walk(base_path):
        for name in dirs + files:
            current_structure.append(os.path.join(root, name))

    cursor.execute('SELECT path FROM file_structure')
    db_structure = [row[0] for row in cursor.fetchall()]

    added = set(current_structure) - set(db_structure)
    removed = set(db_structure) - set(current_structure)

    conn.close()
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
def main(base_path, db_path):
    if not os.path.exists(db_path):
        scan_directory(base_path, db_path)
    else:
        added, removed = detect_changes(base_path, db_path)
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
base_path = 'path/to/book_directory'  # Replace with the path to the book's directory
db_path = 'file_structure.db'

main(base_path, db_path)
