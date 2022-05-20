import axios from "axios";

const url = `${process.env.REACT_APP_BACKEND_URL}` || "http://localhost:3001/";

// const url = "http://localhost:3001/";

const axiosApi = axios.create({
  baseURL: url,
});

export default axiosApi;
