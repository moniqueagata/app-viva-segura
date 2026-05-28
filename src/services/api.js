import axios from "axios";

const BASE_URL = "http://192.168.1.14:8000/api"; // <- alterar o ip 

export const api = axios.create({
  baseURL: BASE_URL,
});
 
