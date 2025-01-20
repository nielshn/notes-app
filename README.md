# NotesApp

## Description

**NotesApp** is a simple yet functional note-taking application built with Next.js and MongoDB. It allows users to create, read, update, and delete notes efficiently. The application is designed to provide a clean and user-friendly interface for managing notes, making it a great example of a full-stack web application.

## Features

### 1. List of Notes
- Display a list of notes including:
  - **Title** (title)
  - **Creation Date** (createdAt)
  - **Note Content** (body)
- Displays an "No notes available" message when there are no notes to display (empty state).

### 2. Note Details
- Users can view the details of a selected note from the list.
- Note details are accessible via a path parameter using the note's unique `id`.
- Displays all relevant data of the selected note.

### 3. Add and Update Notes
- Users can add new notes to the list.
- Users can edit existing notes.
- The note object structure includes:
  - **Title** (title)
  - **Creation Date** (createdAt)
  - **Note Content** (body)

### 4. Delete Notes
- The application provides a delete button for each note.
- The delete button is available both on the note list and the note details page.

## Tech Stack

- **Frontend**: Next.js
- **Backend**: Node.js with API Routes
- **Database**: MongoDB

## Installation and Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/nielshn/notesapp.git
    cd notesapp
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env.local` file in the root directory.
    - Add your MongoDB connection string:
      ```bash
      MONGODB_URI=your_mongodb_connection_string
      ```

4. **Run the application**:
    ```bash
    npm run dev
    ```

5. **Access the application**:
    - Open your browser and navigate to `http://localhost:3000`.

## Usage

- **List Notes**: Navigate to the homepage to view all notes.
- **Add Note**: Click the "Add New Note" button and fill in the form.
- **Edit Note**: Select a note to view its details and click "Edit Note."
- **Delete Note**: Use the delete button on the list or details page to remove a note.

## Screenshots
![image](https://github.com/user-attachments/assets/1b22b836-d0a8-4aa0-8449-e884ae1064a7)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Vercel Deployment](https://vercel.com/docs)

---

This project was created as part of a submission for a NotesApp assignment, demonstrating full-stack development skills with Next.js and MongoDB.
