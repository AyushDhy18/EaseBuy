import React from "react";
import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import Nomatching from "./Nomatching";
import { getProductList } from "./api";
import { FcSearch } from "react-icons/fc";
import Loading from "./Loading";

function ProductListPage() {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [query, SetQuery] = useState("");
  const [sort, setSort] = useState("default");

  useEffect(function () {
    const Promise = getProductList();
    Promise.then(function (productlist) {
      setProductList(productlist);
      setLoading(false);
    });
  }, []);

  let data = productList.filter(function (item) {
    return item.title.toLowerCase().indexOf(query.toLowerCase()) != -1;
  });

  function HandleChange(event) {
    let newQuery = event.target.value;

    SetQuery(newQuery);
  }
  function handleSortChange(event) {
    let Sort = event.target.value;
    setSort(Sort);
  }
  if (sort == "lowToHigh") {
    data.sort(function (x, y) {
      return x.price - y.price;
    });
  } else if (sort == "highToLow") {
    data.sort(function (x, y) {
      return y.price - x.price;
    });
  } else if (sort == "name") {
    data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;
    });
  }
  if (loading) return <Loading />;

  return (
    <>
      <div className="p-6 bg-blue-200 md:mx-52 border-2 shadow-lg shadow-blue-300 my-5">
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
          {data.length > 0 && <ProductList saman={data} />}
          {data.length == 0 && (
            <Nomatching>No Matching products😢.....</Nomatching>
          )}
          {data.length == 2 && (
            <Nomatching>
              Try searching something else for more Products 👩‍💻.....
            </Nomatching>
          )}
        </div>
      </div>
    </>
  );
}

export default ProductListPage;
