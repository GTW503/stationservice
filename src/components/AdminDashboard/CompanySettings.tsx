import React, { useState } from 'react';
import './CompanySettings.css';

interface CompanySettingsProps {
  saveSettings: (settings: any) => void;
}

const CompanySettings: React.FC<CompanySettingsProps> = ({ saveSettings }) => {
  const [settings, setSettings] = useState({
    photo: '',
    nomEntreprise: '',
    adresse: '',
    email: '',
    telephone: '',
    nomStation: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSettings({ ...settings, [name]: value });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setSettings({ ...settings, photo: reader.result as string });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveSettings(settings);
  };

  return (
    <form onSubmit={handleSubmit} className="company-settings-form">
      <label>
        Photo de l'entreprise:
        <input type="file" accept="image/*" onChange={handlePhotoChange} />
        {settings.photo && <img src={settings.photo} alt="Entreprise" className="company-photo-preview" />}
      </label>
      <label>
        Nom de l'entreprise:
        <input type="text" name="nomEntreprise" value={settings.nomEntreprise} onChange={handleChange} required />
      </label>
      <label>
        Adresse:
        <input type="text" name="adresse" value={settings.adresse} onChange={handleChange} required />
      </label>
      <label>
        Adresse mail:
        <input type="email" name="email" value={settings.email} onChange={handleChange} required />
      </label>
      <label>
        Numéro de téléphone:
        <input type="tel" name="telephone" value={settings.telephone} onChange={handleChange} required />
      </label>
      <label>
        Nom de la station:
        <input type="text" name="nomStation" value={settings.nomStation} onChange={handleChange} required />
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
};

export default CompanySettings;
