import axios from "axios";
import { ISpaceItemRequest } from "../interfaces";

// const HOST = 'http://localhost:8080'
const HOST = 'https://easylist-api.onrender.com';

export const getAllSpaces = () => {
  return axios.get(`${HOST}/spaces/all`);
};

export const postNewSpace = (request: any) => {
  return axios.post(`${HOST}/spaces/create`, request);
};

export const deleteSpace = (spaceId: string) => {
  return axios.delete(`${HOST}/spaces/delete/${spaceId}`);
};

export const postNewItem = (data: {spaceId: string; request: ISpaceItemRequest}) => {
  const {spaceId, request} = data;
  return axios.post(`${HOST}/items/create/${spaceId}`, request);
};

export const postItemUpdate = (data: { spaceId: string; itemId: string; request: ISpaceItemRequest }) => {
  const { spaceId, itemId, request } = data;
  return axios.post(`${HOST}/items/update/${spaceId}/${itemId}`, request);
};

export const deleteItem = (data: { spaceId: string; itemId: string}) => {
  const { spaceId, itemId } = data;
  return axios.delete(`${HOST}/items/delete/${spaceId}/${itemId}`);
};