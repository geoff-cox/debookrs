#!/usr/bin/env python
# coding: utf-8

"""Utility helpers for converting LaTeX input into PreTeXt-friendly output."""

import re
from xml.sax.saxutils import escape

# Matches characters disallowed in xml:id values (letters, digits, underscores only).
XML_ID_INVALID_CHARS = re.compile(r"[^A-Za-z0-9_]")
DEFAULT_BOOK_ID = "book_default"

######################################################################################
# Helper Functions

def sanitize_xml_id(value: str) -> str:
    """Sanitize user input into a valid xml:id string.

    Returns an empty string when no valid characters remain after sanitization.
    """
    sanitized = XML_ID_INVALID_CHARS.sub("_", value.strip())
    if not sanitized:
        return ""
    if not re.match(r"^[A-Za-z_]", sanitized):
        sanitized = f"_{sanitized}"
    return sanitized


def add_header(book_id: str, book_title: str, files_lines: list[str] | None = None) -> list[str]:
    """Return a PreTeXt header block appended to existing lines.

    Args:
        book_id: Source identifier; sanitized to a valid xml:id.
        book_title: Title text escaped for XML element content.
        files_lines: Existing lines to prepend before the header.
    """
    if files_lines is None:
        files_lines = []
    sanitized_id = sanitize_xml_id(book_id)
    safe_book_id = sanitized_id or sanitize_xml_id(book_title) or DEFAULT_BOOK_ID
    safe_book_title = escape(book_title)
    new_lines = files_lines.copy()
    new_lines.extend(
        [
            '<?xml version="1.0" encoding="UTF-8"?>\n',
            "\n",
            '<pretext xmlns:xi="http://www.w3.org/2001/XInclude" xml:lang="en-US">\n',
            "\n",
            '<xi:include href="./sections/book-info.ptx" />\n',
            "\n",
            f'<book xml:id="{safe_book_id}">\n',
            f"<title>{safe_book_title}</title>\n",
            "\n",
        ]
    )
    return new_lines

def add_footer(files_lines: list[str]) -> list[str]:
    """Append closing PreTeXt tags to the provided line list."""
    new_lines = files_lines.copy()
    new_lines.extend(["</book>\n", "\n", "</pretext>\n"])
    return new_lines

def get_line_type(line: str) -> str:
    """Classify a line of input for the LaTeX-to-PreTeXt parser."""
    if re.search(r"^%", line) or re.search(r"^<!--", line):
        return "comment"
    if line == "\n":
        return "blank"
    if re.search(r"\\begin\{Example\}", line) or re.search(r"<example xml:", line):
        return "b_example"
    if re.search(r"\\end\{Example\}", line) or re.search(r"</example>", line):
        return "e_example"
    if re.search(r"\\section", line) or re.search(r"<section xml:", line):
        return "section"
    if re.search(r"</section>", line):
        return "e_section"
    if re.search(r"^\\index", line):
        return "index"
    if re.search(r"^\\verb\|.*?\|$", line):
        return "single_verb"
    if re.search(r"^\\verb\|.*?\|\s*\w+[\\$]", line):
        return "single_verb_w_text"
    if (
        re.search(r"^\\verb\|.*\|$", line) or re.search(r"^\\verb\|.*\|\s*[\\$]", line)
    ):
        return "multi_verb"
    if re.search(r"\\ps \\verb", line):
        return "in_verb"
    if re.search(r"^.*<pre>.*</pre>.+$|^.+<pre>.*</pre>.*$", line):
        return "inline_pre"
    if re.search(r"<p>", line):
        return "b_paragraph"
    if re.search(r"</p>", line):
        return "e_paragraph"
    if re.search(r"^<pre>", line):
        return "b_pre"
    if re.search(r"</pre>$", line):
        return "e_pre"
    if re.search(r"^<sidebyside", line):
        return "b_sidebyside"
    if re.search(r"</sidebyside>$", line):
        return "e_sidebyside"
    if re.search(r"^<program", line):
        return "b_program"
    if re.search(r"</program>$", line):
        return "e_program"
    if re.search(r"^<input", line):
        return "b_input"
    if re.search(r"</input>$", line):
        return "e_input"
    if re.search(r"<title>", line):
        return "title"
    if (
        re.search(r"\\noindent \\large \\textsf\{", line)
        or re.search(r"<paragraphs xml:", line)
        or re.search(r"\\subsection\{", line)
    ):
        return "b_subsection"
    if re.search(r"</paragraphs>", line) or re.search(r"</paragraphs/>", line):
        return "e_subsection"
    if re.search(r"^\s*\\\[\s*$", line) or re.search(r"<md>", line):
        return "b_dmath"
    if re.search(r"^\s*\\\]\s*$", line) or re.search(r"</md>", line):
        return "e_dmath"
    if re.search(r"\\begin\{array", line):
        return "b_array"
    if re.search(r"\\end\{array", line):
        return "e_array"
    if re.search(r"\\begin\{align", line):
        return "b_align"
    if re.search(r"\\end\{align", line):
        return "e_align"
    if re.search(r"\\begin\{table", line) or re.search(r"<table", line):
        return "b_table"
    if re.search(r"\\end\{table", line) or re.search(r"</table", line):
        return "e_table"
    if re.search(r"\\begin\{tabular", line) or re.search(r"<tabular", line):
        return "b_tabular"
    if re.search(r"\\end\{tabular", line) or re.search(r"</tabular", line):
        return "e_tabular"
    if re.search(r"\\begin\{enumerate", line):
        return "b_enumerate"
    if re.search(r"\\end\{enumerate", line):
        return "e_enumerate"
    if re.search(r"\\begin\{itemize", line):
        return "b_itemize"
    if re.search(r"\\end\{itemize", line):
        return "e_itemize"
    if re.search(r"<ol>", line):
        return "b_olist"
    if re.search(r"</ol>", line):
        return "e_olist"
    if re.search(r"<ul>", line):
        return "b_ulist"
    if re.search(r"</ul>", line):
        return "e_ulist"
    if re.search(r"\\item\[.*?\]", line):
        return "item_w_arg"
    if re.search(r"\\item", line):
        return "item"
    if re.search(r"<row", line):
        return "b_row"
    if re.search(r"</row", line):
        return "e_row"
    if re.search(r"<li>", line):
        return "b_item"
    if re.search(r"</li>", line):
        return "e_item"
    return "other"

# get tab depth
def get_tab_depth(line: str) -> int:
    """Return the number of leading tab characters in a line."""
    return len(line) - len(line.lstrip("\t"))

def is_troy_chapter(lines: list[str]) -> bool:
    """Detect whether a chapter uses Troy-specific LaTeX macros."""
    for line in lines[:5]:
        if re.search(r"\\settikzpagecorners", line):
            return True
    return False


######################################################################################
#### Parser Functions

#### Section Parser

# - Splits the sections into independent xml files
# - Converts the section syntax

def get_section_info(line,n,chpt,saveto):
    # get title and reference label
    section_match1 = re.search(r'\\section\{\s*(.*)?\s*:\s*(.*)?\}\\label\{\s*sec:(.*)?\s*\}', line)
    section_match2 = re.search(r'\\section\{\s*(.*)?\s*\}\\label\{\s*(.*)?\s*\}', line)
    section_match3 = re.search(r'\\section\{\s*(.*)?\s*\}', line)
    if section_match1 != None:
        return { 'title' : section_match1.group(2), 
                 'label' : 'sec-' + section_match1.group(3), 
                 'filename' : saveto + 'sec-' + f"{chpt:02d}" + "_" + f"{n:02d}" + '-' + section_match1.group(3).lower() + '.xml'}
    elif section_match2 != None:
        return { 'title' : section_match2.group(1), 
                 'label' : 'sec-' + section_match2.group(2), 
                 'filename' : saveto + 'sec-' + f"{chpt:02d}" + "_" + f"{n:02d}" + '-' + section_match2.group(2).lower() + '.xml'}
    else:
        generic_label = re.sub(r'\s','_',section_match3.group(1).lower())
        return { 'title' : section_match3.group(1), 
                 'label' : 'sec-' + generic_label,
                 'filename' : saveto + 'sec-' + f"{chpt:02d}" + "_" + f"{n:02d}" + '-' + generic_label + '.xml'}
        
# Important charaters that must be done first!
def parse_exceptional_chars(lines):
    converted_lines = []
    for line in lines:
        # ampersand char
        line = re.sub(r'\\\&|\&', '&amp;', line)
        # < ;
        line = re.sub(r'\<', '&lt;', line)
        # > ;
        line = re.sub(r'\>', '&gt;', line)
        
        converted_lines.append(line)
    
    return converted_lines

# Description: separates each latex section into a new pretext section
# Inputs:
#   1. lines (list) contains all lines of latex file.
# Outputs:
#   1. pretext_sections (list of dictionaries) 
def split_sections(lines, chpt = '', saveto = []):
    # critical replacements
    lines = parse_exceptional_chars(lines)
    # list of filenames that are split
    filenames = []
    section_number = 1
    # add section header lines
    pretext_header = []
    pretext_header.append('<?xml version="1.0" encoding="UTF-8" ?>\n')
    pretext_header.append('\n')
    pretext_header.append('<!--********************************************************************-->\n')
    pretext_header.append('\n')
    pretext_lines = pretext_header.copy()
    for line in lines:
        line_type = get_line_type(line)
        # check for section
        if line_type == 'section':
            if section_number == 1: # first section found
                section_info = get_section_info(line,section_number,chpt,saveto)
                pretext_file = open(section_info['filename'], "w+")
                filenames.append(section_info['filename'])
                section_number += 1
            else: # end of current section
                pretext_lines.append('</section>\n\n') # end last section
                pretext_file.writelines(pretext_lines)
                pretext_file.close()
                pretext_lines = pretext_header.copy()
                section_info = get_section_info(line,section_number,chpt,saveto)
                section_number += 1
                filenames.append(section_info['filename'])
                pretext_file = open(section_info['filename'], "w+")
                
            pretext_lines.append('<section xml:id="' + section_info['label'] + '" xmlns:xi="http://www.w3.org/2001/XInclude">\n')
            pretext_lines.append('<title>' + section_info['title'] + '</title>')
            pretext_lines.append('\n')
        else:
            pretext_lines.append(line)
    
    pretext_lines.append('\n')
    pretext_lines.append('</section>\n\n') # end last section
    pretext_file.writelines(pretext_lines)
    pretext_file.close()
    return filenames
                


#### Verbose Parser

# - Converts all latex = \verb environments to pretext = \<pre\> environments

def convert_verb_line(line,type = 'multi_verb'):
    if type == 'multi_verb':
        line = re.sub(r'\\\\', "\n", line) # line break character
        line = re.sub(r'\\ps', "\t", line) # tab character
        line = re.sub(r'\\verb\|(.*?)\|\n', "\t\g<1>\n", line)
        line = re.sub(r'\\verb\|(.*?)\|', "\t\g<1>\n", line)
    elif type == 'single_verb':
        line = re.sub(r'^\\verb\|(.*?)\|$', '\g<1>', line)
        line = re.sub(r'\\\\', '', line) # 
    return line

def parse_verbs(lines):
    in_multi_line_verb = False
    in_verb = False
    converted_lines = []
    # first line
    this_line = lines[0]
    for next_line in lines[1:]:
        this_line_type = get_line_type(this_line)
        next_line_type = get_line_type(next_line)
        #converted_lines.append(get_line_type(this_line))
        # check for multi-line verb
        if in_multi_line_verb: # continue multi-line verb
            # convert this line
            converted_lines.append(convert_verb_line(this_line[:-1]))
            # check for verb end
            if next_line_type not in ['in_verb','multi_verb']: # end multi-line verb
                #converted_lines.append('</pre>\n')
                #converted_lines.append('</p>\n')
                
                converted_lines.append('</input>\n')
                converted_lines.append('</program>\n')
                converted_lines.append('</sidebyside>\n')
                in_multi_line_verb = False
        # check this line for a single-verb
        elif this_line_type == 'single_verb' and next_line_type != 'in_verb':
            #converted_lines.append('<p>\n')
            #converted_lines.append('<c>\n')
            
            converted_lines.append('<sidebyside width="100%">\n')
            converted_lines.append('<program language="matlab">\n')
            converted_lines.append('<input>\n')
            converted_lines.append(convert_verb_line(this_line, 'single_verb'))
            converted_lines.append('</input>\n')
            converted_lines.append('</program>\n')
            converted_lines.append('</sidebyside>\n')
            
            #converted_lines.append('</c>\n')
            #converted_lines.append('</p>\n')
        elif this_line_type == 'multi_verb' or (this_line_type == 'single_verb' and next_line_type == 'in_verb'):
            in_multi_line_verb = True
            #converted_lines.append('<p>\n')
            #converted_lines.append('<pre>\n')
            
            converted_lines.append('<sidebyside width="100%">\n')
            converted_lines.append('<program language="matlab">\n')
            converted_lines.append('<input>\n')
            converted_lines.append(convert_verb_line(this_line[:-1])) 
        elif this_line_type == 'single_verb_w_text' and next_line_type in ['other','single_verb_w_text']:
            converted_lines.append('<p>\n')
            converted_lines.append(convert_verb_line(this_line, 'single_verb'))
            converted_lines.append('</p>\n')
            in_verb = True
        elif this_line_type == 'other' and in_verb:
            converted_lines.append('<p>\n')
            converted_lines.append(convert_verb_line(this_line, 'single_verb'))
            converted_lines.append('</p>\n')
            in_verb = False
        else:
            converted_lines.append(this_line)
        this_line = next_line
    
    converted_lines.append(next_line)
    return converted_lines


#### Example Parser

# - Converts all latex = \begin{example} environments to pretext = \<example\> environments

def get_example_info(line):
    # get label and 2nd argument
    ex_label_match = re.search(r'\\begin\{Example\}\{(.*)?\}\{(.*)?\}', line)
    label = ex_label_match.group(1)
    title = ex_label_match.group(2)
    return { 'label' : label, 'title' : title }
    
def parse_examples(lines):
    in_example = False
    converted_lines = []
    for line in lines:
        line_type = get_line_type(line)
        #converted_lines.append(get_line_type(line))
        # check for new example
        if line_type == 'b_example':
            in_example = True
            example_info = get_example_info(line)
            converted_lines.append('<example xml:id="' + example_info['label'] + '"><p/>\n')
            converted_lines.append('<title><em>' + example_info['title'] + '</em></title><p/>\n')
        # check for end of example
        elif line_type == 'e_example':
            in_example = False
            converted_lines.append('</example>\n')  
        else:
            converted_lines.append(line)
    
    return converted_lines

#### Paragraph Parser

def parse_paragraphs(lines):
    in_paragraph = False
    converted_lines = []
    prev_line = lines[0]
    for this_line in lines[1:]:
        prev_line_type = get_line_type(prev_line)
        this_line_type = get_line_type(this_line)
        
        #converted_lines.append(get_line_type(this_line))
        # check for beginning of paragraph 
        if prev_line_type == 'blank' and this_line_type == 'other':
            in_paragraph = True
            converted_lines.append('<p>\n')
        elif prev_line_type == 'other' and this_line_type in ['blank','e_example','b_paragraph'] and in_paragraph:
            in_paragraph = False
            converted_lines.append('</p>\n')
        
        converted_lines.append(this_line)
        prev_line = this_line
    
    converted_lines.append(this_line)
    
    return converted_lines

#### Subsection Parser

def get_subsection_info(line):
    # get label and 2nd argument
    header_match1 = re.search(r'\\noindent \\large \\textsf\{\\underline\{(.*?)\}: (.*?)\} \\normalsize', line)
    header_match2 = re.search(r'\\noindent \\large \\textsf\{\\textbf\{(.*?)\}\} \\normalsize', line)
    header_match3 = re.search(r'\\subsection\{\s*(.*?)\s*\}', line)
    if header_match1 != None:
        title = header_match1.group(1) + ': ' + header_match1.group(2)
        label = re.sub(r'\s','-',header_match1.group(2))
        label = re.sub(r':','',label)
        kind = 1
    elif header_match2 != None:
        title = '<c>' + header_match2.group(1) + '</c>'
        label = re.sub(r'\s','-',header_match2.group(1))
        label = re.sub('\s*\(.*?\)\s*','',label)
        label = re.sub(r':','',label)
        kind = 2
    elif header_match3 != None:
        title = header_match3.group(1)
        label = re.sub(r'\s','-',header_match3.group(1).lower())
        label = re.sub(r':','',label)
        kind = 3
    else:
        title = 'FUCK'
        label = 'SHIT'
        kind = 4

    return { 'title' : title, 'label' : label , 'kind' : kind}
    
def parse_subsections(lines):
    subsection_number = 1
    converted_lines = []
    for line in lines:
        line_type = get_line_type(line)
        # check for new subsection
        if line_type == 'b_subsection':
            if subsection_number == 1: # first subsection found
                subsection_info = get_subsection_info(line)
                subsection_number += 1
            else: # end of current subsection
                converted_lines.append('</paragraphs>\n') # end subsection
                converted_lines.append('\n')
                subsection_info = get_subsection_info(line)
                subsection_number += 1
                
            converted_lines.append('<paragraphs xml:id="' + subsection_info['label'] + '">\n')
            converted_lines.append('<title>' + subsection_info['title'] + '</title><p/>\n')
            converted_lines.append('\n')
        elif line_type == 'e_section' and subsection_number > 1:
            converted_lines.append('</paragraphs>\n') # end final subsection
            converted_lines.append('\n')
            converted_lines.append(line)
        else:
            converted_lines.append(line)
    
    return converted_lines


#### Display Math Parser

def parse_display_math(lines):
    in_math = False
    in_array = False
    in_align = False
    converted_lines = []
    for line in lines:
        line_type = get_line_type(line)
        # check for display math start
        #converted_lines.append(get_line_type(line))
        if line_type == 'b_dmath':
            in_math = True
            converted_lines.append(re.sub(r'\\\[', r'<md>', line))
        # check for display math end
        elif line_type == 'e_dmath':
            in_math = False
            converted_lines.append(re.sub(r'\\\]', r'</md>', line))
        # check for align env start
        elif line_type == 'b_align' and not(in_math):
            in_align = True
            converted_lines.append(re.sub(r'\\begin\{align\**\}', r'<md>', line))
        # check for align env end
        elif line_type == 'e_align' and not(in_math):
            in_align = False
            converted_lines.append(re.sub(r'\\end\{align\**\}', r'</md>', line))
        elif in_math or in_align:
            if line_type == 'b_array':
                in_array = True
            elif line_type == 'e_array':
                in_array = False
            elif in_array or in_align:
                # convert & to \amp
                #temp_line = re.sub(r'&', r'\\amp', line)
                line = re.sub(r'\\\\', r'', line)
                # wrap in <mrow>
                converted_lines.append(re.sub(r'^(.*)$', '<mrow>\g<1></mrow>', line))
            elif re.search(r'\\\]$',line) != None:
                converted_lines.append(re.sub(r'\\\]$', '', line))
                converted_lines.append('</md>\n')
                in_math = False
        else:
            converted_lines.append(line)

    return converted_lines

def get_list_items(lines,k=0):
    item_list = []
    item_list.append('<ol>\n')
    in_item = False
    while(k < len(lines)):
        line = lines[k]
        line_type = get_line_type(line)
        if line_type in ['b_enumerate','b_itemize']:
            [k,nested_lines] = get_list_items(lines,k+1)
            item_list = item_list + nested_lines
        elif line_type in ['e_enumerate','e_itemize']:
            item_list.append('</li>\n')
            item_list.append('</ol>\n')
            return [k,item_list]
        elif line_type in ['item','item_w_arg']:
            if in_item:
                item_list.append('</li>\n')
            else:
                in_item = True
                
            item_list.append('<li>\n')
            if line_type == 'item':
                item_list.append(re.sub(r'.*\\item\s*(.*)$','\g<1>', line))
            elif line_type == 'item_w_arg':
                item_list.append(re.sub(r'.*\\item\[.*?\]\s*(.*)$','\g<1>', line))
        else:
            if line_type != 'blank':
                item_list.append(line)
        k += 1

def parse_lists(lines):
    converted_lines = []
    k=0
    while k < len(lines):
        line = lines[k]
        line_type = get_line_type(line)
        #converted_lines.append(get_line_type(line))
        if line_type in ['b_enumerate','b_itemize']:
            [k,nested_lines] = get_list_items(lines,k+1)
            converted_lines = converted_lines + nested_lines
        else:
            converted_lines.append(line)
        k += 1
    return converted_lines

def get_table_info(lines,k=0):
    
    for k in range(k,len(lines)):
        line = lines[k]
        line_type = get_line_type(line)
        if line_type == 'b_tabular':
            [k,tabular] = parse_tabulars(lines,k)
        elif line_type == 'e_table':
            return k, { 'label' : label, 'caption' : caption, 'tabular': tabular}
            
        caption_match = re.search(r'\\caption\{\s*(.*?)\s*\}', line)
        if caption_match != None:
            caption = caption_match.group(1)
        label_match = re.search(r'\\label\{\s*(.*?)\s*\}', line)
        if label_match != None:
            label = label_match.group(1)

def parse_tables(lines):
    in_table = False
    converted_lines = []
    k = 0
    while k < len(lines):
        line = lines[k]
        line_type = get_line_type(line)
        #converted_lines.append(get_line_type(line))
        # check for new table
        if line_type == 'b_table':
            in_table = True
            [k, table_info] = get_table_info(lines,k+1)
            converted_lines.append('\n')
            converted_lines.append('<table xml:id="' + table_info['label'] + '">\n')
            converted_lines.append('<caption>' + table_info['caption'] + '</caption>\n')
            converted_lines = converted_lines + table_info['tabular']
            converted_lines.append('</table>') 
        else:
            converted_lines.append(line)
        k += 1
    
    return converted_lines

def get_tabular_info(line):
    tabular_match = re.search(r'\\begin\{tabular\}\{(.*)?\}', line)
    properties = tabular_match.group(1)
    properties_info = re.findall(r"c|r|l|p\{.*\}|\|", properties)
    vertical_lines = []
    col_alignment = []
    align_translator = {'c':'center','l':'left','r':'right','p':'left'}
    for p in properties_info:
        if p == '|':
            vertical_lines.append(True)
        else:    
            vertical_lines.append(False)
            col_alignment.append(align_translator[p[0]])
            
    return {'col_alignment' : col_alignment, 'vertical_lines' : vertical_lines}
            
def parse_tabulars(lines,k=0):
    in_tabular = False
    tabular_lines = []
    for k in range(k,len(lines)):
        line = lines[k]
        line_type = get_line_type(line)
        #converted_lines.append(get_line_type(line))
        # check for new tabular
        if line_type == 'b_tabular':
            in_tabular = True
            tabular_info = get_tabular_info(line)
            tabular_lines.append('<tabular>\n')
        # check for end of example
        elif line_type == 'e_tabular':
            in_tabular = False
            tabular_lines.append('</tabular>\n') 
            return k, tabular_lines
        else:
            row_items = re.split(r"\s*&amp;\s*",line)
            if re.search(r'\\hline',row_items[-1]) != None:
                tabular_lines.append('<row bottom="minor">\n')
            else:
                tabular_lines.append('<row>\n')

            for i in range(len(row_items)):
                item = re.sub(r'^\s*','',row_items[i])
                item = re.sub(r'\s*\n\s*','',item)
                item = re.sub(r'\s*\\hline\s*','',item)
                if i == len(row_items) and tabular_info['vertical_lines'][i] and tabular_info['vertical_lines'][i+1]:
                    tabular_lines.append('<cell left="minor" right="minor" halign="' + tabular_info['col_alignment'][i] + '">' + item + '</cell>')
                elif tabular_info['vertical_lines'][i]:
                    tabular_lines.append('<cell left="minor" halign="' + tabular_info['col_alignment'][i] + '">' + item + '</cell>')
                else:
                    tabular_lines.append('<cell halign="' + tabular_info['col_alignment'][i] + '">' + item + '</cell>')
                tabular_lines.append('\n')
            tabular_lines.append('</row>\n')


#### General Parser (Find & Replace, Ignore, Delete)

# Converts:
# 
# - inline math: $\$$ $\to$ \<m\>
# - boldface text: \textbf $\to$ \<term\>
# - italic text: \it $\to$ \<em\>
# - double left single quotes: `` $\to$ "
# - double right single quotes: '' $\to$ "
# - inline \verb: \verb $\to$ \<c\>
# 
# Ignores:
# 
# - %\settikzpagecorners
# 
# Removes:
# 
# - ?

def parse_general_top_priority(lines):
    
    converted_lines = []
    for line in lines:
        
        # Conversion items ------------------------------
        # color element
        line = re.sub(r'\{\\color\{.*?\}\s*(.*?)\}', '\g<1>', line)
        
        converted_lines.append(line)
        
    return converted_lines

def parse_general_low_priority(lines):
    
    ignore_line = False
    converted_lines = []
    for l in range(len(lines)):
        
        line = lines[l]
        # Ignore items ------------------------------
        if re.search(r'%\\settikzpagecorners', line) != None:
            ignore_line = True 
        elif re.search(r'\\index', line) != None:
            ignore_line = True

        # Conversion items ------------------------------
        # inline math
        line = re.sub(r'\$(.*?)\$', '<m>\g<1></m>', line)
        # boldface text
        line = re.sub(r'\\textbf\{(.*?)\}', '<term>\g<1></term>', line)
        # italic text
        line = re.sub(r'\{\\it (.*?)\}', '<em>\g<1></em>', line)
        # double left single quotes
        line = re.sub(r'``', '"', line)
        # double right single quotes
        line = re.sub(r"''",'"', line)
        # inline \verb
        line = re.sub(r'\\verb\|(.*?)\|', '<c>\g<1></c>', line)
        # comments
        line = re.sub(r'^\s*%(.*)', '<!-- \g<1> -->', line)
        # line break character
        line = re.sub(r'\\\\', '\n', line) 
        # \noindent
        line = re.sub(r'\\noindent', '', line) 
        # \newpage
        line = re.sub(r'\\newpage', '', line) 
        # \textquotesingle
        line = re.sub(r'\|\\textquotesingle', "'|", line) 
        line = re.sub(r'\</c\>\\textquotesingle', "'</c>", line) 
        line = re.sub(r'\\textquotesingle', "'", line) 
        # remove space before and after ^
        line = re.sub(r'\s\^\s', "^", line)
        # remove space before and after ^
        line = re.sub(r'\|\\\^\{\}\\verb\|', "^", line)
        line = re.sub(r'\</c\>\\\^\{\}\<c\>', "^", line)
        # inline ^ to <c>
        line = re.sub(r'\\\^\{\}', "<c>^</c>", line)
        # add space after ;
        line = re.sub(r';', "; ", line)
        # remove artifact whitespace after &amp;, &lt; and &gt;
        line = re.sub(r'\&amp; ', '&amp;', line)
        line = re.sub(r'\&lt; ', '&lt;', line)
        line = re.sub(r'\&gt; ', '&gt;', line)
        # \cour element
        line = re.sub(r'\\cour\{(.*?)\}', '\g<1>', line)
        # \quad element
        line = re.sub(r'\\quad', '', line)
        # \qquad element
        line = re.sub(r'\\qquad', '', line)
        # \po tab element
        line = re.sub(r'\\po', '\t', line)
        
        if ignore_line:
            ignore_line = False
        else:
            converted_lines.append(line)
        
    return converted_lines

def remove_double_blank_lines(lines):
    
    converted_lines = []
    this_line = lines[0]
    for next_line in lines[1:]:
        
        this_line_type = get_line_type(this_line)
        next_line_type = get_line_type(next_line)
        if not(this_line_type == 'blank' and next_line_type == 'blank'):
            converted_lines.append(this_line)
        this_line = next_line
        
    converted_lines.append(next_line)        
    return converted_lines

def move_section_intro(lines):
    in_intro = False
    converted_lines = []
    for k in range(len(lines)):
        line = lines[k]
        line_type = get_line_type(line)
        if line[:5] == r'<!--*':
            intro_start = k+1
        elif re.search(r'\<section xml:', line) != None:
            intro_end = k
            break
            
    converted_lines = lines[:intro_start] + ['\n'] + lines[intro_end:intro_end+2] + lines[intro_start:intro_end] + lines[intro_end+2:]
        
    return converted_lines

def fix_indentations(lines):
    tab_depth = 0
    converted_lines = []
    for line in lines:
        line_type = get_line_type(line)
        #converted_lines.append(get_line_type(line))
        if line_type == 'blank':
            converted_lines.append(line)
        elif line_type == 'title':
            converted_lines.append('\t'*tab_depth + line)
            tab_depth += 1
        elif line_type in ['b_paragraph',
                           'b_example',
                           'b_pre','b_dmath',
                           'b_olist',
                           'b_ulist',
                           'b_item',
                           'b_table',
                           'b_tabular',
                           'b_sidebyside',
                           'b_program',
                           'b_input',
                           'b_row'
                          ]:
            converted_lines.append('\t'*tab_depth + line)
            tab_depth += 1
        elif line_type in ['e_section',
                           'e_subsection',
                           'e_paragraph',
                           'e_example',
                           'e_pre',
                           'e_dmath',
                           'e_olist',
                           'e_ulist',
                           'e_item',
                           'e_table',
                           'e_tabular',
                           'e_sidebyside',
                           'e_program',
                           'e_input',
                           'e_row'
                          ]:
            tab_depth -= 1
            converted_lines.append('\t'*tab_depth + line)
        else:
            converted_lines.append('\t'*tab_depth + line)

    return converted_lines

def fix_p_tags(lines):
    in_paragraph = False
    converted_lines = []
    for line in lines:
        line_type = get_line_type(line)
        
        if line_type == 'b_paragraph':              # beginning of paragraph
            in_paragraph = True
        elif line_type == 'e_paragraph':            # end of paragraph
            in_paragraph = False
        elif in_paragraph and line_type == 'blank': # in paragraph and blank found
            converted_lines.append('</p>\n')   # add </p>
            in_paragraph = False
            
        converted_lines.append(line)
        
    return converted_lines

## This function converts HTML Button Labels
def switch_html_button_labels(html_root, current_label, new_label):
    
    # import required libraries
    import re # regular expressions
    from os import walk # directory listings
    
    html_root = 'C:/Users/gcox/Google Drive/1--MATLAB_textbook/4--master_copy/matlab-ebook/BOOK-OUTPUT/'

    # get files from html_root
    filenames = next(walk(html_root), (None, None, []))[2]  # [] if no file

    # get chapter content
    html_files = []
    for file in filenames:
        if re.search('.html$',file) != None:
            html_files.append(file)

    for html_file in html_files:
        new_html_lines = []
        html_fid = open(html_root + html_file,"r")
        html_lines = html_fid.readlines()
        html_fid.close()

        write_file = False
        for line in html_lines:
            if re.search(r'Evaluate \(Octave\)',line) != None:
                write_file = True
                new_html_lines.append(re.sub(current_label, new_label, line))
            else:
                new_html_lines.append(line)

        if write_file:
            print('Updating: ' + html_file)
            html_fid = open(html_root + html_file,"w+")
            html_fid.writelines(new_html_lines)
            html_fid.close()
