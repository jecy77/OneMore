import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import Mypage from "./pages/MyPage.jsx";
import Sell from "./pages/Sell.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import BoardDetail from "./components/BoardDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "board/:id",
        element: <BoardDetail />,
      },
      {
        path: "mypage",
        element: <Mypage />,
      },
      {
        path: "sell",
        element: <Sell />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
