import axios from "axios";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

// Add Category
export const addCategoryAPI = async ({ name, type }) => {
  const token = getUserFromStorage();
  const response = await axios.post(
    `${API_BASE_URL}/categories/create`,
    { name, type },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Update Category
export const updateCategoryAPI = async ({ name, type, id }) => {
  const token = getUserFromStorage();
  const response = await axios.put(
    `${API_BASE_URL}/categories/update/${id}`,
    { name, type },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Delete Category
export const deleteCategoryAPI = async (id) => {
  const token = getUserFromStorage();
  const response = await axios.delete(`${API_BASE_URL}/categories/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// List Categories
export const listCategoriesAPI = async () => {
  const token = getUserFromStorage();
  const response = await axios.get(`${API_BASE_URL}/categories/lists`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
