import os
import re

def read_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        return file.read()

def write_file(file_path, content):
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(content)

def process_includes(content, base_path):
    include_pattern = re.compile(r'<xi:include href="([^"]+)"')
    
    while include_pattern.search(content):
        for match in include_pattern.finditer(content):
            include_file = match.group(1)
            include_file_path = os.path.abspath(os.path.join(base_path, include_file))
            include_dir = os.path.dirname(include_file_path)
            
            if os.path.exists(include_file_path):
                included_content = read_file(include_file_path)
                included_content = process_includes(included_content, include_dir)
                include_tag = match.group(0)
                content = content.replace(include_tag, included_content, 1)
            else:
                print(f"Warning: Included file {include_file} not found at {include_file_path}")
    
    return content

def find_main_ptx_files():
    main_ptx_files = []
    for root, _, files in os.walk('.'):
        for file in files:
            if file.startswith('main') and file.endswith('.ptx'):
                main_ptx_files.append(os.path.join(root, file))
    return main_ptx_files

def main():
    main_ptx_files = find_main_ptx_files()
    
    if not main_ptx_files:
        print("No main .ptx files found in the current directory and subdirectories.")
        return
    
    print("\nSelect a main .ptx file to de-modularize:\n")
    for i, file in enumerate(main_ptx_files, start=1):
        print(f"    {i}. {file}")
    
    try:
        selection = int(input("\nEnter the number of the file: "))
        if selection < 1 or selection > len(main_ptx_files):
            raise ValueError
        input_file = main_ptx_files[selection - 1]
    except ValueError:
        print("Invalid selection.")
        return
    
    output_file = input("\nEnter the name for the de-modularized .ptx file: ")
    
    base_path = os.path.dirname(input_file)
    main_content = read_file(input_file)
    de_modularized_content = process_includes(main_content, base_path)
    
    write_file(output_file, de_modularized_content)
    print(f"\nDe-modularized file created: {output_file}")

if __name__ == "__main__":
    main()
