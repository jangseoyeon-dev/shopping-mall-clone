import React from "react";
import { Navigate, useOutletContext } from "react-router";
import DetailPage from "../page/DetailPage";

const PrivateRoute = () => {
  const { isLogin } = useOutletContext();
  return <>{isLogin ? <DetailPage /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
