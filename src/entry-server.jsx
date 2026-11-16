import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export { projects, featured } from './data/projects';
export { SITE, SERVICES } from './data/site';

// Must mirror the tree in main.jsx so hydration matches.
export const render = (url) =>
  renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  );
