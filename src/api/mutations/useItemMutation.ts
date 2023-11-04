import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { deleteItem, postItemUpdate, postNewItem } from '../endpoints';
import { SpaceContext } from '../../providers/SpaceProvider';
import { ISpace } from '../../interfaces';

export interface IRequestMutation<T> {
  spaceId?: string;
  itemId?: string;
  request?: T;
}

const useItemMutation = (space: ISpace) => {
  const { handleCreateItem, handleDeleteItem, handleUpdateItem } =
    useContext(SpaceContext);

  // const { mutate: removeItem } = useMutation(deleteItem, {
  //   onSuccess: ({ data: item }) => {
  //     handleDeleteItem(space, item.id);
  //   },
  // });
  const {
    mutate: removeItem,
    isSuccess: deleted,
    data: deletedData,
  } = useMutation({ mutationFn: deleteItem });

  if (deleted) console.log(deletedData);

  const {
    mutate: updateItem,
    isSuccess: updated,
    data: updatedData,
  } = useMutation({ mutationFn: postItemUpdate });

  if (updated) handleUpdateItem(space.id, updatedData.data);

  const {
    mutate: createItem,
    isSuccess: created,
    data: createdData,
  } = useMutation({ mutationFn: postNewItem });

  if (created) handleCreateItem(space.id, createdData.data);

  return { removeItem, updateItem, createItem };
};

export default useItemMutation;
