import React from 'react';
import './OptionsPaiement.css';

const OptionsPaiement: React.FC = () => {
  return (
    <div className="options-container">
      <h1>Bienvenue dans les options de paiement en ligne</h1>
      <div className="options-images">
        <div className="option">
          <img src="/image/tmoney.png" alt="Tmoney" />
          <p>Tmoney</p>
        </div>
        <div className="option">
          <img src="/image/flooz.png" alt="Flooz" />
          <p>Flooz</p>
        </div>
        <div className="option">
          <img src="/image/visa.png" alt="Visa" />
          <p>Visa</p>
        </div>
      </div>
    </div>
  );
};

export default OptionsPaiement;
