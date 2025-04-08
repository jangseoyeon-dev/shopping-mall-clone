import React from "react";
import { Outlet } from "react-router";

function LoginPage() {
  return (
    <div>
      <p>LoginPage</p>
      <Outlet />
    </div>
  );
}

export default LoginPage;
