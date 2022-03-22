import React from 'react';
import { SpaceContext } from '../../providers/SpaceProvider';

// components
import Header from '../../components/Header/Header';
import { LoadingOverlay } from '@mantine/core';

// styling
import './homepage.css';
import Space from '../../components/Space/Space';

function HomePage() {
  const context = React.useContext(SpaceContext);

  return (
    <>
      <LoadingOverlay visible={context.loading} />
      <Header />
      <Space />
    </>
  );
}

export default HomePage;
