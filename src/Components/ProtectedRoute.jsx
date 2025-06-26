// src/Components/ProtectedRoute.jsx
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { userName } = useContext(AuthContext);

  // If not logged in, redirect to /login
  if (!userName) {
    return <Navigate to="/login" replace />;
  }

  // If logged in, render the component
  return children;
};

export default ProtectedRoute;
