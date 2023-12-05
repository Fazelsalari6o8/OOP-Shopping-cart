"use strict";

const fetchData = async () => {
  const res = await fetch("/src/data.json");
  const json = await res.json();
  return json;
};

export default fetchData;
