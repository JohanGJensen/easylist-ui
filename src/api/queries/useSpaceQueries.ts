import { useQuery } from '@tanstack/react-query';
import { getAllSpaces } from 'api/endpoints';
import { ISpace } from 'interfaces';

type SpaceQuery = {
  isLoading: boolean;
  spaces: ISpace[];
};

const useSpaceQueries = (): SpaceQuery => {
  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ['spaces'],
    queryFn: getAllSpaces,
    staleTime: 3000,
  });

  if (isSuccess) {
    return { isLoading, spaces: data.data };
  }

  return { isLoading, spaces: [] };
};

export default useSpaceQueries;
