/* eslint-disable react/prop-types */
import { useContext } from "react";
import CustomLoading from "../Components/CustomLoading";

import { AuthContext } from "../FireBase/AuthProvider";

import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

function AdminRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  const { adminLoading, isAdmin } = useAdmin();
  console.log();

  if (adminLoading || loading)
    return (
      <div className="w-24 mx-auto loadd">
        <CustomLoading></CustomLoading>
      </div>
    );

  if (user & isAdmin) return children;
  return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
}

export default AdminRoute;
