import React, { useState } from 'react';
import Modal from './Modal';
import AddCategoryModal from './AddCategoryModal';
import './AddArticleForm.css';

interface Category {
  id: number;
  name: string;
}

interface AddArticleFormProps {
  addArticle: (article: any) => void;
  categories: Category[];
  addCategory: (category: Category) => void;
}

const AddArticleForm: React.FC<AddArticleFormProps> = ({ addArticle, categories, addCategory }) => {
  const [article, setArticle] = useState({
    designation: '',
    prixPompe: '',
    categorie: '',
    prixGros: '',
    uniteDetail: '',
    unite: '',
  });

  const [showAddCategoryModal, setShowAddCategoryModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setArticle({ ...article, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addArticle(article);
    setArticle({
      designation: '',
      prixPompe: '',
      categorie: '',
      prixGros: '',
      uniteDetail: '',
      unite: '',
    });
  };

  const handleAddCategory = (categoryName: string) => {
    const newCategory = { id: categories.length + 1, name: categoryName };
    addCategory(newCategory);
    setArticle({ ...article, categorie: categoryName });
    setShowAddCategoryModal(false);
  };

  return (
    <div className="add-article-form-container">
      <form onSubmit={handleSubmit} className="add-article-form">
        <label>
          Désignation:
          <input type="text" name="designation" value={article.designation} onChange={handleChange} required />
        </label>
        <label>
          Prix Pompe:
          <input type="text" name="prixPompe" value={article.prixPompe} onChange={handleChange} required />
        </label>
        <label>
          Catégorie:
          <select name="categorie" value={article.categorie} onChange={handleChange} required>
            <option value="">Sélectionner une catégorie</option>
            {categories.map(category => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          <button type="button" className="add-category-button" onClick={() => setShowAddCategoryModal(true)}>
            Ajouter une catégorie
          </button>
        </label>
        <label>
          Prix en Gros:
          <input type="text" name="prixGros" value={article.prixGros} onChange={handleChange} required />
        </label>
        <label>
          Unité Détail:
          <input type="text" name="uniteDetail" value={article.uniteDetail} onChange={handleChange} required />
        </label>
        <label>
          Unité:
          <input type="text" name="unite" value={article.unite} onChange={handleChange} required />
        </label>
        <button type="submit">Enregistrer</button>
      </form>
      <Modal show={showAddCategoryModal} handleClose={() => setShowAddCategoryModal(false)}>
        <AddCategoryModal handleAddCategory={handleAddCategory} />
      </Modal>
    </div>
  );
};

export default AddArticleForm;
