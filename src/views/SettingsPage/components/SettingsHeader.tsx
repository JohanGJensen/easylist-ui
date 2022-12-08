import React from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Header from '../../../components/Header/Header';
import { Button } from '@mantine/core';
import { ArrowBack, DoorExit } from 'tabler-icons-react';
import { clearCookie } from 'utilities/cookieFunctions';

const SettingsHeader = () => {
  const navigate = useNavigate();

  const logout = () => {
    clearCookie('jwt');
    navigate('/');
  };

  return (
    <Header
      position={'apart'}
      leftContent={
        <Button onClick={() => navigate(-1)} color={'gray'}>
          {<ArrowBack />}
        </Button>
      }
      rightContent={
        <Button style={{ padding: '0.5em' }} onClick={logout} color={'gray'}>
          <DoorExit />
        </Button>
      }
    />
  );
};

export default SettingsHeader;
