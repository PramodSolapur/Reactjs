import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" />; // you must return Navigate Component
  }
  return children;
};

export default ProtectedRoute;
