import React from 'react';

// components
import SettingsHeader from './components/SettingsHeader';
import { Container } from '@mantine/core';

// styling

// types

function SettingsPage() {

  return (
    <>
      <SettingsHeader />
      <Container>
        <h1>settings</h1>
      </Container>
    </>
  );
}

export default SettingsPage;
