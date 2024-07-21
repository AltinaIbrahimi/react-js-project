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
        placeholder="Add a title" 
        className="title-input"
      />
      <textarea 
        value={content} 
        onChange={(e) => setContent(e.target.value)} 
        placeholder="Write your note here" 
        className="content-textarea"
      />
      <button type="submit" className="add-note-btn">+</button>
    </form>
  );
}

export default NoteEditor;
