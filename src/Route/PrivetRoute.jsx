import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  return <Navigate to="/registration" state={location?.pathname}></Navigate>;
};

export default PrivetRoute;
