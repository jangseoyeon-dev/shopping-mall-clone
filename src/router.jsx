import { createBrowserRouter } from "react-router";
import HomePage from "./page/HomePage";
import LoginPage from "./page/LoginPage";
import ProductPage from "./page/ProductPage";
import DetailPage from "./page/DetailPage";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/product", element: <ProductPage /> },
      { path: "/product/:id", element: <DetailPage /> },
    ],
  },
]);
export default router;
