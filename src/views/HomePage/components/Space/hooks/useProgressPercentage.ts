import React from 'react';
import { SpaceContext } from '../../../../../providers/SpaceProvider';

// types
import { ISpace } from '../../../../../interfaces';

export const useProgressPercentage = (space: ISpace) => {
  const { data } = React.useContext(SpaceContext);
  const [percentage, setPercentage] = React.useState<number>(0);

  React.useEffect(() => {
    let totalItemCount: number = space.items.length;
    let checkedItemCount: number = 0;

    space.items.forEach(item => {
      item.complete && (checkedItemCount += 1);
    });

    const decimal = checkedItemCount / totalItemCount;
    const percent = decimal * 100;

    setPercentage(percent);
  }, [data, space.items]);

  return percentage;
};