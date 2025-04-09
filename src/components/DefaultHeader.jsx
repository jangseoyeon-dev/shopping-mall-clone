import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBucket, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";

const navItems = [
  "BOTTARI",
  "PERFUME",
  "HAND&LIP",
  "BODY",
  "HOME FRAGRANCE",
  "STORE",
];

function DefaultHeader() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-between p-4 fixed top-0 left-0 right-0 text-black bg-white">
        <div className="flex">
          <div className="noto-serif text-4xl" onClick={() => navigate("/")}>
            TAMBURINS
          </div>
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li
                key={item}
                className="text-[20px] pl-10 hover:underline"
                onClick={() => navigate(`/product`)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-8 ">
          <div className="border border-black p-3 w-[300px] rounded-lg">
            <FontAwesomeIcon icon={faSearch} />
            <input
              className="pl-1 outline-none"
              placeholder="보타리를 검색해보세요."
            />
          </div>
          <FontAwesomeIcon
            className="hover:cursor-pointer"
            icon={faUser}
            size="1.5xl"
            onClick={() => {
              navigate("/login");
            }}
          />
          <FontAwesomeIcon icon={faBucket} size="1.5xl" />
        </div>
      </div>
    </>
  );
}

export default DefaultHeader;
