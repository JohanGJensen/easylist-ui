import axios from "axios";

const HOST = 'https://easy-list.herokuapp.com';

export const getAllSpaces = () => {
  return axios.get(`${HOST}/spaces/all`);
};

export const postNewItem = (spaceId: string, itemId: string, params: URLSearchParams) => {
  return axios.post(`${HOST}/items/update/${spaceId}/${itemId}`, params);
};