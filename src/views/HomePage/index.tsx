import React from 'react';

// components
import HomeHeader from './components/HomeHeader';
import { Container, LoadingOverlay } from '@mantine/core';
import Space from './components/Space/Space';

// styling
import './homepage.css';

// types
import { ISpace } from '../../interfaces';

import { getAllSpaces } from '../../api';
import { useQuery } from '@tanstack/react-query';

function HomePage() {
  const { isLoading, data } = useQuery(['spaces'], getAllSpaces)

  return (
    <>
      <LoadingOverlay visible={isLoading} />
      <HomeHeader />
      <Container>
        {data && data.data.map((space: ISpace) => {
          return (
            <Space key={`space-${space.id}`} space={space} />
          )
        })}
      </Container>
    </>
  );
}

export default HomePage;
