import axios from "axios";

export function getProductData(id) {
  return axios
    .get("https://dummyjson.com/products/" + id)
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

export function sendUserData() {}
