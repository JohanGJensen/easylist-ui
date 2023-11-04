import React from 'react';

// components
import HomeHeader from './components/HomeHeader';
import { Container, LoadingOverlay } from '@mantine/core';
import { BackendStatus } from 'components/BackendStatus';
import Space from './components/Space/Space';

// styling
import './homepage.css';

// types
import { ISpace } from '../../interfaces';

import useSpaceQueries from 'api/queries/useSpaceQueries';

function HomePage() {
  const { isLoading, spaces } = useSpaceQueries();

  return (
    <>
      <LoadingOverlay visible={spaces?.length === 0 && isLoading} />
      <HomeHeader />
      <Container style={{ marginBottom: '5em' }}>
        {spaces &&
          spaces.map((space: ISpace) => {
            return <Space key={`space-${space.id}`} space={space} />;
          })}
      </Container>

      <BackendStatus />
    </>
  );
}

export default HomePage;
