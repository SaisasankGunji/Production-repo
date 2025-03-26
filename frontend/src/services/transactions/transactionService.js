import axios from "axios";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const addTransactionAPI = async ({ type, category, date, description, amount }) => {
  const token = getUserFromStorage();
  const response = await axios.post(
    `${API_BASE_URL}/transactions/create`,
    { category, date, description, amount, type },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const updateTransactionAPI = async ({ type, category, date, description, amount, id }) => {
  const token = getUserFromStorage();
  const response = await axios.put(
    `${API_BASE_URL}/transactions/update/${id}`,
    { category, date, description, amount, type },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

export const deleteTransactionAPI = async (id) => {
  const token = getUserFromStorage();
  const response = await axios.delete(`${API_BASE_URL}/transactions/delete/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const listTransactionsAPI = async ({ category, type, startDate, endDate }) => {
  const token = getUserFromStorage();
  const response = await axios.get(`${API_BASE_URL}/transactions/lists`, {
    params: { category, endDate, startDate, type },
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
