import { useContext } from "react";
import CustomLoading from "../Components/CustomLoading";
import ErrorMessage from "../Components/ErrorMessage/ErrorMessage";
import { AuthContext } from "../FireBase/AuthProvider";
import useRole from "../hooks/useRole";
import { Navigate, useLocation } from "react-router-dom";

function AdminRoute({ children }) {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  const { userRole, isLoading, isError, error } = useRole();
  if (isLoading || loading)
    return (
      <div className="w-24 mx-auto loadd">
        <CustomLoading></CustomLoading>
      </div>
    );
  if (isError) return <ErrorMessage error={error}></ErrorMessage>;
  if (user & userRole) return children;
  return <Navigate state={location.pathname} to={"/login"} replace></Navigate>;
}

export default AdminRoute;
