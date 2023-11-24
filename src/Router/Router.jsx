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
import UserAnnouncements from "../Dashboard/UserProfile/UserAnnouncements";
import AdminProfile from "../Dashboard/Admin/AdminProfile/AdminProfile";
import ManageMembers from "../Dashboard/Admin/ManageMembers/ManageMembers";
import MakeAnnouncement from "../Dashboard/Admin/MakeAnnouncement/MakeAnnouncement";
import AgreementRequests from "../Dashboard/Admin/AgreementRequests/AgreementRequests";
import MemberProfile from "../Dashboard/member/MemberProfile/MemberProfile";
import Makepayment from "../Dashboard/member/Makepayment/Makepayment";
import PaymentHistory from "../Dashboard/member/PaymentHistory/PaymentHistory";
import ManageCoupons from "../Dashboard/Admin/ManageCoupons/ManageCoupons";

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
    element: (
      <PrivateRoute>
        <Maindashbord />
      </PrivateRoute>
    ),
    children: [
      {
        path: "userProfile",
        element: <UserProfile />,
      },
      {
        path: "UserAnnouncements",
        element: <UserAnnouncements />,
      },
      // admin route
      {
        path: "adminProfile",
        element: <AdminProfile />,
      },
      {
        path: "manageMembers",
        element: <ManageMembers />,
      },
      {
        path: "makeAnnouncement",
        element: <MakeAnnouncement />,
      },
      {
        path: "agreementRequests",
        element: <AgreementRequests />,
      },
      {
        path: "ManageCoupons",
        element: <ManageCoupons />,
      },
      // member route
      {
        path: "MemberProfile",
        element: <MemberProfile />,
      },
      {
        path: "Makepayment",
        element: <Makepayment />,
      },
      {
        path: "PaymentHistory",
        element: <PaymentHistory />,
      },
    ],
  },
]);
export default router;
