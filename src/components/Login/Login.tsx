import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { role } = useParams<{ role: string }>();
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Role:', role); // Ajoutez cette ligne pour vérifier le rôle
    switch (role) {
      case 'admin':
        navigate('/dashboard/admin');
        break;
      case 'station-manager':
        navigate('/dashboard/station-manager');
        break;
      case 'pompist':
        navigate('/dashboard/pompist');
        break;
      case 'client':
        navigate('/dashboard/client');
        break;
      default:
        console.error('Role not recognized:', role);
        break;
    }
  };

  return (
    <div className="login-container">
      <div className="login-form animate-fly-in">
        <h1>Connexion {role}</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label className="form-label">Nom d'utilisateur</label>
            <input type="text" className="form-control" placeholder="xxxxxxxxxxxxxx" />
          </div>
          <div className="input-group">
            <label className="form-label">Mot de passe</label>
            <input type="password" className="form-control" placeholder="xxxxxxxxxxxxxx" />
          </div>
          <div className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label>Remember me</label>
          </div>
          <button type="submit" className="login-button">Connexion</button>
        </form>
        <div className="button-group">
          <button className="forgot-password" onClick={() => navigate(`/forgot-password?role=${role}`)}>Mot de passe oublié</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
