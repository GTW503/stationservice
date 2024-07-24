import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RoleSelection.css';

const RoleSelection: React.FC = () => {
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleRoleSelect = () => {
    if (role) {
      navigate(`/login/${role}`);
    } else {
      alert('Veuillez sélectionner un rôle.');
    }
  };

  return (
    <div className="role-selection-container">
      <div className="role-selection-form">
        <h1>Connexion</h1>
        <select className="form-select" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Sélectionner un rôle</option>
          <option value="admin">Administrateur</option>
          <option value="station-manager">Gestionnaire de station</option>
          <option value="pompist">Pompiste</option>
          <option value="client">Client</option>
        </select>
        <button className="btn" onClick={handleRoleSelect}>Connexion</button>
      </div>
    </div>
  );
};

export default RoleSelection;
