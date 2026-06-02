import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importamos el enrutador
import App from './App.jsx';

// Importación de Bootstrap (fundamental para que anden los estilos responsivos)
import 'bootstrap/dist/css/bootstrap.min.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);