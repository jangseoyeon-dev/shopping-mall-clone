import DefaultHeader from "../components/DefaultHeader";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import { useState } from "react";

export default function DefaultLayout() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <DefaultHeader />
      <div className="mt-[100px]">
        <Outlet context={{ isLogin, setIsLogin }} />
      </div>
      <Footer />
    </>
  );
}
