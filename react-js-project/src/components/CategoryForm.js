import React, { useState } from 'react';

function CategoryForm({ addCategory }) {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCategory(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="category-form">
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Create Category" 
      />
      <button type="submit" className="add-category-btn ">+</button>
    </form>
  );
}

export default CategoryForm;
