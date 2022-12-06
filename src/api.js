import axios from "axios";

export function getProductData(id) {
  return axios
    .get("https://myeasykart.codeyogi.io/product/" + id)
    .then(function (response) {
      return response.data;
    });
}

export function getProductsByIds(ids) {
  const CommaSeperatedIds = ids.join();
  return axios
    .get("https://myeasykart.codeyogi.io/products/bulk", {
      params: {
        ids: CommaSeperatedIds,
      },
    })
    .then(function (response) {
      return response.data;
    });
}

export function getProductList(sort, query, page, sortType) {
  let params = {};

  if (sort) {
    params.sortBy = sort;
  }

  if (sortType) {
    params.sortType = sortType;
  }

  if (query) {
    params.search = query;
  }

  if (page) {
    params.page = page;
  }

  return axios
    .get("https://myeasykart.codeyogi.io/products", {
      params: { sortBy: sort, search: query, page: page, sortType: sortType },
    })
    .then(function (response) {
      return response.data;
    });
}

export function saveCart(cart) {
  return axios
    .post(
      "https://myeasykart.codeyogi.io/carts",
      { data: cart },
      {
        headers: { Authorization: localStorage.getItem("token") },
      }
    )
    .then((response) => {
      return response.data;
    });
}

export function getCart(cart) {
  return axios
    .get("https://myeasykart.codeyogi.io/carts", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((response) => {
      return response.data;
    });
}
