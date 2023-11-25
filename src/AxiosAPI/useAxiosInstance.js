import axios from "axios";

import { useNavigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const axiosInstanceSecure = axios.create({
  baseURL: "http://localhost:5000", // Your API base URL
  // baseURL: "http://localhost:5000", //> Your API base URL
});

function useAxiosInstanceSecure() {
  const { logOut } = useAuth();
  const navigate = useNavigate();
  axiosInstanceSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  axiosInstanceSecure.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/Login");
      }
      console.log("status error in interceptors", status);
      return Promise.reject(error);
    }
  );

  return axiosInstanceSecure;
}

export default useAxiosInstanceSecure; // Export the function
