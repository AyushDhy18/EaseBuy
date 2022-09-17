import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProductData } from "./api";
import Loading from "./Loading";
import { FcPrevious, FcNext, FcHome } from "react-icons/fc";
import NotFound from "./NotFound";

function ProductDetail({ onAddToCart }) {
  const id = +useParams().id;
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(
    function () {
      const Promise = getProductData(id);
      Promise.then(function (product) {
        setProduct(product);
        setLoading(false);
      }).catch(function () {
        setLoading(false);
      });
    },
    [id]
  );

  function handleCountChange(event) {
    setCount(+event.target.value);
  }
  function handleAddToCartChange() {
    onAddToCart(id, count);
    setCount(1);
  }

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <div className="p-6 bg-blue-200 md:mx-52 border-2 shadow-lg shadow-blue-300 my-5">
        <Link to={"/"}>
          <FcHome className="text-4xl" />
        </Link>
        <div className="flex gap-x-9 my-9 mx-12 p-10 max-h-full grow">
          <div className="overflow-hidden max-h-96">
            <img src={product.thumbnail} />
          </div>
          <div className="flex-col">
            <h1 className="font-sans text-gray-400">{product.category}...</h1>
            <h1 className="text-4xl font-semibold font-sans text-slate-800">
              {product.title}
            </h1>
            <h1 className="text-md font-semibold font-sans text-slate-600">
              {product.brand}
            </h1>
            <h3 className="text-sm font-sans text-red-500 mt-6">
              At {product.discountPercentage}% off
            </h3>
            <h2 className="text-3xl font-semibold font-sans text-slate-800">
              Rs. {product.price}
            </h2>

            <p className="text-lg text-slate-800">{product.description}</p>
            <input
              className="border-2 pl-2 w-12"
              type="number"
              value={count}
              onChange={handleCountChange}
            />

            <button
              className="rounded-lg border-2 bg-red-500 px-11 py-2 text-white font-bold mt-7"
              onClick={handleAddToCartChange}
            >
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div>
            {id > 1 && (
              <Link to={"/product/" + (id - 1)}>
                <FcPrevious className="text-4xl" /> Previous
              </Link>
            )}
          </div>
          <div>
            <Link to={"/product/" + (id + 1)}>
              <FcNext className="text-4xl" /> Next
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetail;
