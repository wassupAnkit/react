import axios from "axios";

export const BASE_URL = "http://localhost:5000/";

export const API_URL = `${BASE_URL}api/`;

export const AXIOS = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const AXIOS_AUTH = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});
