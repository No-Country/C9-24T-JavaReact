import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import Description from "../component/pages/DescriptionVew";
import ProductView from "../component/pages/ProductView";
import CategoryView from "../component/pages/CategoryView";
import CartView from "../component/pages/CartView";
import LoginView from "../component/pages/LoginView";

function RouteController() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/description/:id" element={<Description />} />
      <Route path="/products/:id" element={<ProductView />} />
      <Route path="/category" element={<CategoryView />} />
      <Route path="/cart" element={<CartView />} />
      <Route path="/login" element={<LoginView />} />
    </Routes>
  );
}

export { RouteController };
