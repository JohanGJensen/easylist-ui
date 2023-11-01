import { getStatus, postLogin, postRegister, RegistrationRequest } from 'api';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie, setCookie } from 'utilities/cookieFunctions';

// types
import { IUserState, User } from '../interfaces';

export const UserContext = React.createContext({} as IUserState);

interface IProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<IProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [online, setOnline] = useState<boolean>(false);

  const login = async (request: RegistrationRequest) => {
    await postLogin(request)
      .then((response) => {
        const { data, status } = response;

        if (status === 200 && data.token) {
          setCookie('jwt', data.token, 1);
          setUser({ jwt: getCookie('jwt') });
        }
      })
      .catch((error) => {
        setUser(null);
        console.error(error);
      });
  };

  const register = async (request: RegistrationRequest) => {
    await postRegister(request)
      .then((response) => {
        const { data, status } = response;

        if (status === 200 && data.token) {
          setCookie('jwt', data.token, 1);
          setUser({ jwt: getCookie('jwt') });

          // navigate home
          navigate(`/easylist-ui/home`);
        }
      })
      .catch((error) => {
        setUser(null);
        console.error(error);
      });
  };

  const fetchStatus = async () => {
    await getStatus()
      .then((response) => {
        const { data } = response;
        // if (data === 'healthy') {
        if (data && data.message === 'healthy') {
          setOnline(true);
        }
      })
      .catch((error) => {
        setOnline(false);
        console.error(error);
      });
  };

  useEffect(() => {
    // get backend availability status
    fetchStatus();

    if (user) {
      // navigate home
      navigate(`/easylist-ui/home`);
      return;
    }

    // check storage for a token
    const jwt = getCookie('jwt');

    if (jwt) {
      setUser({ jwt: getCookie('jwt') });
      navigate(`/easylist-ui/home`);
    }
  }, [user]);

  const values: IUserState = {
    user,
    online,
    login,
    register,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
