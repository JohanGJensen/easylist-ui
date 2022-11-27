import { getStatus, postLogin, postRegister, RegistrationRequest } from 'api';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// types
import { IUserState } from '../interfaces';

export const UserContext = React.createContext({} as IUserState);

interface IProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<IProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<boolean>(false);
  const [online, setOnline] = useState<boolean>(false);

  const login = async (request: RegistrationRequest) => {
    await postLogin(request)
      .then((response) => {
        const { data, status } = response;

        if (status === 200) {
          setUser(true);
          console.log(data);

          // navigate home
          navigate(`/easylist-ui-pwa/home`);
        }
      })
      .catch((error) => {
        setUser(false);
        console.error(error);
      });
  };

  const register = async (request: RegistrationRequest) => {
    await postRegister(request)
      .then((response) => {
        const { data, status } = response;

        if (status === 200) {
          setUser(true);
          console.log(data);

          // navigate home
          navigate(`/easylist-ui-pwa/home`);
        }
      })
      .catch((error) => {
        setUser(false);
        console.error(error);
      });
  };

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
    fetchStatus();
  }, []);

  const values: IUserState = {
    user,
    online,
    login,
    register,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export default UserProvider;
