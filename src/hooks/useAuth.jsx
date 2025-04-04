import { useContext } from "react";
import { AuthContext } from "../contextApi/AuthenticationContext";

const useAuth = () => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
