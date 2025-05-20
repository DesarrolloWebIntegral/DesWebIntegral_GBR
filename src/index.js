import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './componentes/App';
function Header() {

  return(
    <div>
      Bienvenidos a React
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>
);

