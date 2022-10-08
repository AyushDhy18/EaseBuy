import React from "react";
import ProductListPage from "./ProductListPage";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";
import NavBar from "./NavBar";
import NotFound from "./NotFound";
import { useState } from "react";
import { stringify } from "postcss";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import ForgotPassword from "./ForgotPassword";

function App() {
  const savedDataString = localStorage.getItem("cart-item");
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData || {});
  const path = window.location.pathname;

  const handelAddToCart = (productId, count) => {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);

    const cartString = JSON.stringify(newCart);
    localStorage.setItem("cart-item", cartString);
  };

  const totalCount = Object.keys(cart).reduce((previous, current) => {
    return previous + cart[current];
  }, 0);

  return (
    <>
      <div className="p-2 bg-blue-100 h-screen overflow-scroll flex flex-col">
        <NavBar cartItems={totalCount} />
        <div className="grow">
          <Routes>
            <Route index element={<ProductListPage />} />
            <Route
              path="/product/:id"
              element={<ProductDetail onAddToCart={handelAddToCart} />}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/Products/cart" element={<CartPage />} />
            <Route path="/My-Account/Login" element={<LoginPage />} />
            <Route path="/My-Account/SignUp" element={<SignUpPage />} />
            <Route
              path="/My-Account/Forgot-password"
              element={<ForgotPassword />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default App;
