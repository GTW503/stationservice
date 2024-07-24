import React, { useState } from 'react';
import './AddCategoryModal.css';

interface AddCategoryModalProps {
  handleAddCategory: (categoryName: string) => void;
}

const AddCategoryModal: React.FC<AddCategoryModalProps> = ({ handleAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAddCategory(categoryName);
    setCategoryName('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-category-form">
      <label>
        Nom de la catégorie:
        <input type="text" value={categoryName} onChange={handleChange} required />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default AddCategoryModal;
