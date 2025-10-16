import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Composant from './composant/composant.js'; 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {}
    <Composant couleur={'red'} />
  </React.StrictMode>
);


reportWebVitals();