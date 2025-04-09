import React from "react";
import { useNavigate } from "react-router";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const getProductDetail = () => {
    navigate(`/product/${product?.id}`);
  };
  return (
    <div className="mb-3 ml-2" onClick={getProductDetail}>
      <img src={product?.img} />
      <div className="hover:scale-105">
        <div className="mt-2 text-xs text-pink-500 font-semibold">
          {product?.choice && "Choice"}
        </div>
        <div className="font-bold mt-2">{product?.title}</div>
        <div className="text-sm text-neutral-400 mt-2">{product?.content}</div>
        <div className="mt-2">
          {product?.price ? `₩${product?.price}` : product?.info}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
