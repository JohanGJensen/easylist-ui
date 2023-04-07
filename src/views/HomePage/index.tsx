import React, { useContext } from 'react';

// components
import HomeHeader from './components/HomeHeader';
import { Container, LoadingOverlay } from '@mantine/core';
import { BackendStatus } from 'components/BackendStatus';
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
      <LoadingOverlay visible={data?.length === 0 && isLoading} />
      <HomeHeader />
      <Container style={{ marginBottom: '5em' }}>
        {data &&
          data.map((space: ISpace) => {
            return <Space key={`space-${space.id}`} space={space} />;
          })}
      </Container>

      <BackendStatus />
    </>
  );
}

export default HomePage;
