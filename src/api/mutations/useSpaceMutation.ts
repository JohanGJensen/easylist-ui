import { useQueryClient, useMutation } from '@tanstack/react-query';
import { deleteSpace, postNewSpace } from '../endpoints';
import { ISpace, ISpaceRequest } from 'interfaces';
import { AxiosResponse } from 'axios';

const useSpaceMutation = () => {
  const qc = useQueryClient();

  const { mutate: createSpace } = useMutation({
    mutationFn: async (space: ISpaceRequest) => {
      await postNewSpace(space).then((res) => {
        // qc.refetchQueries({ queryKey: ['spaces'], stale: true });

        qc.setQueryData(['spaces'], (oldData: AxiosResponse<ISpace[]>) => {
          console.log(oldData.data, res.data, [...oldData.data, res.data]);

          return [...oldData.data, res.data];
        });
      });
    },
  });

  const { mutate: removeSpace, isSuccess: deleted } = useMutation({
    mutationFn: deleteSpace,
  });

  if (deleted) qc.refetchQueries({ queryKey: ['spaces'] });

  return { removeSpace, createSpace };
};

export default useSpaceMutation;
