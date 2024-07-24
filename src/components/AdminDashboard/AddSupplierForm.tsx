import React, { useState } from 'react';
import './AddSupplierForm.css';

interface AddSupplierFormProps {
  addSupplier: (supplier: any) => void;
  categories: { id: number; name: string }[];
}

const AddSupplierForm: React.FC<AddSupplierFormProps> = ({ addSupplier, categories }) => {
  const [supplier, setSupplier] = useState({
    fournisseur: '',
    adresse: '',
    telephone: '',
    email: '',
    categorie: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSupplier({ ...supplier, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addSupplier(supplier);
    setSupplier({
      fournisseur: '',
      adresse: '',
      telephone: '',
      email: '',
      categorie: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-supplier-form">
      <label>
        Fournisseur:
        <input type="text" name="fournisseur" value={supplier.fournisseur} onChange={handleChange} required />
      </label>
      <label>
        Adresse:
        <input type="text" name="adresse" value={supplier.adresse} onChange={handleChange} required />
      </label>
      <label>
        Téléphone:
        <input type="tel" name="telephone" value={supplier.telephone} onChange={handleChange} required />
      </label>
      <label>
        Adresse mail:
        <input type="email" name="email" value={supplier.email} onChange={handleChange} required />
      </label>
      <label>
        Catégorie:
        <select name="categorie" value={supplier.categorie} onChange={handleChange} required>
          {categories.map(category => (
            <option key={category.id} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default AddSupplierForm;
