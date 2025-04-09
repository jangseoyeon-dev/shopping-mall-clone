import HomeHeader from "../components/HomeHeader";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function HomeLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <Footer />
    </>
  );
}
