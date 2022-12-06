import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../Loading";
import { userContext } from "../Contexts";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [userLoading, setUserLoading] = useState(true);

  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      axios
        .get("https://myeasykart.codeyogi.io/me", {
          headers: { Authorization: token },
        })
        .then((response) => {
          setUser(response.data);
          setUserLoading(false);
        })
        .catch(() => {
          localStorage.removeItem("token");
          setUserLoading(false);
        });
    } else {
      setUserLoading(false);
    }
  }, []);

  if (userLoading) {
    return <Loading />;
  }
  return (
    <userContext.Provider value={{ isLoggedIn: !!token, user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
export default UserProvider;
