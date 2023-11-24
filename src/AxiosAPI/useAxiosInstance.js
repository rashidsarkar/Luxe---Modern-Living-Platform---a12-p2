import axios from "axios";
// Import useEffect from React
import { useNavigate } from "react-router-dom"; // Import useNavigate from the appropriate package
import useAuthProvider from "../FireBase/useAuthProvider";

const axiosInstanceSecure = axios.create({
  baseURL: "http://localhost:5000", // Your API base URL
  // baseURL: "http://localhost:5000", //> Your API base URL
});

function useAxiosInstanceSecure() {
  const { logOut } = useAuthProvider();
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
      const status = error.response.status;
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
