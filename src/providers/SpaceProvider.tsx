import React, { useState } from 'react';

// types
import { ISpace, ISpaceItem, ISpaceState } from '../interfaces';

export const SpaceContext = React.createContext({} as ISpaceState);

interface IProviderProps {
  children: React.ReactNode;
}

const SpaceProvider: React.FC<IProviderProps> = ({ children }) => {
  const [data, setData] = useState<ISpace[]>([]);

  const setSpacesData = (spaces: ISpace[]) => {
    // set data in provider
    setData(spaces);

    // store locally
    localStorage.setItem('spaces', JSON.stringify(spaces));
  };

  const handleSetAllSpaces = (spaces: ISpace[]) => {
    setSpacesData(spaces);
  };

  const handleAddSpace = (space: ISpace) => {
    setSpacesData([...data, space]);
  };

  const handleAddItem = (spaceId: string, item: ISpaceItem) => {
    const newData: ISpace[] = data.map((space) => {
      if (space.id === spaceId) {
        space.items.push(item);
      }

      return space;
    });

    newData && setSpacesData(newData);
  };

  const handleDeleteItem = (space: ISpace, itemId: string) => {
    const itemIndex: number = space.items.findIndex((sItem) => {
      return sItem.id === itemId;
    });
    const newData: ISpace[] = data.map((dataSpace) => {
      if (dataSpace.id === space.id) {
        dataSpace.items.splice(itemIndex, 1);
      }

      return dataSpace;
    });

    setSpacesData([...newData]);
  };

  const handleDeleteSpace = (spaceId: string) => {
    const newData: ISpace[] = data;
    const spaceIndex: number = data.findIndex((space) => {
      return space.id === spaceId;
    });

    newData.splice(spaceIndex, 1);

    setSpacesData([...newData]);
  };

  const handleUpdateItem = (spaceId: string, item: ISpaceItem) => {
    const spaceIndex: number = data.findIndex((space) => {
      return space.id === spaceId;
    });
    const itemIndex: number = data[spaceIndex].items.findIndex((sItem) => {
      return sItem.id === item.id;
    });
    const newData: ISpace[] = data;

    data[spaceIndex].items[itemIndex] = item;

    setSpacesData([...newData]);
  };

  React.useEffect(() => {
    const spaces: ISpace[] | undefined = JSON.parse(
      localStorage.getItem('spaces')
    );

    setSpacesData(spaces);
  }, []);

  const values: ISpaceState = {
    data,
    handleSetAllSpaces,
    handleDeleteItem,
    handleDeleteSpace,
    handleAddItem,
    handleAddSpace,
    handleUpdateItem,
  };

  return (
    <SpaceContext.Provider value={values}>{children}</SpaceContext.Provider>
  );
};

export default SpaceProvider;
