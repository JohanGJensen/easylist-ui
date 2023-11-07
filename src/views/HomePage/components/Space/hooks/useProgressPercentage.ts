import React from 'react';
import useSpaceQueries from 'api/queries/useSpaceQueries';

// types
import { ISpace } from '../../../../../interfaces';

export const useProgressPercentage = (space: ISpace) => {
  const { spaces } = useSpaceQueries();
  const [percentage, setPercentage] = React.useState<number>(0);

  React.useEffect(() => {
    const totalItemCount = space.items.length;
    let checkedItemCount = 0;

    space.items.forEach((item) => {
      item.complete && (checkedItemCount += 1);
    });

    const decimal = checkedItemCount / totalItemCount;
    const percent = decimal * 100;

    setPercentage(percent);
  }, [spaces, space.items]);

  return percentage;
};
