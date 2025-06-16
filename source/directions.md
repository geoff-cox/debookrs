I want to build a Python app that manages a textbook's naming and reference structure.

The textbook will be written in PreTeXt, and its associated files will live in a single directory with multiple subdirectories. The PreText files will have a `.ptx` or `.xml` file extension. Within each of these files will be many environment tags. 

Some tags will have an ID of the form `xml:id="id_string"`. These tags can be referenced with an `<xref>` tag of the form: `<xref ref="id_string" ...`. 

File references will be of the form: `<xi:include href="path/to/file" />`. Since these depend on the directory structure they will also need to be tracked.

Asset file references (e.g., figures, audio files, JavaScript code, CSV) will be of the form `<audio source="path/to/asset ..."`.

The app should store and manage a database of all directory names, filenames, and references.

The app should have the following functionality:

1. Display the existing databases for a pretext book.
2. Create a new database.
    app task: Allow the user to navigate to the directory of a pretext textbook stored on their computer
    app task: Scan the directory to create a database containing all directory names, filenames, and references inside each pretext file.
    app task: The app should overwrite any previous databases created by the app.
3. Select an existing database.
    app task: Load the selected database.
    app task: Display the top level directories and files.
    user option: rescan the pretext directory, file, ans reference structure for changes.
        app task: Rescan the pretext directory and update the database.
4. Select a directory
    app task: Display the children subdirectories and files from the database.
    user option: Rename the directory
        app task: Ask the user for the new directory name.
        app task: Rename the directory and any references that depend on it.
        app task: Update the database.
5. Select a file
    app task: Display the references contained in the selected file from the database.
    user option: Rename the file
        app task: Ask the user for the new file name.
        app task: Rename the file and any references that depend on it.
        app task: Update the database.
6. Select a reference
    app task: Display the location and tags that depend on this reference.
    user option: Rename the reference.
        app task: Ask the user for the new reference ID name.
        app task: Rename the reference ID and any references that depend on it.
        app task: Update the database.
7. Have a way to revert any changes if the user made a mistake.