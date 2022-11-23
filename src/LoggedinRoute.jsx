import React from "react";
import { Navigate, Route } from "react-router-dom";
import WithUser from "./WithUser";

const LoggedinRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/My-Account/Login" />;
  }
  return children;
};
export default WithUser(LoggedinRoute);
