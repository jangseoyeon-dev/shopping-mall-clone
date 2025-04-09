import { createBrowserRouter } from "react-router";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";
import ProductPage from "../page/ProductPage";
import DetailPage from "../page/DetailPage";
import HomeLayout from "../layout/HomeLayout";
import DefaultLayout from "../layout/DefaultLayout";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/login", element: <LoginPage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/product/:id", element: <PrivateRoute /> },
    ],
  },
]);
export default router;
