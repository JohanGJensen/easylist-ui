import React from 'react';
import { Box, Loader, Text } from '@mantine/core';
import { UserContext } from 'providers/UserProvider';

const statusColors = {
  notOnline: {
    primary: '#F24B4B',
    secondary: '#FCDDDD',
  },
  online: {
    primary: '#16DB93',
    secondary: '#D1FFEE',
  },
};

const BackendStatus: React.FC = () => {
  const { online, notOnline } = statusColors;

  const { online: isOnline } = React.useContext(UserContext);

  return (
    <Box
      sx={() => ({
        position: 'fixed',
        bottom: '1em',
        left: '1em',
        backgroundColor: isOnline ? online.secondary : notOnline.secondary,
        padding: '0.35em',
        borderRadius: '0.35em',
        color: isOnline ? online.primary : notOnline.primary,
      })}
    >
      <Text
        style={{ display: 'flex', alignItems: 'center', gap: '0.25em' }}
        weight={700}
        size={'sm'}
      >
        {isOnline ? 'connected' : 'not connected'}
        {!isOnline && <Loader color={notOnline.primary} size={'xs'} />}
      </Text>
    </Box>
  );
};

export default BackendStatus;
