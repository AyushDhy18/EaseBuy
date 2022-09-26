import React from "react";
import CartList from "./CartList";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <>
      <div>
        <div className="flex flex-col items-start">
          <Link to={"/"}>
            <FcHome className="text-4xl" />
          </Link>
        </div>

        <div className="p-6 flex items-center gap-20 md:mx-52 border-2 space-x-6">
          <span className="w-64"></span>
          <h1 className="text-center font-bold">Product</h1>
          <span className="w-1"></span>
          <h1 className="text-center font-bold">Price</h1>
          <h1 className="text-center font-bold">quantity</h1>
          <h1 className="text-center font-bold">SubTotal</h1>
        </div>
        <div>
          <CartList></CartList>
        </div>
      </div>
    </>
  );
}

export default CartPage;
