import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { deleteSpace, postNewSpace } from '../endpoints';
import { SpaceContext } from '../../providers/SpaceProvider';

const useSpaceMutation = () => {
  const { handleCreateSpace, handleDeleteSpace } = useContext(SpaceContext);

  const {
    mutate: createSpace,
    isSuccess: created,
    data: createdData,
  } = useMutation({
    mutationFn: postNewSpace,
  });

  if (created) handleCreateSpace(createdData.data);

  const {
    mutate: removeSpace,
    isSuccess: deleted,
    data: deletedData,
  } = useMutation({ mutationFn: deleteSpace });

  if (deleted) console.log(deletedData);
  // if (deleted) handleDeleteSpace(deletedData.data.id);

  return { removeSpace, createSpace };
};

export default useSpaceMutation;
