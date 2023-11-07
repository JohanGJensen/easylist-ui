import { useQuery } from '@tanstack/react-query';
import { getAllSpaces } from 'api/endpoints';
import { ISpace } from 'interfaces';

type SpaceQuery = {
  isLoading: boolean;
  spaces: ISpace[];
};

const useSpaceQueries = (): SpaceQuery => {
  const { isLoading, data } = useQuery({
    queryKey: ['spaces'],
    queryFn: getAllSpaces,
    staleTime: 3000,
  });

  // seems like caching replaces a value of being an axios response with ISpace[]
  console.log('data', data);
  return { isLoading, spaces: data?.data ?? [] };
};

export default useSpaceQueries;
