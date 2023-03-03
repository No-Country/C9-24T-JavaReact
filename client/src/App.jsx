import { RouteController } from "./router/RouteController.jsx";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  return (
    <BrowserRouter>
      <RouteController />
    </BrowserRouter>
  );
}

export default App;
