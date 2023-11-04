import { useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteSpace, postNewSpace } from '../endpoints';

const useSpaceMutation = () => {
  const qc = useQueryClient();

  const { mutate: createSpace, isSuccess: created } = useMutation({
    mutationFn: postNewSpace,
  });

  if (created) qc.refetchQueries({ queryKey: ['spaces'], stale: true });

  const { mutate: removeSpace, isSuccess: deleted } = useMutation({
    mutationFn: deleteSpace,
  });

  if (deleted) qc.refetchQueries({ queryKey: ['spaces'] });

  return { removeSpace, createSpace };
};

export default useSpaceMutation;
