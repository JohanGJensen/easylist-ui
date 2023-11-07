import { postLogin, postRegister, RegistrationRequest } from 'api/endpoints';
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

  useEffect(() => {
    if (user) {
      // navigate home
      navigate(`/easylist-ui/home`);
      return;
    }

    // check storage for a token
    const jwt = getCookie('jwt');

    if (jwt) {
      setUser({ jwt: jwt });
      navigate(`/easylist-ui/home`);
    }
  }, [user]);

  const values: IUserState = {
    user,
    login,
    register,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
