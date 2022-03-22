import React from 'react';

// components
import Header from '../../components/Header/Header';
import { LoadingOverlay } from '@mantine/core';

// api
import { getAllSpaces } from '../../api';

// styling
import './homepage.css';
import Space from '../../components/Space/Space';

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

function HomePage() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = React.useState<ISpace[]>(null);

  React.useEffect(() => {
    getAllSpaces()
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
