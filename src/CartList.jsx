import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";
import { withCart } from "./WithProvider";

const CartList = ({ cart, updateCart }) => {
  const [quantityMap, setQuantityMap] = useState();

  const cartToQuantityMap = () =>
    cart.reduce(
      (m, cartItem) => ({ ...m, [cartItem.product.id]: cartItem.quantity }),
      {}
    );

  useEffect(() => {
    setQuantityMap(cartToQuantityMap());
  }, [cart]);

  const handleQuantityChange = (productId, newValue) => {
    const newQuantityMap = { ...quantityMap, [productId]: newValue };
    setQuantityMap(newQuantityMap);
  };

  const handleUpdateCart = () => {
    updateCart(quantityMap);
  };

  const handleRemove = (productId) => {
    const newQuantityMap = cartToQuantityMap();
    delete newQuantityMap[productId];
    updateCart(newQuantityMap);
  };
  // if (products == 0) {
  //   return (
  //     <div className="p-4 my-2 text-5xl h-screen text-center text-teal-600 md:mt-40">
  //       No products yet...
  //     </div>
  //   );
  // }

  return (
    <>
      <div>
        <div className="py-3 pl-3 pr-16 flex items-center justify-between space-x-6">
          <span className="w-16"></span>
          <h1 className="text-center font-bold grow">Product</h1>
          <h1 className="text-left w-20 font-bold">Price</h1>
          <h1 className="text-left font-bold w-20">quantity</h1>
          <h1 className="text-left w-20 font-bold mr-10">SubTotal</h1>
        </div>
        {cart.map((cartItem) => {
          return (
            <>
              <CartRow
                key={cartItem.product.id}
                product={cartItem.product}
                quantity={quantityMap[cartItem.product.id] || cartItem.quantity}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              ></CartRow>
            </>
          );
        })}
      </div>
      <div className="flex justify-end">
        <button
          className="w-36 h-9 mt-2 text-sm rounded-lg border-2 bg-red-500 px-3 py-2 text-white font-bold"
          onClick={handleUpdateCart}
        >
          UPDATE CART
        </button>
      </div>
    </>
  );
};

export default withCart(CartList);
