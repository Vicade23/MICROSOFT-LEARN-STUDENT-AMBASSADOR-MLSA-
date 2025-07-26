import React from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  isAuthenticated: boolean;
};

const ProtectedRoute = ({ children, isAuthenticated }: Props) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
