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

        if (status === 200 && data.token) {
          setCookie('jwt', data.token, 1);
          setUser(true);

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

        if (status === 200 && data.token) {
          setCookie('jwt', data.token, 1);
          setUser(true);

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

  const getCookieExpirationUTC = (hours: number) => {
    const event = new Date();
    event.setUTCHours(event.getUTCHours() + hours);

    return event.toUTCString();
  };

  const setCookie = (name: string, value: string, expireHours: number) => {
    document.cookie = `${name}=${value}; expires=${getCookieExpirationUTC(
      expireHours
    )}; path=/`;
  };

  const getCookie = (name: string) => {
    const n = name + '=';
    const decodedCookie = decodeURIComponent(document.cookie); //to be careful
    const cookies = decodedCookie.split('; ');
    let cookie;

    cookies.forEach((val) => {
      console.log(val, n);
      if (val.includes(n)) cookie = val.substring(n.length);
    });

    return cookie;
  };

  useEffect(() => {
    // get backend availability status
    fetchStatus();

    // check storage for a token
    const jwt = getCookie('jwt');

    if (jwt) {
      setUser(true);

      // navigate home
      navigate(`/easylist-ui-pwa/home`);
    }
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
