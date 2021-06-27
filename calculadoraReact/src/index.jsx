import React from 'react';
import ReactDOM from 'react-dom';

// Importar el componente a renderizar
import App from './App'; // ruta relativa siempre sin extensión


// Utilizar el componente
ReactDOM.render(<App />, // se puede cerrar así o <App></App>
    document.querySelector('#root'));