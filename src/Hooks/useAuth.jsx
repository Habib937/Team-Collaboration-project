import { useContext } from "react";
import AuthContext from "../Firebase/AuthContext";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;
