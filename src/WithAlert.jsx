import React from "react";
import { useContext } from "react";
import { alertContext } from "./App";

const WithAlert = (IncomingComponent) => {
  const OutgoingComponent = (props) => {
    const { alert, setAlert, RemoveAlert } = useContext(alertContext);
    return (
      <IncomingComponent
        {...props}
        alert={alert}
        setAlert={setAlert}
        RemoveAlert={RemoveAlert}
      />
    );
  };
  return OutgoingComponent;
};
export default WithAlert;
