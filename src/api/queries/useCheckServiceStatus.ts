import { useQuery } from '@tanstack/react-query';
import { getStatus } from 'api/endpoints';

type ConnectionQuery = {
  isOnline: boolean;
};

export const useCheckServiceStatus = (): ConnectionQuery => {
  const { data, isSuccess } = useQuery({
    queryKey: ['connection'],
    queryFn: getStatus,
    staleTime: Infinity,
  });

  if (isSuccess) {
    const { data: status } = data;

    if (status && status.message === 'healthy') {
      return { isOnline: true };
    }
  }

  return { isOnline: false };
};
