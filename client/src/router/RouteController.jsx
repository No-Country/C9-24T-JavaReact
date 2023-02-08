import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";
import Description from "../component/DescriptionProduct";

function RouteController() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/description" element={<Description />} />
    </Routes>
  );
}

export { RouteController };
