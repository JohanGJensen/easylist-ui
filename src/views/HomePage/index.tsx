import React, { useContext } from 'react';

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
import { SpaceContext } from '../../providers/SpaceProvider';

function HomePage() {
  const { data, handleSetAllSpaces } = useContext(SpaceContext);

  const { isLoading } = useQuery(['spaces'], getAllSpaces, {
    onSuccess: ({ data: spaces }) => {
      handleSetAllSpaces(spaces);
    },
    staleTime: 6000,
  });

  return (
    <>
      <LoadingOverlay visible={isLoading} />
      <HomeHeader />
      <Container>
        {data &&
          data.map((space: ISpace) => {
            return <Space key={`space-${space.id}`} space={space} />;
          })}
      </Container>
    </>
  );
}

export default HomePage;
