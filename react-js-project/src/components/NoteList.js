import React, { useState } from 'react';

function NoteList({ notes, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  const startEditing = (note) => {
    setIsEditing(note.id);
    setEditedTitle(note.title);
    setEditedContent(note.content);
  };

  const saveEdit = (id) => {
    editNote(id, editedTitle, editedContent);
    setIsEditing(null);
  };

  return (
    <ul className="note-list">
      {notes.map(note => (
        <li key={note.id} className="note-item">
          {isEditing === note.id ? (
            <>
              <input 
                type="text" 
                value={editedTitle} 
                onChange={(e) => setEditedTitle(e.target.value)} 
              />
              <textarea 
                value={editedContent} 
                onChange={(e) => setEditedContent(e.target.value)} 
              />
              <button onClick={() => saveEdit(note.id)}>Save</button>
              <button onClick={() => setIsEditing(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h3>{note.title}</h3>
              <p>{note.content}</p>
              <button onClick={() => startEditing(note)}>Edit</button>
              <button onClick={() => deleteNote(note.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
