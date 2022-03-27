import React from 'react';
import { SpaceContext } from '../../providers/SpaceProvider';

// components
import { Card, Text, Divider, Group, Progress } from '@mantine/core';
import ItemList from '../ItemList/ItemList';
import ButtonGroup from './ButtonGroup';

// types
import { ISpace } from '../../interfaces';

interface IProps {
  space: ISpace;
}

const HomePage: React.FC<IProps> = (props) => {
  const { data } = React.useContext(SpaceContext);
  const { space } = props;
  const [percentage, setPercentage] = React.useState<number>(0);

  React.useEffect(() => {
    let totalItemCount: number = space.items.length;
    let checkedItemCount: number = 0;

    space.items.forEach(item => {
      item.complete === 'true' && (checkedItemCount += 1);
    });

    const decimal = checkedItemCount / totalItemCount;
    const percent = decimal * 100;

    setPercentage(percent);
  }, [data]);

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
      <Divider my="sm" />
      <Progress value={percentage} color={percentage >= 100 ? 'teal' : 'blue'} size={'lg'} />
    </Card>
  );
}

export default HomePage;
