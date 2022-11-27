import axios from 'axios';
import { HOST } from '../index';

export interface RegistrationRequest {
  username: string;
  password: string;
}

export const postLogin = (request: RegistrationRequest) => {
  return axios.post(`${HOST}/users/login`, request);
};

export const postRegister = (request: RegistrationRequest) => {
  return axios.post(`${HOST}/users/register`, request);
};
