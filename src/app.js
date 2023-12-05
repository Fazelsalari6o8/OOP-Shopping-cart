"use strict";

import Products from "./asset/models/Products.js";
import fetchData from "./asset/utilities/httpReq.js";

const productsNode = document.getElementById("products");

async function render() {
  const productsData = await fetchData();
  const productsInstance = new Products(productsNode, productsData);

  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
