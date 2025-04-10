import React from "react";
import { Navigate } from "react-router";
import DetailPage from "../page/DetailPage";
import { useOutletContext } from "react-router";

const PrivateRoute = () => {
  const { isLogin } = useOutletContext();
  return <>{isLogin ? <DetailPage /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
