import React, { useState } from "react";
import { alertContext } from "../App";

const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState();
  const RemoveAlert = () => {
    setAlert(undefined);
  };
  return (
    <>
      <alertContext.Provider value={{ alert, setAlert, RemoveAlert }}>
        {children}
      </alertContext.Provider>
    </>
  );
};
export default AlertProvider;
