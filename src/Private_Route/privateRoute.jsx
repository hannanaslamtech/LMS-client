import React from "react";
import { Navigate} from "react-router-dom";

const AdminRoute = ({ children, requiredRole }) => {
  // const navigate = useNavigate();
  const currentRole = localStorage.getItem("role");
  // const user = localStorage.getItem("user");
  if (requiredRole.includes(currentRole)) {
    return children;
  } else {
    return <Navigate to="" />;
  }
}

export default AdminRoute;