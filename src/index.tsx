import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import SettingsProvider from './providers/SettingsProvider';
import SpaceProvider from './providers/SpaceProvider';

import BaseRouter from './routing/BaseRouter';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const container: HTMLElement|null = document.getElementById('root');
const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter basename={'easylist-ui-pwa'}>
      <SettingsProvider>
        <SpaceProvider>
          <BaseRouter />
        </SpaceProvider>
      </SettingsProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
