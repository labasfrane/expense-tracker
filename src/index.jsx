import React from "react";
import ReactDOM from "react-dom/client";
import App from "views/App";
import ErrorPage from "components/ErrorPage";
import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";

import "./style.scss";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
