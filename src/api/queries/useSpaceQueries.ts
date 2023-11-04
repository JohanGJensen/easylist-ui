import { useQuery } from '@tanstack/react-query';
import { getAllSpaces } from 'api/endpoints';
import { ISpace } from 'interfaces';
import { SpaceContext } from 'providers/SpaceProvider';
import { useContext } from 'react';

type SpaceQuery = {
  isLoading: boolean;
  spaces: ISpace[];
};

const useSpaceQueries = (): SpaceQuery => {
  const { handleSetAllSpaces } = useContext(SpaceContext);

  const { isLoading, isSuccess, data } = useQuery({
    queryKey: ['spaces'],
    queryFn: getAllSpaces,
    staleTime: 6000,
  });

  if (isSuccess) handleSetAllSpaces(data.data);

  return { isLoading, spaces: data?.data || [] };
};

export default useSpaceQueries;
