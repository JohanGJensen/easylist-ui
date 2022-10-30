import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// components
import { LoadingOverlay } from '@mantine/core';
const HomePage = lazy(() => import('../views/HomePage'));
const SettingsPage = lazy(() => import('../views/SettingsPage'));

const base = '/easylist-ui-pwa';

const BaseRouter: React.FC = () => {
  return (
    <Suspense fallback={<LoadingOverlay visible={true} />}>
      <Routes>
        <Route path={base} element={<HomePage />} />
        <Route path={`${base}/settings`} element={<SettingsPage />} />
        <Route path={'*'} element={<Navigate to={base} />} />
      </Routes>
    </Suspense>
  );
};

export default BaseRouter;
