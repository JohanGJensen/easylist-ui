import React from 'react';
import { SpaceContext } from '../../providers/SpaceProvider';

// components
import { Card, Container, Text, Divider, Group } from '@mantine/core';
import ItemList from '../ItemList/ItemList';
import ButtonGroup from './ButtonGroup';

// types
import { ISpace } from '../../interfaces';

const HomePage: React.FC = ({ }) => {
  const { data } = React.useContext(SpaceContext);

  return (
    <Container>
      {data && data.map((space: ISpace, i: number) => {
        return (
          <Card key={`space-${i}`} shadow="sm" p="lg" style={{ marginBottom: '1.2rem' }}>
            <Group position={'apart'}>
              <Group direction={'column'} spacing={'xs'}>
                <Text size={'xl'} weight={500}>{space.name}</Text>
                <Text size={'sm'}>{space.user}</Text>
              </Group>
              <ButtonGroup spaceId={space._id} />
            </Group>
            <Divider my="sm" />
            <ItemList space={space} />
          </Card>
        )
      })}
    </Container>
  );
}

export default HomePage;
