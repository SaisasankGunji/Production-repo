import axios from "axios";
// import { import.meta.env.VITE_REACT_APP_BACKEND_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

const token = getUserFromStorage();

export const addTransactionAPI = async ({
  type,
  category,
  date,
  description,
  amount,
}) => {
  const response = await axios.post(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/transactions/create`,
    {
      category,
      date,
      description,
      amount,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const updateTransactionAPI = async ({
  type,
  category,
  date,
  description,
  amount,
  id,
}) => {
  const response = await axios.put(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/transactions/update/${id}`,
    {
      category,
      date,
      description,
      amount,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteTransactionAPI = async (id) => {
  const response = await axios.delete(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/transactions/delete/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const listTransactionsAPI = async ({
  category,
  type,
  startDate,
  endDate,
}) => {
  const response = await axios.get(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/transactions/lists`,
    {
      params: { category, endDate, startDate, type },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
