import React, { Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from '../views/HomePage';
import SettingsPage from '../views/SettingsPage';

// components
import { LoadingOverlay } from '@mantine/core';
import LoginPage from '../views/login/LoginPage';
import RegisterPage from '../views/login/RegisterPage';
import ProtectedRoute from './ProtectedRoute';
// const HomePage = lazy(() => import('../views/HomePage'));
// const SettingsPage = lazy(() => import('../views/SettingsPage'));

const base = '/easylist-ui';

const BaseRouter: React.FC = () => {
  return (
    <Suspense fallback={<LoadingOverlay visible={true} />}>
      <Routes>
        <Route path={`${base}/login`} element={<LoginPage />} />
        <Route path={`${base}/register`} element={<RegisterPage />} />
        <Route
          path={`${base}/home`}
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path={`${base}/settings`}
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          }
        />
        <Route path={'*'} element={<Navigate to={`${base}/login`} />} />
      </Routes>
    </Suspense>
  );
};

export default BaseRouter;
