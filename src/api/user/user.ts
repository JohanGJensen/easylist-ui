import { http } from '../index';

export interface RegistrationRequest {
  username: string;
  password: string;
}

export const postLogin = (request: RegistrationRequest) => {
  return http.post(`/api/users/login`, request);
};

export const postRegister = (request: RegistrationRequest) => {
  return http.post(`/api/users/register`, request);
};
