import ReactDOM from "react-dom";
import { MiModal } from "../../MiModal";

export function Modal({ open }) {
  return ReactDOM.createPortal(
    <MiModal open={open} />,
    document.getElementById("modal")
  );
}
