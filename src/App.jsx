import React from "react";
import ProductListPage from "./ProductListPage";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import { useState } from "react";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import ForgotPassword from "./ForgotPassword";
import { useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import LoggedinRoute from "./LoggedinRoute";
import NotLoggedinRoute from "./NotLoggedinRoute";
import { createContext } from "react";
import Alerts from "./Alerts";

export const userContext = createContext();
export const alertContext = createContext();

function App() {
  const [user, setUser] = useState();
  const [alert, setAlert] = useState();
  const RemoveAlert = () => {
    setAlert(undefined);
  };

  const [userLoading, setUserLoading] = useState(true);
  console.log("useris", user);
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
        });
    } else {
      setUserLoading(false);
    }
  }, []);

  const savedDataString = localStorage.getItem("cart-item");
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData || {});
  const path = window.location.pathname;

  const handelAddToCart = (productId, count) => {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  };

  const updateCart = (newCart) => {
    setCart(newCart);

    const cartString = JSON.stringify(newCart);
    localStorage.setItem("cart-item", cartString);
  };

  const totalCount = Object.keys(cart).reduce((previous, current) => {
    return previous + cart[current];
  }, 0);

  if (userLoading) {
    return <Loading />;
  }

  return (
    <>
      <userContext.Provider value={{ user, setUser }}>
        <alertContext.Provider value={{ alert, setAlert, RemoveAlert }}>
          <Alerts />
          <div className="p-2 bg-blue-100 h-screen overflow-scroll flex flex-col">
            <NavBar cartItems={totalCount} />
            <div className="grow">
              <Routes>
                <Route
                  index
                  element={
                    <LoggedinRoute>
                      <ProductListPage setUser={setUser} />
                    </LoggedinRoute>
                  }
                />
                <Route
                  path="/product/:id"
                  element={
                    <LoggedinRoute>
                      <ProductDetail onAddToCart={handelAddToCart} />
                    </LoggedinRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/Products/cart"
                  element={
                    <LoggedinRoute>
                      <CartPage cart={cart} updateCart={updateCart} />
                    </LoggedinRoute>
                  }
                />
                <Route
                  path="/My-Account/Login"
                  element={
                    <NotLoggedinRoute>
                      <LoginPage />
                    </NotLoggedinRoute>
                  }
                />
                <Route
                  path="/My-Account/SignUp"
                  element={
                    <NotLoggedinRoute>
                      <SignUpPage />
                    </NotLoggedinRoute>
                  }
                />
                <Route
                  path="/My-Account/Forgot-password"
                  element={
                    <NotLoggedinRoute>
                      <ForgotPassword />
                    </NotLoggedinRoute>
                  }
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </alertContext.Provider>
      </userContext.Provider>
    </>
  );
}
export default App;
