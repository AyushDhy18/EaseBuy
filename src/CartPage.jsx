import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import Loading from "./Loading";
import CartList from "./CartList";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import Nomatching from "./Nomatching";

const CartPage = ({ cart, updateCart }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const productIds = Object.keys(cart);
    setLoading(true);
    const myProductPromises = productIds.map((id) => {
      return getProductData(id);
    });

    Promise.all(myProductPromises).then((products) => {
      setProduct(products);
      setLoading(false);
    });
  }, [cart]);

  // const updateMyCart = () => {
  //   updateCart(localCart);
  // };

  if (loading) {
    return <Loading />;
  }

  if (products == 0) {
    return (
      <div className="p-4 my-2 text-5xl h-screen text-center text-teal-600 md:mt-40">
        No products yet...
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="flex flex-col items-start">
          <Link to={"/"}>
            <FcHome className="text-4xl" />
          </Link>
        </div>

        <div className=" md:mx-52 flex flex-col items-end ">
          <div className="bg-blue-200 w-full border-2 shadow-lg shadow-blue-300">
            <div>
              <CartList
                products={products}
                cart={cart}
                updateCart={updateCart}
              ></CartList>
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

              <button className="w-36 h-9 text-sm rounded-lg border-2 bg-red-500 px-3 py-2 text-white font-bold">
                UPDATE CART
              </button>
            </div>
          </div>
          <div className="bg-blue-200 mt-8 w-1/2 flex flex-col">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
