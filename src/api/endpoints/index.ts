import axios from 'axios';
import { getCookie } from 'utilities/cookieFunctions';
import {
  IItemRequest,
  ISpace,
  ISpaceRequest,
  ISpaceItem,
} from '../../interfaces';
import { IRequestMutation } from '../mutations/useItemMutation';

export * from './user/user';

export const HOST = import.meta.env.VITE_API_HOST;

export const http = axios.create({
  baseURL: HOST,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    Authorization: getCookie('jwt'),
  },
});

export type ResponseMessage = {
  message: string;
};

export const getStatus = () => {
  return http.get(`/api/health`);
};

export const getAllSpaces = () => {
  return http.get<ISpace[]>(`/api/spaces/all`);
};

export const postNewSpace = (request: ISpaceRequest) => {
  return http.post<ISpace>(`/api/spaces/create`, request);
};

export const deleteSpace = (spaceId: string) => {
  return http.delete<ResponseMessage>(`/api/spaces/delete/${spaceId}`);
};

export const postNewItem = (data: IRequestMutation<IItemRequest>) => {
  const { spaceId, request } = data;
  return http.post(`/api/items/create/${spaceId}`, request);
};

export const postItemUpdate = (data: IRequestMutation<IItemRequest>) => {
  const { spaceId, itemId, request } = data;
  return http.post<ISpaceItem>(
    `/api/items/update/${spaceId}/${itemId}`,
    request
  );
};

export const deleteItem = (data: IRequestMutation<IItemRequest>) => {
  const { spaceId, itemId } = data;
  return http.delete<ResponseMessage>(`/api/items/delete/${spaceId}/${itemId}`);
};
