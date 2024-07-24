import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RoleSelection from './components/RoleSelection/RoleSelection';
import Login from './components/Login/Login';
import ForgotPassword from './components/ForgotPassword/ForgotPassword';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import StationManagerDashboard from './components/StationManagerDashboard/StationManagerDashboard';
import PompistDashboard from './components/PompistDashboard/PompistDashboard';
import ClientDashboard from './components/ClientDashboard/ClientDashboard';
import HistoriqueAchats from './components/ClientDashboard/HistoriqueAchats';
import SoldeCompte from './components/ClientDashboard/SoldeCompte';
import OptionsPaiement from './components/ClientDashboard/OptionsPaiement';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login/:role" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/station-manager" element={<StationManagerDashboard />} />
        <Route path="/dashboard/pompist" element={<PompistDashboard />} />
        <Route path="/dashboard/client" element={<ClientDashboard />} />
        <Route path="/dashboard/client/historique-achats" element={<HistoriqueAchats />} />
        <Route path="/dashboard/client/solde-compte" element={<SoldeCompte />} />
        <Route path="/dashboard/client/options-paiement" element={<OptionsPaiement />} />
      </Routes>
    </Router>
  );
};

export default App;
