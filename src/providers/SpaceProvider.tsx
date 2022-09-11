import React, { useState, useEffect } from 'react';

// api
import { getAllSpaces } from '../api';

// types
import { ISpace, ISpaceItem, ISpaceState } from '../interfaces';

export const SpaceContext = React.createContext({
  data: [],
  loading: true,
  handleUpdateItem: (id: string, i: ISpaceItem) => {},
  handleDeleteItem: (s: ISpace, i: ISpaceItem) => {},
  handleDeleteSpace: (id: string) => {},
  handleAddItem: (id: string, i: ISpaceItem) => {},
  handleAddSpace: (s: ISpace) => {},
} as ISpaceState);

const SpaceProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [data, setData] = useState<ISpace[]>([]);

  useEffect(() => {
    getAllSpaces()
      .then((data) => {
        setData(data.data.result);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleAddSpace = (space: ISpace) => {
    setData([...data, space]);
  };

  const handleAddItem = (spaceId: string, item: ISpaceItem) => {
    const newData: ISpace[] = data.map((space) => {
      if (space._id === spaceId) {
        space.items.push(item);
      }

      return space;
    });

    newData && setData(newData);
  };

  const handleDeleteItem = (space: ISpace, item: ISpaceItem) => {
    const itemIndex: number = space.items.findIndex((sItem) => {
      return sItem._id === item._id;
    });
    const newData: ISpace[] = data.map((dataSpace) => {
      if (dataSpace._id === space._id) {
        dataSpace.items.splice(itemIndex, 1);
      }

      return dataSpace;
    });

    setData([...newData]);
  };

  const handleDeleteSpace = (spaceId: string) => {
    const newData: ISpace[] = data;
    const spaceIndex: number = data.findIndex(space => {
      return space._id === spaceId;
    });

    newData.splice(spaceIndex, 1);

    setData([...newData]);
  };

  const handleUpdateItem = (spaceId: string, item: ISpaceItem) => {
    const spaceIndex: number = data.findIndex(space => {
      return space._id === spaceId;
    });
    const itemIndex: number = data[spaceIndex].items.findIndex(sItem => {
      return sItem._id === item._id
    });
    const newData: ISpace[] = data;

    data[spaceIndex].items[itemIndex] = item;

    setData([...newData]);
  };

  const values: ISpaceState = {
    data,
    loading,
    handleDeleteItem,
    handleDeleteSpace,
    handleAddItem,
    handleAddSpace,
    handleUpdateItem
  }

  return (
    <SpaceContext.Provider
      value={values}
      children={children}
    />
  );
}

export default SpaceProvider;
