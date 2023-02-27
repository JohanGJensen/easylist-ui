import { http } from '../index';

export interface RegistrationRequest {
  username: string;
  password: string;
}

export const postLogin = (request: RegistrationRequest) => {
  return http.post(`/users/login`, request, {
    withCredentials: true,
  });
};

export const postRegister = (request: RegistrationRequest) => {
  return http.post(`/users/register`, request);
};
