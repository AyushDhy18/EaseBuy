import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import { MdCancel } from "react-icons/md";
import Input from "./Input";
import Loading from "./Loading";

const CartRow = ({ cart, updateCart }) => {
  const [loading, setLoading] = useState(true);
  const productIds = Object.keys(cart);
  const [products, setProduct] = useState([]);
  const [localCart, setLocalcart] = useState(cart);

  useEffect(() => {
    setLocalcart(cart);
  }, [cart]);

  useEffect(() => {
    const myProductPromises = productIds.map((id) => {
      return getProductData(id);
    });

    Promise.all(myProductPromises).then((products) => {
      setProduct(products);
      setLoading(false);
    });
  }, [cart]);

  const handleRemove = (event) => {
    const productId = event.currentTarget.getAttribute("productid");
    const newCart = { ...cart };
    delete newCart[productId];
    updateCart(newCart);
    setLoading(true);
  };

  const updateMyCart = () => {
    updateCart(localCart);
  };

  const handleChange = (event) => {
    const newValue = +event.target.value;
    const productId = event.target.getAttribute("productid");
    const newLocalCart = { ...localCart, [productId]: newValue };
    setLocalcart(newLocalCart);
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {products.map((p) => {
        return (
          <>
            <div
              key={p.id}
              className="p-3 grid grid-flow-col items-center border-2 justify-between bg-blue-200 space-x-6"
            >
              <img src={p.thumbnail} alt={p.title} className="w-16 h-16"></img>
              <h1 className="text-center font-bold">{p.title}</h1>
              <h2 className="text-center font-bold">{p.price}</h2>
              <input
                productid={p.id}
                value={localCart[p.id]}
                type="number"
                onChange={handleChange}
                className="px-1 py-1 w-12 sm:text-sm border-2 rounded-lg text-center border-cyan-600 focus:outline-none "
              ></input>
              <h2 className="text-center font-bold">
                {p.price * localCart[p.id]}
              </h2>

              <button onClick={handleRemove} productid={p.id}>
                <MdCancel className="text-xl" />
              </button>
            </div>
          </>
        );
      })}
      <button onClick={updateMyCart}>update Cart</button>
    </div>
  );
};

export default CartRow;
