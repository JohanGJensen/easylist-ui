import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import SettingsProvider from './providers/SettingsProvider';
import { Environment } from 'interfaces';

import BaseRouter from './routing/BaseRouter';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import UserProvider from 'providers/UserProvider';

import './globalStyles.css';

const container: HTMLElement | null = document.getElementById('root');
const root = createRoot(container as HTMLElement);

const queryClient = new QueryClient();
const env = import.meta.env.VITE_APP_ENVIRONMENT;

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <SettingsProvider>
            <BaseRouter />
          </SettingsProvider>
        </UserProvider>
      </BrowserRouter>

      {env === Environment.DEVELOPMENT && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
