import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import SettingsProvider from './providers/SettingsProvider';

import BaseRouter from './routing/BaseRouter';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import SpaceProvider from './providers/SpaceProvider';

const container: HTMLElement | null = document.getElementById('root');
const root = createRoot(container as HTMLElement);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SettingsProvider>
          <SpaceProvider>
            <BaseRouter />
          </SpaceProvider>
        </SettingsProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
