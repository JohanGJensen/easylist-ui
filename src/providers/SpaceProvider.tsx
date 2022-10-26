import React, { useState } from 'react';

// types
import { ISpace, ISpaceItem, ISpaceState } from '../interfaces';

export const SpaceContext = React.createContext({} as ISpaceState);

interface IProviderProps {
  children: React.ReactNode;
}

const SpaceProvider: React.FC<IProviderProps> = ({ children }) => {
  const [data, setData] = useState<ISpace[]>([]);

  const handleSetAllSpaces = (spaces: ISpace[]) => {
    setData(spaces);
  };

  const handleAddSpace = (space: ISpace) => {
    setData([...data, space]);
  };

  const handleAddItem = (spaceId: string, item: ISpaceItem) => {
    const newData: ISpace[] = data.map((space) => {
      if (space.id === spaceId) {
        space.items.push(item);
      }

      return space;
    });

    newData && setData(newData);
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

    setData([...newData]);
  };

  const handleDeleteSpace = (spaceId: string) => {
    const newData: ISpace[] = data;
    const spaceIndex: number = data.findIndex(space => {
      return space.id === spaceId;
    });

    newData.splice(spaceIndex, 1);

    setData([...newData]);
  };

  const handleUpdateItem = (spaceId: string, item: ISpaceItem) => {
    const spaceIndex: number = data.findIndex(space => {
      return space.id === spaceId;
    });
    const itemIndex: number = data[spaceIndex].items.findIndex(sItem => {
      return sItem.id === item.id
    });
    const newData: ISpace[] = data;

    data[spaceIndex].items[itemIndex] = item;

    setData([...newData]);
  };

  const values: ISpaceState = {
    data,
    handleSetAllSpaces,
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
