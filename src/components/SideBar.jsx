import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";

function SideBar({ items, setShowSideBar }) {
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
      <ul className="p-5">
        {items.map((item) => (
          <li
            key={item}
            className="text-1xl border-b border-gray-300 p-6"
            onClick={() => navigate("/product")}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideBar;
