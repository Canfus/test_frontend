import axios from "axios";

export const customInstance = axios.create({
  baseURL: import.meta.env.VITE_DADATA_URL,
  headers: {
    Authorization: "Token b40af16b5fee198f6f7e8cb55a877172242830ab",
  },
});
