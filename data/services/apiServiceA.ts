import axios from "axios";

export const ApiService = axios.create({
  baseURL: "http://127.0.0.1:7000",
  headers: {
    "Content-Type": "application/json",
  },
});
