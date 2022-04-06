import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";

// components
import { LoadingOverlay } from '@mantine/core';
const HomePage = lazy(() => import('../views/HomePage'));
const SettingsPage = lazy(() => import('../views/SettingsPage'));

interface IProps { }

const BaseRouter: React.FC<IProps> = () => {

  return (
    <Suspense fallback={<LoadingOverlay visible={true} />}>
      <Routes>
        <Route
          path={'/'}
          element={<HomePage />}
        />
        <Route
          path={'/settings'}
          element={<SettingsPage />}
        />
      </Routes>
    </Suspense>
  );
}

export default BaseRouter;
