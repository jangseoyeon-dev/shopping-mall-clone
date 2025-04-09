import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative">
      <img
        src="https://web-resource.tamburins.com/mainbanner/02690f61-04ff-49a3-b45b-ef10d36960b0/pc_main_banner_full_bottari.jpg"
        className="w-full h-[600px] lg:h-[810px] object-cover"
        alt="main banner"
      />
      <button
        className="absolute bottom-0 left-0 text-2xl text-white z-10 p-4 "
        onClick={() => navigate("/product")}
      >
        BOTTARI
        <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
      </button>
    </div>
  );
};

export default HomePage;
