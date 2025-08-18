import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import pages
import HomePage from './components/pages/HomePage';
import ProjectsPage from './components/pages/ProjectsPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import TravelRouterPage from './components/pages/TravelRouterPage';
import AlpacaTraderPage from './components/pages/AlpacaTraderPage';
import NoirProjectPage from './components/pages/NoirProjectPage';
import HexarPage from './components/pages/HexarPage';
import BikeSharePage from './components/pages/BikeSharePage';
import ElectricityDashboardPage from './components/pages/ElectricityDashboardPage';
import ComingSoonPage from './components/pages/ComingSoonPage';
import NotFoundPage from './components/pages/NotFoundPage';

// Import global styles
import './styles/App.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects/travel-router" element={<TravelRouterPage />} />
        <Route path="/projects/noir" element={<NoirProjectPage />} />
        <Route path="/projects/alpaca-trader" element={<AlpacaTraderPage />} />
        <Route path="/projects/hexar" element={<HexarPage />} />
        <Route path="/projects/bike-share" element={<BikeSharePage />} />
        <Route path="/projects/electricity-dashboard" element={<ElectricityDashboardPage />} />
        <Route path="/projects/coming-soon" element={<ComingSoonPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;