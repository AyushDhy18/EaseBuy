import React from "react";
import CartRow from "./CartRow";

const CartList = () => {
  return (
    <>
      <div>
        <div className="p-6 flex items-center gap-20">
          <span className="w-64"></span>
          <h1 className="text-center font-bold">Product</h1>
          <h1 className="text-center font-bold">Price</h1>
          <h1 className="text-center font-bold">quantity</h1>
          <h1 className="text-center font-bold">SubTotal</h1>
        </div>
        <CartRow></CartRow>
        <CartRow></CartRow>
      </div>
    </>
  );
};

export default CartList;
