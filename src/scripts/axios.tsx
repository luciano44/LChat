import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:3001/",
});

export default axiosApi;
