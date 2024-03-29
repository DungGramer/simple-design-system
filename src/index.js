import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StrictMode } from 'react';
import App from './App';

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
