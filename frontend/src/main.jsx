import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import App from './App';
import './index.css';
import Perfil from './components/Perfil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      {/* <Perfil />
      <Toaster position="top-center" reverseOrder={false} /> */}
    </BrowserRouter>
  </React.StrictMode>,
);
