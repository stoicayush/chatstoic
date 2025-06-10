import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://chatstoic.onrender.com/api"; // your production backend URL

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});
