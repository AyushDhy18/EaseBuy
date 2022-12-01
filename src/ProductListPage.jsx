import React from "react";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Nomatching from "./Nomatching";
import { getProductList } from "./api";
import { FcSearch } from "react-icons/fc";
import Loading from "./Loading";
import { useCallback } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import { range } from "lodash";

const ProductListPage = () => {
  const [productList, setProductList] = useState();
  const [loading, setLoading] = useState(true);
  // const [query, SetQuery] = useState("");
  // const [sort, setSort] = useState("default");

  let [searchParams, setSearchParams] = useSearchParams();

  const params = Object.fromEntries([...searchParams]);
  let { query, sort, page } = params;

  query = query || "";
  sort = sort || "default";
  page = +page || 1;

  const HandleChange = (event) => {
    setSearchParams(
      { ...params, query: event.target.value, page: 1 },
      { replace: false }
    );
  };

  const handleSortChange = (event) => {
    setSearchParams(
      { ...params, sort: event.target.value },
      { replace: false }
    );
  };

  useEffect(() => {
    let sortBy;
    let sortType;
    if (sort == "name") {
      sortBy = "title";
    } else if (sort == "lowToHigh") {
      sortBy = "price";
    } else if (sort == "highToLow") {
      sortBy = "price";
      sortType = "desc";
    }
    getProductList(sortBy, query, page, sortType).then((productlist) => {
      setProductList(productlist);
      setLoading(false);
    });
  }, [sort, query, page]);

  if (loading) return <Loading />;

  return (
    <>
      <div className="p-6 my-5 bg-blue-200 md:mx-52 border-2 shadow-lg shadow-blue-300 ">
        <div className="flex md:flex-row flex-col">
          <div className="flex">
            <FcSearch className="text-2xl" />
            <input
              value={query}
              placeholder="Search"
              className="border border-blue-300 w-60"
              onChange={HandleChange}
            />
          </div>
          <span className="flex md:w-1/2"></span>
          <div>
            <select
              className="border rounded-md border-cyan-200 w-56"
              onChange={handleSortChange}
            >
              <option value="default"> Default sort</option>
              <option value="name"> Sort by title</option>
              <option value="lowToHigh"> Price low - high</option>
              <option value="highToLow"> Price high - low</option>
            </select>
          </div>
        </div>

        <div>
          {productList.data.length > 0 && (
            <ProductList saman={productList.data} />
          )}
          {productList.data.length == 0 && (
            <Nomatching>No Matching products😢.....</Nomatching>
          )}
          {productList.data.length == 2 && (
            <Nomatching>
              Try searching something else for more Products 👩‍💻.....
            </Nomatching>
          )}
          {range(1, productList.meta.last_page + 1).map((item) => (
            <Link
              className={
                "rounded-md border-2 px-4 py-1 text-white font-bold mt-7 mx-1 shadow-lg border-red-500 " +
                (item == page ? " bg-blue-400 " : " bg-red-500")
              }
              key={item}
              to={"?" + new URLSearchParams({ ...params, page: item })}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
