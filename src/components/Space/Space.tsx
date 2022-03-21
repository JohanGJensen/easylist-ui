import React from 'react';

// components
import { Card, Container, Text, Divider, ActionIcon, Group } from '@mantine/core';
import ItemList from '../ItemList/ItemList';

// styling
import { Plus, Trash } from 'tabler-icons-react';

interface ISpaceItem {
  _id: string;
  complete: string;
  name: string;
}

interface ISpace {
  _id: string;
  name: string;
  user: string;
  items: ISpaceItem[];
}

interface IProps {
  data: ISpace[];
}

const HomePage: React.FC<IProps> = (props) => {
  const { data } = props;

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
              <Group direction={'row'} spacing={'md'}>
                <ActionIcon size={'sm'} color={'teal'} children={<Plus />} />
                <ActionIcon size={'sm'} color={'red'} children={<Trash />} />
              </Group>
            </Group>
            <Divider my="sm" />
            <ItemList spaceId={space._id} items={space.items} />
          </Card>
        )
      })}
    </Container>
  );
}

export default HomePage;
