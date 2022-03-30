import React from 'react';
import { SettingsContext } from '../../providers/SettingsProvider';

// components
import SettingsHeader from './components/SettingsHeader';
import { Container, Title, Text, Card, Space, Select } from '@mantine/core';

// types

const SettingsPage: React.FC = () => {
  const { handleCheckboxPos, checkboxPos } = React.useContext(SettingsContext);

  return (
    <>
      <SettingsHeader />
      <Container>
        <Title order={3} children={'settings'} />
        <Space h={'xs'} />
        <Card withBorder={true}>
          <Text size={'md'} children={'placement of item checkbox'} />
          <Select
            data={[
              { value: 'right', label: 'right' },
              { value: 'left', label: 'left' },
            ]}
            value={checkboxPos}
            onChange={handleCheckboxPos}
          />
        </Card>
      </Container>
    </>
  );
}

export default SettingsPage;
