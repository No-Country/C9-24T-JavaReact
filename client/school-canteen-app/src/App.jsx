import React from "react";
import "./App.css";
import { RouteController } from "./router/RouteController.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RouteController />
    </BrowserRouter>
  );
}

export default App;
