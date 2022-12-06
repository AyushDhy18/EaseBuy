import React, { useEffect, useState } from "react";
import { getProductData } from "./api";
import { MdCancel } from "react-icons/md";
import Input from "./Input";
import Loading from "./Loading";

const CartRow = ({ product, quantity, onQuantityChange, onRemove }) => {
  const handleChange = (event) => {
    onQuantityChange(product.id, +event.target.value);
  };

  const handleCrossClick = () => {
    onRemove(product.id);
  };

  return (
    <>
      <div
        key={product.id}
        className="p-3 flex items-center border-2 justify-between bg-blue-200 space-x-6"
      >
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-16 h-16"
        ></img>
        <h1 className="text-center font-bold grow">{product.title}</h1>
        <h2 className=" text-left font-bold w-20">Rs. {product.price}</h2>
        <div className="w-20">
          <input
            productid={product.id}
            value={quantity}
            type="number"
            className="px-1 py-1 w-12 sm:text-sm border-2 rounded-lg text-center border-cyan-600 focus:outline-none "
            onChange={handleChange}
          ></input>
        </div>
        <h2 className=" font-bold w-20 text-left">
          Rs. {product.price * quantity}
        </h2>

        <button onClick={handleCrossClick}>
          <MdCancel className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default CartRow;
