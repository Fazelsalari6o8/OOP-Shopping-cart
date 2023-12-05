"use strict";

import fetchData from "./asset/utilities/httpReq.js";

async function render() {
  const productsData = await fetchData();
  console.log(productsData);
}

document.addEventListener("DOMContentLoaded", render);
