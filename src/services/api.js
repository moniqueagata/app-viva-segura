
import axios from "axios";

const api = axios.create({
  baseURL: "http://10.67.4.174:8000/api",
});

export default api;