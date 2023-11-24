import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";

import Login from "../Pages/Account/Login";
import SignUp from "../Pages/Account/SignUp";

import NotFound from "../Pages/NotFound ";
import Home from "../Pages/Home/Home";
// import About from "../Components/About";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Apartment from "../Pages/Apartment/Apartment";
import Maindashbord from "../Dashboard/Maindashbord/Maindashbord";
import UserProfile from "../Dashboard/UserProfile/UserProfile";
import UserDashbord from "../Dashboard/UserProfile/UserDashbord";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/apartment",
        element: <Apartment />,
      },
      // {
      //   path: "/about",
      //   element: (
      //     <PrivateRoute>
      //       <About></About>,
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      ///dasg bord
    ],
  },
  //dashbord
  {
    path: "/dashboard",
    element: <Maindashbord />,
    children: [
      {
        path: "userProfile",
        element: <UserProfile />,
      },
      {
        path: "userDashbord",
        element: <UserDashbord />,
      },
    ],
  },
]);
export default router;
