import React, { useState } from 'react';
import './AddClientForm.css';

interface AddClientFormProps {
  addClient: (client: any) => void;
}

const AddClientForm: React.FC<AddClientFormProps> = ({ addClient }) => {
  const [client, setClient] = useState({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addClient(client);
    setClient({
      nom: '',
      prenom: '',
      telephone: '',
      email: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-client-form">
      <label>
        Nom:
        <input type="text" name="nom" value={client.nom} onChange={handleChange} required />
      </label>
      <label>
        Prénom:
        <input type="text" name="prenom" value={client.prenom} onChange={handleChange} required />
      </label>
      <label>
        Numéro de téléphone:
        <input type="tel" name="telephone" value={client.telephone} onChange={handleChange} required />
      </label>
      <label>
        Adresse mail:
        <input type="email" name="email" value={client.email} onChange={handleChange} required />
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default AddClientForm;
