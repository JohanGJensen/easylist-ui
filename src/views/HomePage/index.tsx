import React from 'react';
import { SpaceContext } from '../../providers/SpaceProvider';

// components
import HomeHeader from './components/HomeHeader';
import { Container, LoadingOverlay } from '@mantine/core';
import Space from './components/Space/Space';

// styling
import './homepage.css';

// types
import { ISpace } from '../../interfaces';

function HomePage() {
  const { data, loading } = React.useContext(SpaceContext);

  return (
    <>
      <LoadingOverlay visible={loading} />
      <HomeHeader />
      <Container>
        {data && data.map((space: ISpace) => {
          return (
            <Space key={`space-${space.id}`} space={space} />
          )
        })}
      </Container>
    </>
  );
}

export default HomePage;
