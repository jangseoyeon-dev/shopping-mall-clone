import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

function DetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  // 사이즈 및 컬러 선택 시 css
  const [choiceSize, setChoiceSize] = useState("");
  const [choiceColor, setChoiceColor] = useState("");

  const getProduct = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2">
        <img src={product?.img} alt={product?.title} />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="my-[40px] lg:mt-[100px] mx-auto w-4/5">
          <h2 className="text-[22px] font-bold justify-center items-center">
            {product?.title}
          </h2>
          <div className="text-[20px] mb-5">
            {product?.price && `₩${product?.price}`}
          </div>
          <div className="text-1xl mb-5">{product?.content}</div>
          <div className="text-[15px]">{product?.description}</div>
          <div className="border-t border-gray-300 my-5">
            <p className="my-5 text-[12px]">사이즈</p>
            {product?.size.map((item) => (
              <button
                key={item}
                className={`p-2 border rounded-3xl w-[100px] text-[12px] mr-2 ${
                  choiceSize === item ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setChoiceSize(item)}
              >
                {item}
              </button>
            ))}
          </div>
          {product?.color && (
            <>
              <div className="border-t border-gray-300 my-5">
                <p className="my-5 text-[12px]">컬러</p>
                <div className="flex gap-3">
                  {product?.color.map((item) => (
                    <div
                      key={item}
                      className={`flex items-center justify-center border w-[20px] h-[20px] rounded-[50%] ${
                        choiceColor === item
                          ? "border-black"
                          : "border-gray-300"
                      }`}
                      onClick={() => setChoiceColor(item)}
                    >
                      <img
                        src={
                          item == "Black"
                            ? "https://web-resource.tamburins.com/color/a54dff0f-c5c7-41c0-9842-af7560dcaaac/black.png"
                            : "https://web-resource.tamburins.com/white/075e57a1-10be-4071-9b17-fe1ee0d5b03e/white.png"
                        }
                        alt={item}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          <button className="w-full p-2 rounded-[5px] bg-black text-white">
            쇼핑백에 추가
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
