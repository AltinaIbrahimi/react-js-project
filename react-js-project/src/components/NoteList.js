// src/components/NoteList.js
import React from 'react';

function NoteList({ notes }) {
  return (
    <ul className="note-list">
      {notes.map(note => (
        <li key={note.id}>{note.title}</li>
      ))}
    </ul>
  );
}

export default NoteList;
