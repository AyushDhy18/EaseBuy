import React, { useState } from "react";
import { useEffect } from "react";
import { object } from "yup";
import { getCart, getProductsByIds, saveCart } from "../api";
import { cartContext } from "../Contexts";
import { withUser } from "../WithProvider";

const CartProvider = ({ children, isLoggedIn }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      getCart().then((savedCart) => {
        setCart(savedCart);
      });
    } else {
      const savedDataString = localStorage.getItem("cart-item") || "{}";
      const savedData = JSON.parse(savedDataString);
      quantityMapToCart(savedData);
    }
  }, [isLoggedIn]);

  const path = window.location.pathname;

  function quantityMapToCart(quantityMap) {
    getProductsByIds(Object.keys(quantityMap)).then((products) => {
      const savedCart = products.map((p) => ({
        product: p,
        quantity: quantityMap[p.id],
      }));
      setCart(savedCart);
    });
  }

  const addToCart = (productId, count) => {
    const quantityMap = cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );
    const oldCount = quantityMap[productId] || 0;

    const newCart = { ...quantityMap, [productId]: oldCount + count };
    updateCart(newCart);
  };

  const updateCart = (quantityMap) => {
    if (isLoggedIn) {
      saveCart(quantityMap).then((response) => {
        quantityMapToCart(quantityMap);
      });
    } else {
      const quantityMapString = JSON.stringify(quantityMap);
      localStorage.setItem("cart-item", quantityMapString);
      quantityMapToCart(quantityMap);
    }
  };
  console.log("cart is", cart);
  const cartCount = cart.reduce(function (previous, current) {
    return previous + current.quantity;
  }, 0);

  return (
    <>
      <cartContext.Provider value={{ cart, updateCart, cartCount, addToCart }}>
        {children}
      </cartContext.Provider>
    </>
  );
};
export default withUser(CartProvider);
