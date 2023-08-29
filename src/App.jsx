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
import CartProvider from "./Providers/CartProvider";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Alerts />
            <div className="p-2 bg-blue-100 h-screen overflow-scroll flex flex-col">
              <NavBar />
              <div className="grow">
                <Routes>
                  <Route
                    index
                    element={
                 
                        <ProductListPage />
                    
                    }
                  />
                  <Route
                    path="/product/:id"
                    element={
                     
                        <ProductDetail />
                   
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                  <Route
                    path="/Products/cart"
                    element={
                     
                        <CartPage />
                     
                    }
                  />
                  <Route
                    path="/My-Account/Login"
                    element={
                     
                        <LoginPage />
                      
                    }
                  />
                  <Route
                    path="/My-Account/SignUp"
                    element={
                      
                        <SignUpPage />
                     
                    }
                  />
                  <Route
                    path="/My-Account/Forgot-password"
                    element={
                      
                        <ForgotPassword />
                      
                    }
                  />
                </Routes>
              </div>
              <Footer />
            </div>
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </>
  );
}
export default App;
