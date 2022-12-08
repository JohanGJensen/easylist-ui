import axios from 'axios';
import { getCookie } from 'utilities/cookieFunctions';
import { IItemRequest, ISpaceRequest } from '../interfaces';
import { IRequestMutation } from './mutations/useMutateItems';

export * from './user/user';

export const HOST = import.meta.env.VITE_API_HOST;
// const JWT = getCookie('jwt');

export const http = axios.create({
  baseURL: HOST,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Authorization: getCookie('jwt'),
  },
});

export const getStatus = () => {
  return http.get(`/health`);
};

export const getAllSpaces = () => {
  return http.get(`/spaces/all`, {
    headers: {
      Authorization: getCookie('jwt'),
    },
  });
};

export const postNewSpace = (request: ISpaceRequest) => {
  return http.post(`/spaces/create`, request, {
    headers: {
      Authorization: getCookie('jwt'),
    },
  });
};

export const deleteSpace = (spaceId: string) => {
  return http.delete(`/spaces/delete/${spaceId}`, {
    headers: {
      Authorization: getCookie('jwt'),
    },
  });
};

export const postNewItem = (data: IRequestMutation<IItemRequest>) => {
  const { spaceId, request } = data;
  return http.post(`/items/create/${spaceId}`, request, {
    headers: {
      Authorization: getCookie('jwt'),
    },
  });
};

export const postItemUpdate = (data: IRequestMutation<IItemRequest>) => {
  const { spaceId, itemId, request } = data;
  return http.post(`/items/update/${spaceId}/${itemId}`, request, {
    headers: {
      Authorization: getCookie('jwt'),
    },
  });
};

export const deleteItem = (data: IRequestMutation<IItemRequest>) => {
  const { spaceId, itemId } = data;
  return http.delete(`/items/delete/${spaceId}/${itemId}`, {
    headers: {
      Authorization: getCookie('jwt'),
    },
  });
};
