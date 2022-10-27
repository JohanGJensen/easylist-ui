import axios from 'axios';
import { IItemRequest, ISpaceRequest } from '../interfaces';

interface IRequestMutation<T> {
  spaceId?: string;
  itemId?: string;
  request?: T;
}

const HOST = 'http://localhost:8080';
// const HOST = 'https://easylist-api.onrender.com';

export const getAllSpaces = () => {
  return axios.get(`${HOST}/spaces/all`);
};

export const postNewSpace = (request: ISpaceRequest) => {
  return axios.post(`${HOST}/spaces/create`, request);
};

export const deleteSpace = (spaceId: string) => {
  return axios.delete(`${HOST}/spaces/delete/${spaceId}`);
};

export const postNewItem = (data: IRequestMutation<IItemRequest>) => {
  const { spaceId, request } = data;
  return axios.post(`${HOST}/items/create/${spaceId}`, request);
};

export const postItemUpdate = (data: IRequestMutation<IItemRequest>) => {
  const { spaceId, itemId, request } = data;
  return axios.post(`${HOST}/items/update/${spaceId}/${itemId}`, request);
};

export const deleteItem = (data: IRequestMutation<IItemRequest>) => {
  const { spaceId, itemId } = data;
  return axios.delete(`${HOST}/items/delete/${spaceId}/${itemId}`);
};
