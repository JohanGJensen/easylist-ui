import axios from "axios";

const HOST = 'http://localhost:8080'
// const HOST = 'https://easylist-api.onrender.com';

export const getAllSpaces = () => {
  return axios.get(`${HOST}/spaces/all`);
};

export const postNewSpace = (params: URLSearchParams) => {
  return axios.post(`${HOST}/spaces/create`, params);
};

export const deleteSpace = (spaceId: string) => {
  return axios.delete(`${HOST}/spaces/delete/${spaceId}`);
};

export const postNewItem = (spaceId: string, params: URLSearchParams) => {
  return axios.post(`${HOST}/items/create/${spaceId}`, params);
};

export const postItemUpdate = (spaceId: string, itemId: string, params: any) => {
  return axios.post(`${HOST}/items/update/${spaceId}/${itemId}`, params);
};

export const deleteItem = (spaceId: string, itemId: string) => {
  return axios.delete(`${HOST}/items/delete/${spaceId}/${itemId}`);
};