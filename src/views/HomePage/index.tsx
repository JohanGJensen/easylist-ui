import React from 'react';
import axios from 'axios';

// components
import Header from '../../components/Header/Header';
import { LoadingOverlay } from '@mantine/core';

// styling
import './homepage.css';
import Space from '../../components/Space/Space';

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
      <Space data={data} />
    </>
  );
}

export default HomePage;
