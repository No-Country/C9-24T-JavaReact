import ReactDOM from "react-dom";
import { MiModal } from "../../MiModal";

export function Modal() {
  return ReactDOM.createPortal(<MiModal />, document.getElementById("modal"));
}
