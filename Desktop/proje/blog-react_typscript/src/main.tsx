// Main entry point of the application
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

// Create root element and render the app
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
