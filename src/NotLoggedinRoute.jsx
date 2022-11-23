import React from "react";
import { Navigate, Route } from "react-router-dom";
import WithUser from "./WithUser";

const NotLoggedinRoute = ({ user, children }) => {
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default WithUser(NotLoggedinRoute);
