import axios from "axios";

export const api = axios.create({
  baseURL: "https://money-tracker-q1n6.onrender.com",
});
