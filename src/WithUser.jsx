import React from "react";
import { useContext } from "react";
import { userContext } from "./App";

const WithUser = (IncomingComponent) => {
  const OutgoingComponent = (props) => {
    const { user, setUser } = useContext(userContext);
    return <IncomingComponent {...props} user={user} setUser={setUser} />;
  };
  return OutgoingComponent;
};
export default WithUser;
