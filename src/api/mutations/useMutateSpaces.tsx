import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { deleteSpace, postNewSpace } from '..';
import { SpaceContext } from '../../providers/SpaceProvider';
import { ISpace } from '../../interfaces';

const useMutateSpaces = (space?: ISpace) => {
  const { handleAddSpace, handleDeleteSpace } = useContext(SpaceContext);

  // Mutations
  const { mutate: newSpace } = useMutation(postNewSpace, {
    onSuccess: ({ data: space }) => {
      handleAddSpace(space);
    }
  });

  const { mutate: removeSpace } = useMutation(deleteSpace, {
    onSuccess: () => {
      if (space) {
        handleDeleteSpace(space.id);
      }
    }
  });

  return { removeSpace, newSpace }
};

export default useMutateSpaces;