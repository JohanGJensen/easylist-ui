import React from 'react';
import { useNavigate } from "react-router-dom";

// components
import Header from '../../../components/Header/Header';
import { Button } from '@mantine/core';
import { ArrowBack } from 'tabler-icons-react';

const SettingsHeader = () => {
  const navigate = useNavigate();

  return (
    <Header
      position={'left'}
      leftContent={
        <Button onClick={() => navigate(-1)} color={'gray'} children={<ArrowBack />} />
      }
    />
  );
}

export default SettingsHeader;
