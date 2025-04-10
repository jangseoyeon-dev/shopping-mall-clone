import { createBrowserRouter } from "react-router";
import App from "../App";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";
import ProductPage from "../page/ProductPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/product/:id", element: <PrivateRoute /> },
    ],
  },
]);
export default router;
