import { RouteController } from "./router/RouteController.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <RouteController />
    </BrowserRouter>
  );
}

export default App;
