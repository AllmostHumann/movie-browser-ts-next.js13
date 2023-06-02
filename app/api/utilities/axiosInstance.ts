import axios from "axios";
import { apiBaseUrl, apiKey, apiLanguage } from "../config/apiRoutes";

const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
  params: {
    api_key: apiKey,
    language: apiLanguage,
  },
});

export { axiosInstance };
