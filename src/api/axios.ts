import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

// - - - Request interceptor (Hapa utainclude tokens, key or anything that has to go together with the request)
api.interceptors.request.use(
  (config) => {
    // - - - You can add auth tokens or other headers hapa
    console.log("Request sent to:", config.url);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// - - - Response interceptor (Hapa unaweza ongeza error handling logic for example unaweza customize error message depending on the status code of the returned error)
api.interceptors.response.use(
  (response) => {
    console.log("Response received from:", response.config.url);
    return response;
  },
  (error) => {
    console.error("API Error:", error);
    if (error.response?.status === 404) {
      console.log("Not found");
    }
    return Promise.reject(error);
  }
);

export default api;
