import React, { useState } from 'react';
import './AddUserForm.css';

interface AddUserFormProps {
  addUser: (user: any) => void;
  handleClose: () => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ addUser, handleClose }) => {
  const [user, setUser] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    dateEmploi: '',
    poste: 'Pompiste',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addUser(user);
    handleClose();
  };

  return (
    <form onSubmit={handleSubmit} className="add-user-form">
      <label>
        Nom:
        <input type="text" name="nom" value={user.nom} onChange={handleChange} required />
      </label>
      <label>
        Prénom:
        <input type="text" name="prenom" value={user.prenom} onChange={handleChange} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={user.email} onChange={handleChange} required />
      </label>
      <label>
        Téléphone:
        <input type="tel" name="telephone" value={user.telephone} onChange={handleChange} required />
      </label>
      <label>
        Date d'emploi:
        <input type="date" name="dateEmploi" value={user.dateEmploi} onChange={handleChange} required />
      </label>
      <label>
        Poste:
        <select name="poste" value={user.poste} onChange={handleChange}>
          <option value="Pompiste">Pompiste</option>
          <option value="Gestionnaire">Gestionnaire</option>
        </select>
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default AddUserForm;
