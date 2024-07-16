// src/components/CategoryList.js
import React from 'react';

function CategoryList({ categories, setSelectedCategory }) {
  return (
    <ul>
      {categories.map(category => (
        <li key={category.id} onClick={() => setSelectedCategory(category)}>
          {category.name}
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
