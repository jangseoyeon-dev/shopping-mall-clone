import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SideBar({ items, setShowSideBar }) {
  const search = (event) => {
    if (event.key === "Enter") {
      navigate(`/product/?q=${event.target.value}`);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="text-black absolute z-30 bg-white h-screen w-full ">
      <div className="flex justify-end p-3.5">
        <FontAwesomeIcon
          icon={faX}
          onClick={() => {
            setShowSideBar(false);
          }}
        />
      </div>
      <div className="flex items-center bg-gray-100 mx-10 ">
        <FontAwesomeIcon icon={faSearch} className="ml-5" />
        <input
          className="w-full p-3 outline-none"
          type="text"
          placeholder="Search..."
          onKeyPress={(event) => {
            search(event);
            setShowSideBar(false);
          }}
        />
      </div>
      <ul className="p-5">
        {items.map((item) => (
          <li
            key={item}
            className="text-1xl border-b border-gray-300 p-6"
            onClick={() => {
              setShowSideBar(false);
              navigate("/product");
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
