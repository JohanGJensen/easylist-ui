import React from 'react';
import { SpaceContext } from '../../providers/SpaceProvider';

// components
import Header from '../../components/Header/Header';
import { Container, LoadingOverlay } from '@mantine/core';
import Space from '../../components/Space/Space';

// styling
import './homepage.css';

// types
import { ISpace } from '../../interfaces';

function HomePage() {
  const { data, loading } = React.useContext(SpaceContext);

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Header />
      <Container>
        {data && data.map((space: ISpace) => {
          return (
            <Space key={`space-${space._id}`} space={space} />
          )
        })}
      </Container>
    </>
  );
}

export default HomePage;
