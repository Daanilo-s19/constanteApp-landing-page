import axios from "axios";

const api = axios.create({
  baseURL: "https://api.constante.app"
});

export default api;
