// src/components/NoteEditor.js
import React, { useState } from 'react';

function NoteEditor({ addNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="note-editor">
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Note Title" 
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Add your notes" 
      />
      <button type="submit" className="add-note-btn">Add Note</button>
    </form>
  );
}

export default NoteEditor;
