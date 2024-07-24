import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleReset = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Un email de réinitialisation de mot de passe a été envoyé');
    navigate('/login');
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-form animate-fly-in">
        <h1>Réinitialisation du mot de passe</h1>
        <form onSubmit={handleReset}>
          <div className="input-group">
            <label className="form-label">Adresse e-mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="Entrez votre adresse e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="reset-button">Réinitialiser le mot de passe</button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
