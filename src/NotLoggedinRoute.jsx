import React from "react";
import { Navigate, Route } from "react-router-dom";
import { withUser } from "./WithProvider";

const NotLoggedinRoute = ({ user, children }) => {
  if (user) {
    return <Navigate to="/" />;
  }
  return children;
};
export default withUser(NotLoggedinRoute);
