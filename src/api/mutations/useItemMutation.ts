import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteItem, postItemUpdate, postNewItem } from '../endpoints';

export interface IRequestMutation<T> {
  spaceId?: string;
  itemId?: string;
  request?: T;
}

const useItemMutation = () => {
  const qc = useQueryClient();

  const { mutate: removeItem, isSuccess: deleted } = useMutation({
    mutationFn: deleteItem,
  });

  if (deleted) qc.refetchQueries({ queryKey: ['spaces'] });

  const { mutate: updateItem, isSuccess: updated } = useMutation({
    mutationFn: postItemUpdate,
  });

  if (updated) qc.refetchQueries({ queryKey: ['spaces'], stale: true });

  const { mutate: createItem, isSuccess: created } = useMutation({
    mutationFn: postNewItem,
  });

  if (created) qc.refetchQueries({ queryKey: ['spaces'], stale: true });

  return { removeItem, updateItem, createItem };
};

export default useItemMutation;
