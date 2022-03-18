import React from 'react';
import axios from 'axios';

// components
import Header from '../../components/Header/Header';
import { Card, LoadingOverlay, Checkbox, Container, Text, Grid, Divider, ActionIcon, Group } from '@mantine/core';

// styling
import './homepage.css';
import { Plus, Trash } from 'tabler-icons-react';

interface ISpaceItem {
  id: string;
  complete: string;
  name: string;
}

interface ISpace {
  id: string;
  name: string;
  user: string;
  items: ISpaceItem[];
}

function HomePage() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<ISpace[]>(null);

  React.useEffect(() => {
    axios.get('https://easy-list.herokuapp.com/spaces/all', {
      method: 'get'
    })
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <LoadingOverlay visible={loading} />
      <Header />
      <Container>
        {data && data.map((item: ISpace) => {
          return (
            <Card shadow="sm" p="lg" style={{ marginBottom: '1.2rem' }}>
              <Group position={'apart'}>
                <Group direction={'column'} spacing={'xs'}>
                  <Text size={'xl'} weight={500}>{item.name}</Text>
                  <Text size={'sm'}>{item.user}</Text>
                </Group>
                <Group direction={'row'} spacing={'md'}>
                  <ActionIcon size={'sm'} color={'teal'} children={<Plus />} />
                  <ActionIcon size={'sm'} color={'red'} children={<Trash />} />
                </Group>
              </Group>
              <Divider my="sm" />
              {item.items && item.items.map((it) => {
                return (
                  <Group position={'apart'}>
                    <Text size={'lg'}>{it.name}</Text>
                    <Group direction={'row'} spacing={'xs'}>
                      <Checkbox checked={true} color={'teal'} />
                      <ActionIcon size={'sm'} color={'red'} children={<Trash />} />
                    </Group>
                  </Group>
                )
              })}
            </Card>
          )
        })}
      </Container>
    </>
  );
}

export default HomePage;
