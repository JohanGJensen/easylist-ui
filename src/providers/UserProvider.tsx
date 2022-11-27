import { getStatus } from 'api';
import React, { useEffect, useState } from 'react';

// types
import { IUserState } from '../interfaces';

export const UserContext = React.createContext({} as IUserState);

interface IProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<IProviderProps> = ({ children }) => {
  const [user, setUser] = useState<boolean>(false);
  const [online, setOnline] = useState<boolean>(false);

  const fetchStatus = async () => {
    await getStatus()
      .then((response) => {
        const { data } = response;

        if (data === 'healthy') {
          setOnline(true);
        }
      })
      .catch((error) => {
        setOnline(false);
        console.error(error);
      });
  };

  useEffect(() => {
    setUser(false);

    fetchStatus();
  }, []);

  const values: IUserState = {
    user,
    online,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
