import { Navigate } from "react-router-dom";

const GuardedRoute = ({ children }: any) => {
  if (localStorage.Token) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default GuardedRoute;
