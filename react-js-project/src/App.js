// src/App.js
import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import CategoryForm from './components/CategoryForm';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [notes, setNotes] = useState([]);

  const addCategory = (name) => {
    const categoryName = name.trim() === '' ? `Category(${categories.length + 1})` : name;
    setCategories([...categories, { id: categories.length + 1, name: categoryName }]);
  };

  const addNote = (title, content) => {
    if (selectedCategory) {
      setNotes([...notes, { id: notes.length + 1, title, content, categoryId: selectedCategory.id }]);
    }
  };

  const getNotesCount = (categoryId) => {
    return notes.filter(note => note.categoryId === categoryId).length;
  };

  return (
    <div className="App">
      <div className="sidebar">
        <CategoryForm addCategory={addCategory} />
        <CategoryList 
          categories={categories} 
          setSelectedCategory={setSelectedCategory} 
          getNotesCount={getNotesCount} 
        />
      </div>
      <div className="main">
        {selectedCategory && (
          <>
            <NoteList notes={notes.filter(note => note.categoryId === selectedCategory.id)} />
            <NoteEditor addNote={addNote} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
