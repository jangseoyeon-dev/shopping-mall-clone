import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faBucket, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import SideBar from "./SideBar";

const navItems = [
  "BOTTARI",
  "PERFUME",
  "HAND&LIP",
  "BODY",
  "HOME FRAGRANCE",
  "STORE",
];

function HomeHeader() {
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between max-w-screen p-4 px-5 fixed top-0 left-0 right-0 text-white z-10">
        <div className="flex items-center">
          <div
            className="noto-serif text-4xl pr-10"
            onClick={() => navigate(`/`)}
          >
            TAMBURINS
          </div>
          <ul className="hidden lg:flex items-center justify-center">
            {navItems.map((item) => (
              <li
                key={item}
                className="text-[20px] pr-10 hover:underline"
                onClick={() => navigate(`/product`)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-8 ">
          <div className="hidden xl:block border border-white p-3 w-[300px] rounded-lg">
            <FontAwesomeIcon icon={faSearch} />
            <input
              className="pl-1 outline-none bg-transparent text-white"
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
          <div className="block lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                setShowSideBar(!showSideBar);
              }}
            />
          </div>
        </div>
      </div>
      {showSideBar && (
        <SideBar items={navItems} setShowSideBar={setShowSideBar} />
      )}
    </>
  );
}

export default HomeHeader;
