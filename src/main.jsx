import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import App from './App';
import './styles/globals.css';

// An older version of this site installed a caching service worker. Remove it so
// returning visitors get the current build instead of a stale cached copy.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then((regs) => regs.forEach((r) => r.unregister()));
  if (window.caches) caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
}

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
);

// Pages are prerendered at build time; hydrate when that markup is present.
if (root.hasChildNodes()) ReactDOM.hydrateRoot(root, app);
else ReactDOM.createRoot(root).render(app);
