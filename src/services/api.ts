import axios from "axios";

const makeRequest = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  }
})

// apiClient.interceptors.request.use((config) => {
//   const id = localStorage.getItem("id");
//   if (id) {
//     config.headers.Authorization = `${id}`;
//   }
//   return config;
// });

export default makeRequest