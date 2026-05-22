import axios from "axios";

export const axiosData = axios.create({
  baseURL: "https://blogapp-iv79.onrender.com",
  withCredentials: true,
});