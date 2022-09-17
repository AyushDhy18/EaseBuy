import React from "react";
import { Link } from "react-router-dom";

function Product({ thumbnail, category, title, price, id }) {
  return (
    <div className="mt-6 p-1 max-w-xs flex flex-col border shadow-lg">
      <div>
        <img className="w-full aspect-square" src={thumbnail} alt={title} />
      </div>
      <h3 className="text-teal-700">{category}</h3>
      <h1 className="text-xl text-blue-900">{title}</h1>
      <h2 className="text-xl text-blue-900">Rs. {price}</h2>
      <Link
        className="bg-blue-300 px-2 border-4 rounded-2xl border-blue-500 self-end"
        to={"/product/" + id}
      >
        view detail.
      </Link>
    </div>
  );
}
export default Product;
