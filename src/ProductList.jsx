import React from "react";
import Product from "./Product";

const ProductList = ({ saman }) => {
  return (
    <>
      <div className="md:grid grid-cols-3 gap-12 space-y-2">
        {saman.map(function (item) {
          return <Product key={item.title} {...item} />;
        })}
      </div>
    </>
  );
};
export default ProductList;
