import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {RouterProvider} from "react-router-dom";
import Router from "./routes/Router";
import AuthProvider from "./context/AuthProvider";
import BrandProvider from "./context/BrandProvider";
import ProductProvider from "./context/ProductProvider";
import UserProductProvider from "./context/UserProductProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <BrandProvider>
        <ProductProvider>
          <UserProductProvider>
            <RouterProvider router={Router} />
          </UserProductProvider>
        </ProductProvider>
      </BrandProvider>
    </AuthProvider>
  </React.StrictMode>
);
