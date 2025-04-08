import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBucket, faSearch } from "@fortawesome/free-solid-svg-icons";

const navItems = [
  "BOTTARI",
  "PERFUME",
  "HAND&LIP",
  "BODY",
  "HOME FRAGRANCE",
  "STORE",
];

function Navbar() {
  return (
    <>
      <div className="flex items-center justify-between p-3 fixed top-0 left-0 right-0 text-white">
        <div className="flex">
          <div className="noto-serif text-4xl">TAMBURINS</div>
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item} className="text-[20px] pl-10 hover:underline">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-8 ">
          <div className="border border-white p-3 w-[300px] rounded-lg">
            <FontAwesomeIcon icon={faSearch} />
            <input
              className="pl-1 outline-none"
              placeholder="보타리를 검색해보세요."
            />
          </div>
          <FontAwesomeIcon icon={faUser} size="1.5xl" />
          <FontAwesomeIcon icon={faBucket} size="1.5xl" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
