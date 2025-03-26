import axios from "axios";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

// Get Base URL from .env
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

// Fetch user profile
export const getUserProfileAPI = async () => {
  const token = getUserFromStorage();
  const response = await axios.get(`${API_BASE_URL}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

// Login
export const loginAPI = async ({ email, password }) => {
  const response = await axios.post(`${API_BASE_URL}/users/login`, {
    email,
    password,
  });
  return response.data;
};

// Register
export const registerAPI = async ({ email, password, username }) => {
  const response = await axios.post(`${API_BASE_URL}/users/register`, {
    email,
    password,
    username,
  });
  return response.data;
};

// Change password
export const changePasswordAPI = async (newPassword) => {
  const token = getUserFromStorage();
  const response = await axios.put(
    `${API_BASE_URL}/users/change-password`,
    { newPassword },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};

// Update profile
export const updateProfileAPI = async ({ email, username }) => {
  const token = getUserFromStorage();
  const response = await axios.put(
    `${API_BASE_URL}/users/update-profile`,
    { email, username },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return response.data;
};
