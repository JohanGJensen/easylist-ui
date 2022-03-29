import React from 'react';

// components
import SettingsHeader from './components/SettingsHeader';
import { Container, Title, Text, Card, Space, Select } from '@mantine/core';

// styling

// types

function SettingsPage() {

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
            value={'right'}
          />
        </Card>
      </Container>
    </>
  );
}

export default SettingsPage;
