import React, { useState, useEffect } from 'react';

// api
import { getAllSpaces } from '../api';

// types
import { ISpace, IState } from '../interfaces';

const state: IState = {
  data: null,
  loading: true,
  handleData: () => { }
};

export const SpaceContext = React.createContext(state);

const SpaceProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = useState<ISpace[]>(null);

  useEffect(() => {
    getAllSpaces()
      .then((data) => {
        setData(data.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleData = (data: ISpace[]) => {
    setData(data);
  }

  return (
    <SpaceContext.Provider value={{ data, handleData, loading }}>
      {children}
    </SpaceContext.Provider>
  );
}

export default SpaceProvider;
