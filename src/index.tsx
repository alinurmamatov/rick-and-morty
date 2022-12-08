import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AllCharactersProvider } from './context/AllCharactersContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AllCharactersProvider>
      <App />
    </AllCharactersProvider>
  </React.StrictMode>,
);

reportWebVitals();
