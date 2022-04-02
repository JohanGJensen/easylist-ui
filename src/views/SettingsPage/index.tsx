import React from 'react';
import { SettingsContext } from '../../providers/SettingsProvider';

// components
import SettingsHeader from './components/SettingsHeader';
import { Container, Title, Space } from '@mantine/core';
import SettingsCard from './components/SettingsCard';
import CheckboxSetting from './components/content/CheckboxSetting';

// types

const SettingsPage: React.FC = () => {

  return (
    <>
      <SettingsHeader />
      <Container>
        <Title order={3} children={'settings'} />
        <Space h={'xs'} />
        <SettingsCard content={<CheckboxSetting />} />
      </Container>
    </>
  );
}

export default SettingsPage;
