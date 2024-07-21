import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import CategoryForm from './components/CategoryForm';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addCategory = (name) => {
    const categoryName = name.trim() === '' ? `Category(${categories.length + 1})` : name;
    setCategories([...categories, { id: categories.length + 1, name: categoryName }]);
  };

  const addNote = (title, content) => {
    if (selectedCategory) {
      setNotes([...notes, { id: notes.length + 1, title, content, categoryId: selectedCategory.id }]);
    }
  };
  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };
  const editNote = (id, newTitle, newContent) => {
    setNotes(notes.map(note => (note.id === id ? { ...note, title: newTitle, content: newContent } : note)));
  };

  const getNotesCount = (categoryId) => {
    return notes.filter(note => note.categoryId === categoryId).length;
  };
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <SearchBar setSearchTerm={setSearchTerm} />
        {selectedCategory && (
          <>
            <NoteList notes={notes.filter(note => note.categoryId === selectedCategory.id)}
            deleteNote={deleteNote} 
            editNote={editNote} 
            />
            
            <NoteEditor addNote={addNote} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
