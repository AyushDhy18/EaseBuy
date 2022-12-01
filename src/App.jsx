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
import Loading from "./Loading";
import LoggedinRoute from "./LoggedinRoute";
import NotLoggedinRoute from "./NotLoggedinRoute";
import { createContext } from "react";
import Alerts from "./Alerts";

import UserProvider from "./Providers/UserProvider";
import AlertProvider from "./Providers/AlertProvider";

export const userContext = createContext();
export const alertContext = createContext();

function App() {
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

  return (
    <>
      <UserProvider>
        <AlertProvider>
          <Alerts />
          <div className="p-2 bg-blue-100 h-screen overflow-scroll flex flex-col">
            <NavBar cartItems={totalCount} setCart={setCart} />
            <div className="grow">
              <Routes>
                <Route
                  index
                  element={
                    <LoggedinRoute>
                      <ProductListPage />
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
        </AlertProvider>
      </UserProvider>
    </>
  );
}
export default App;
