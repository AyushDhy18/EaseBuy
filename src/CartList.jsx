import React, { useEffect, useState } from "react";
import CartRow from "./CartRow";

const CartList = ({ products, cart, updateCart }) => {
  const [localCart, setLocalcart] = useState(cart);

  useEffect(() => {
    setLocalcart(cart);
  }, [cart]);

  const handleQuantityChange = (productId, newValue) => {
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalcart(newLocalCart);
  };

  const handleUpdateCart = () => {
    updateCart(localCart);
  };

  const handleRemove = (productId) => {
    const newCart = { ...cart };
    delete newCart[productId];
    updateCart(newCart);
  };

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
        {products.map((p) => {
          return (
            <>
              <CartRow
                product={p}
                quantity={localCart[p.id]}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemove}
              ></CartRow>
            </>
          );
        })}
      </div>
      <button
        className="w-36 h-9 text-sm rounded-lg border-2 bg-red-500 px-3 py-2 text-white font-bold"
        onClick={handleUpdateCart}
      >
        UPDATE CART
      </button>
    </>
  );
};

export default CartList;
