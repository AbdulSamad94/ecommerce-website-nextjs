"use client";
import React, { useEffect } from "react";
const page = () => {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/20")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);
  return <div>page</div>;
};

export default page;
