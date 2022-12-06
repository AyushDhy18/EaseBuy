import React from "react";

import CartList from "./CartList";

const CartPage = () => {
  return (
    <>
      <div>
        <div className=" md:mx-52 flex flex-col items-end ">
          <div className="bg-blue-200 w-full border-2 shadow-lg shadow-blue-300">
            <div>
              <CartList></CartList>
            </div>

            <div className="flex justify-between p-2">
              <div>
                <input
                  type="text"
                  placeholder=" Coupon code "
                  className="w-36 border-2 border-slate-400 rounded-md h-7"
                />
                <button className="w-36 h-9  text-sm rounded-lg border-2 bg-red-500 px-3 py-2 text-white font-bold">
                  APPLY COUPON
                </button>
              </div>
            </div>
          </div>
          {/* <div className="bg-blue-200 mt-8 w-1/2 flex flex-col">
            <h1 className="font-bold p-2">Cart totals</h1>

            <div className="flex border-2 p-2 items-start">
              <h2 className="w-1/2">Subtotals</h2>
              <h2>$ 90</h2>
            </div>

            <div className="flex border-2 p-2 items-start">
              <h2 className="w-1/2">Totals</h2>
              <h2>$ 90</h2>
            </div>

            <button className="text-center py-3 border-2 bg-red-500 text-white self-stretch">
              PROCEED TO CHECKOUT
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CartPage;
