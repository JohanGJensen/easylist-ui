import React from 'react';

// components
import { Card, Text, Divider, Group, Progress } from '@mantine/core';
import ItemList from '../ItemList/ItemList';
import ButtonGroup from './ButtonGroup';

// types
import { ISpace } from '../../interfaces';

// hooks
import { useProgressPercentage } from './hooks/useProgressPercentage';

interface IProps {
  space: ISpace;
}

const HomePage: React.FC<IProps> = (props) => {
  const { space } = props;
  const percentage = useProgressPercentage(space);

  return (
    <Card shadow="sm" p="lg" style={{ marginBottom: '1.2rem' }}>
      <Group position={'apart'}>
        <Group direction={'column'} spacing={'xs'}>
          <Text size={'xl'} weight={500}>{space.name}</Text>
          <Text size={'sm'}>{space.user}</Text>
        </Group>
        <ButtonGroup spaceId={space._id} />
      </Group>
      <Divider my="sm" />
      <ItemList space={space} />
      {
        percentage >= 0 &&
        <>
          <Divider my="sm" />
          <Progress
            value={percentage}
            color={percentage >= 100 ? 'teal' : 'blue'}
            size={'lg'}
          />
        </>
      }
    </Card>
  );
}

export default HomePage;
