import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { deleteItem, postItemUpdate, postNewItem } from '..';
import { SpaceContext } from '../../providers/SpaceProvider';
import { ISpace, ISpaceItem } from '../../interfaces';

const useMutateItems = (
  space: ISpace,
  item?: ISpaceItem
) => {
  const {
    handleAddItem,
    handleDeleteItem,
    handleUpdateItem
  } = useContext(SpaceContext);

  // Mutations
  const { mutate: removeItem } = useMutation(deleteItem, {
    onSuccess: () => {
      if (item) {
        handleDeleteItem(space, item);
      }
    }
  });

  const { mutate: updateItem } = useMutation(postItemUpdate, {
    onSuccess: ({ data: item }) => {
      handleUpdateItem(space.id, item);
    }
  });

  const { mutate: newItem } = useMutation(postNewItem, {
    onSuccess: ({ data: item }) => {
      handleAddItem(space.id, item);
    },
  });

  return { removeItem, updateItem, newItem };
};

export default useMutateItems;