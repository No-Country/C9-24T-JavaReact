import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../component/Home";

function RouteController() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export { RouteController };
