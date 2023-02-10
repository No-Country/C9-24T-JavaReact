import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import Description from "../component/pages/DescriptionVew";

import ProductView from "../component/pages/ProductView";

function RouteController() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/description" element={<Description />} />
      <Route path="/product" element={<ProductView />} />
    </Routes>
  );
}

export { RouteController };
