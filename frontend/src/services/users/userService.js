import axios from "axios";
// import { import.meta.env.VITE_REACT_APP_BACKEND_URL } from "../../utils/url";
import { getUserFromStorage } from "../../utils/getUserFromStorage";

// Get the token
const token = getUserFromStorage();

// Fetch user profile
export const getUserProfileAPI = async () => {
  const response = await axios.get(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/users/profile`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Login
export const loginAPI = async ({ email, password }) => {
  const response = await axios.post(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/users/login`,
    {
      email,
      password,
    }
  );
  return response.data;
};

// Register
export const registerAPI = async ({ email, password, username }) => {
  const response = await axios.post(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/users/register`,
    {
      email,
      password,
      username,
    }
  );
  return response.data;
};

// Change password
export const changePasswordAPI = async (newPassword) => {
  const response = await axios.put(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/users/change-password`,
    { newPassword },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

// Update profile
export const updateProfileAPI = async ({ email, username }) => {
  const response = await axios.put(
    `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/users/update-profile`,
    { email, username },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};
