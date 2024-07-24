import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';
import { FaBuilding, FaUsers, FaUserTie, FaTruck, FaClipboardCheck, FaFileAlt } from 'react-icons/fa';
import Modal from './Modal';
import AddUserForm from './AddUserForm';
import AddArticleForm from './AddArticleForm';
import AddSupplierForm from './AddSupplierForm';
import AddClientForm from './AddClientForm';
import CompanySettings from './CompanySettings';
import apiClient from '../../api/axios'; // Assurez-vous que le chemin vers axios.ts est correct

const AdminDashboard: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [showAddUserForm, setShowAddUserForm] = useState<boolean>(false);
  const [showAddArticleForm, setShowAddArticleForm] = useState<boolean>(false);
  const [showAddSupplierForm, setShowAddSupplierForm] = useState<boolean>(false);
  const [showAddClientForm, setShowAddClientForm] = useState<boolean>(false);
  const [showCompanySettings, setShowCompanySettings] = useState<boolean>(false);
  const [users, setUsers] = useState<any[]>([]);
  const [articles, setArticles] = useState<any[]>([]);
  const [suppliers, setSuppliers] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);
  const [categories, setCategories] = useState<{ id: number; name: string }[]>([]);
  const [companySettings, setCompanySettings] = useState<any>({
    photo: '',
    nomEntreprise: '',
    adresse: '',
    email: '',
    telephone: '',
    nomStation: '',
  });

  useEffect(() => {
    // Récupérer les utilisateurs
    apiClient.get('/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Erreur lors de la récupération des utilisateurs:', error));

    // Récupérer les articles
    apiClient.get('/articles')
      .then(response => setArticles(response.data))
      .catch(error => console.error('Erreur lors de la récupération des articles:', error));

    // Récupérer les fournisseurs
    apiClient.get('/suppliers')
      .then(response => setSuppliers(response.data))
      .catch(error => console.error('Erreur lors de la récupération des fournisseurs:', error));

    // Récupérer les clients
    apiClient.get('/clients')
      .then(response => setClients(response.data))
      .catch(error => console.error('Erreur lors de la récupération des clients:', error));

    // Récupérer les catégories
    apiClient.get('/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Erreur lors de la récupération des catégories:', error));

    // Récupérer les paramètres de la société
    apiClient.get('/company-settings')
      .then(response => setCompanySettings(response.data))
      .catch(error => console.error('Erreur lors de la récupération des paramètres de la société:', error));
  }, []);

  const toggleSection = (section: string) => {
    setOpenSection(prevSection => (prevSection === section ? null : section));
  };

  const toggleAddUserForm = () => {
    setShowAddUserForm(!showAddUserForm);
  };

  const toggleAddArticleForm = () => {
    setShowAddArticleForm(!showAddArticleForm);
  };

  const toggleAddSupplierForm = () => {
    setShowAddSupplierForm(!showAddSupplierForm);
  };

  const toggleAddClientForm = () => {
    setShowAddClientForm(!showAddClientForm);
  };

  const toggleCompanySettings = () => {
    setShowCompanySettings(!showCompanySettings);
  };

  const addUser = (user: any) => {
    setUsers([...users, user]);
  };

  const addArticle = (article: any) => {
    setArticles([...articles, article]);
  };

  const addSupplier = (supplier: any) => {
    setSuppliers([...suppliers, supplier]);
  };

  const addClient = (client: any) => {
    setClients([...clients, client]);
  };

  const addCategory = (category: { id: number; name: string }) => {
    setCategories([...categories, category]);
  };

  const saveCompanySettings = (settings: any) => {
    setCompanySettings(settings);
  };

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <h2>ADMIN</h2>
          <p>Bienvenue Admin</p>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <a href="#company" onClick={() => toggleSection('company')}><FaBuilding /> Société</a>
              {openSection === 'company' && (
                <ul className="submenu">
                  <li><a href="#" onClick={toggleCompanySettings}>Paramètres</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#users" onClick={() => toggleSection('users')}><FaUsers /> Utilisateurs</a>
              {openSection === 'users' && (
                <ul className="submenu">
                  <li><a href="#" onClick={toggleAddUserForm}>Ajouter un utilisateur</a></li>
                  <li><a href="#">Liste des utilisateurs</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#clients" onClick={() => toggleSection('clients')}><FaUserTie /> Clients</a>
              {openSection === 'clients' && (
                <ul className="submenu">
                  <li><a href="#" onClick={toggleAddClientForm}>Ajouter un client</a></li>
                  <li><a href="#">Liste des clients</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#suppliers" onClick={() => toggleSection('suppliers')}><FaTruck /> Fournisseurs</a>
              {openSection === 'suppliers' && (
                <ul className="submenu">
                  <li><a href="#" onClick={toggleAddSupplierForm}>Ajouter un fournisseur</a></li>
                  <li><a href="#">Liste des fournisseurs</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#articles" onClick={() => toggleSection('articles')}><FaTruck /> Articles</a>
              {openSection === 'articles' && (
                <ul className="submenu">
                  <li><a href="#" onClick={toggleAddArticleForm}>Ajouter Articles</a></li>
                  <li><a href="#">Listes des Articles</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#backup" onClick={() => toggleSection('backup')}><FaClipboardCheck /> Supervision des activités générales</a>
              {openSection === 'backup' && (
                <ul className="submenu">
                  <li><a href="#">statistiques vente de carburant</a></li>
                  <li><a href="#">statistiques achats de carburant</a></li>
                </ul>
              )}
            </li>
            <li>
              <a href="#report" onClick={() => toggleSection('report')}><FaFileAlt /> Rapport</a>
              {openSection === 'report' && (
                <ul className="submenu">
                  <li><a href="#">Rapport quotidien</a></li>
                  <li><a href="#">Rapport mensuel</a></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="header">
          <h1>Tableau de bord</h1>
          <div className="header-right">
            <span>Kévin</span>
            <span className="notifications">0</span>
          </div>
        </header>
        <div className="widgets">
          <div className="widget widget-blue">
            <h3>{users.length}</h3>
            <p>Nombre des utilisateurs</p>
            <button onClick={toggleAddUserForm}>Voir Détails</button>
          </div>
          <div className="widget widget-orange">
            <h3>{articles.length}</h3>
            <p>Nombre des articles</p>
            <button onClick={toggleAddArticleForm}>Voir Détails</button>
          </div>
          <div className="widget widget-yellow">
            <h3>{suppliers.length}</h3>
            <p>Liste des Fournisseurs</p>
            <button onClick={toggleAddSupplierForm}>Voir Détails</button>
          </div>
          <div className="widget widget-green">
            <h3>{clients.length}</h3>
            <p>Liste des Clients</p>
            <button onClick={toggleAddClientForm}>Voir Détails</button>
          </div>
        </div>
        <Modal show={showAddUserForm} handleClose={toggleAddUserForm}>
          <AddUserForm addUser={addUser} handleClose={toggleAddUserForm} />
        </Modal>
        <Modal show={showAddArticleForm} handleClose={toggleAddArticleForm}>
          <AddArticleForm addArticle={addArticle} categories={categories} addCategory={addCategory} />
        </Modal>
        <Modal show={showAddSupplierForm} handleClose={toggleAddSupplierForm}>
          <AddSupplierForm addSupplier={addSupplier} categories={categories} />
        </Modal>
        <Modal show={showAddClientForm} handleClose={toggleAddClientForm}>
          <AddClientForm addClient={addClient} />
        </Modal>
        <Modal show={showCompanySettings} handleClose={toggleCompanySettings}>
          <CompanySettings saveSettings={saveCompanySettings} />
        </Modal>
      </main>
    </div>
  );
};

export default AdminDashboard;
