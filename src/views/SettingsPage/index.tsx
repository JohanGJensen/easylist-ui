import React from 'react';
import { SettingsContext } from '../../providers/SettingsProvider';

// components
import SettingsHeader from './components/SettingsHeader';
import { Container, Title, Space } from '@mantine/core';
import SettingsCard from './components/SettingsCard';
import CheckboxSetting from './components/content/CheckboxSetting';
import LanguageSetting from './components/content/LanguageSetting';

// types

// language

const SettingsPage: React.FC = () => {
  const { lang } = React.useContext(SettingsContext);

  return (
    <>
      <SettingsHeader />
      <Container>
        <Title order={3}>{lang.settings}</Title>
        <Space h={'xs'} />
        <SettingsCard content={<CheckboxSetting />} />
        <SettingsCard content={<LanguageSetting />} />
      </Container>
    </>
  );
};

export default SettingsPage;
