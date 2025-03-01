import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './Main.scss';  
import App from './App.jsx';  // Composant App contenant la logique du router

// Création du root et rendu de l'application
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Composant qui englobe toute l'application avec les routes */}
  </StrictMode>,
);

