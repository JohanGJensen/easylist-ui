import axios from "axios";

const HOST = 'https://easy-list.herokuapp.com';

export const getAllSpaces = () => {
  return axios.get(`${HOST}/spaces/all`);
};

export const postNewItem = (spaceId: string, params: URLSearchParams) => {
  return axios.post(`${HOST}/items/create/${spaceId}`, params);
};

export const postItemUpdate = (spaceId: string, itemId: string, params: URLSearchParams) => {
  return axios.post(`${HOST}/items/update/${spaceId}/${itemId}`, params);
};

export const deleteItem = (spaceId: string, itemId: string) => {
  return axios.delete(`${HOST}/items/delete/${spaceId}/${itemId}`);
};