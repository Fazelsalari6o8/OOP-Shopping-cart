"use strict";

import Cart from "./asset/models/Cart.js";
import Products from "./asset/models/Products.js";
import fetchData from "./asset/utilities/httpReq.js";

const productsNode = document.getElementById("products");
const cartListNode = document.getElementById("cart-list");
const totalPriceNode = document
  .getElementById("total-price")
  .querySelector("span");

async function render() {
  const productsData = await fetchData();
  const cartInstance = new Cart(cartListNode, totalPriceNode);
  const productsInstance = new Products(
    productsNode,
    productsData,
    cartInstance
  );

  productsInstance.showProducts();
}

document.addEventListener("DOMContentLoaded", render);
