import React from 'react';
import { Box, ThemeIcon } from '@mantine/core';
import { useCheckConnection } from 'api/queries/useCheckConnection';
import { PlugConnected, PlugConnectedX } from 'tabler-icons-react';

const BackendStatus: React.FC = () => {
  const { isOnline } = useCheckConnection();

  return (
    <Box
      sx={() => ({
        position: 'fixed',
        bottom: '1em',
        left: '1em',
      })}
    >
      <ThemeIcon color={isOnline ? 'green' : 'red'} radius="xl" size="xl">
        {isOnline ? <PlugConnected /> : <PlugConnectedX />}
      </ThemeIcon>
    </Box>
  );
};

export default BackendStatus;
