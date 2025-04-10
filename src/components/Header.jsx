import React, { useEffect, useState } from "react";
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

function Header({ isHome, isLogin, setIsLogin }) {
  const navigate = useNavigate();
  const [showSideBar, setShowSideBar] = useState(false);

  const search = (event) => {
    if (event.key === "Enter") {
      navigate(`/product/?q=${event.target.value}`);
    }
  };

  const Logout = () => {
    return <button onClick={() => setIsLogin(false)}>로그아웃</button>;
  };

  useEffect(() => {}, [isLogin]);
  return (
    <>
      <div
        className={`flex items-center justify-between max-w-screen p-2 px-5 sm:px-10 fixed top-0 left-0 right-0 z-10 ${
          isHome ? "text-white bg-transparent" : "text-black bg-white"
        }`}
      >
        <div className="flex items-center">
          <div
            className="noto-serif text-3xl pr-10 sm:text-4xl"
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
        <div className="flex items-center gap-4 ">
          <div
            className={`hidden xl:block border  p-3 w-[250px] rounded-lg ${
              isHome ? "text-white border-white" : "text-black border-black"
            }`}
          >
            <FontAwesomeIcon icon={faSearch} />
            <input
              className={`pl-1 outline-none text-black`}
              placeholder="보타리를 검색해보세요."
              onKeyPress={(e) => search(e)}
            />
          </div>
          <div className="flex items-center justify-center gap-2 hover:cursor-pointer">
            <FontAwesomeIcon
              className="hover:cursor-pointer"
              icon={faUser}
              size="1.5xl"
              onClick={() => {
                navigate("/login");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
            {isLogin ? <Logout /> : "로그인"}
          </div>
          <FontAwesomeIcon icon={faBucket} size="1.5xl" />
          <div className="block lg:hidden">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                setShowSideBar(!showSideBar);
                window.scrollTo({ top: 0, behavior: "smooth" });
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

export default Header;
