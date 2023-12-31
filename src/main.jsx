import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Router } from "./Router/Router";
import { RouterProvider } from "react-router-dom";

const router = Router();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
