import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function ProductPage() {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = "http://localhost:4000/products";
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="pb-50 grid grid-cols-3">
      {productList.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
}
export default ProductPage;
