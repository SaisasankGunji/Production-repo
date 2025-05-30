import axios from "axios";
// import { import.meta.env.VITE_REACT_APP_BACKEND_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

//! Get the token
const token = getUserFromStorage();
//! Add
export const addCategoryAPI = async ({ name, type }) => {
  const response = await axios.post(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/categories/create`,
    {
      name,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};
//! update
export const updateCategoryAPI = async ({ name, type, id }) => {
  const response = await axios.put(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/categories/update/${id}`,
    {
      name,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};
//! delete
export const deleteCategoryAPI = async (id) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/categories/delete/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};
//! lists
export const listCategoriesAPI = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/categories/lists`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //Return a promise
  return response.data;
};
