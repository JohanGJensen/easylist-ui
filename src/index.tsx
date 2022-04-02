import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import SettingsProvider from './providers/SettingsProvider';
import SpaceProvider from './providers/SpaceProvider';

import BaseRouter from './routing/BaseRouter';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsProvider>
        <SpaceProvider>
          <BaseRouter />
        </SpaceProvider>
      </SettingsProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
