import { useQuery } from '@tanstack/react-query';
import { getStatus } from 'api';
import React from 'react';

type ConnectionQuery = {
  isOnline: boolean;
};

export const useCheckConnection = (): ConnectionQuery => {
  const [online, setOnline] = React.useState<boolean>(false);

  useQuery(['connection'], getStatus, {
    onSuccess: (data) => {
      const { data: status } = data;

      if (status && status.message === 'healthy') {
        setOnline(true);
      }
    },
  });

  return { isOnline: online };
};
