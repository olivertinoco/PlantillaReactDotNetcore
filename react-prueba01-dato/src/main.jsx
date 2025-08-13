import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import BaseInput from "./components/BaseInput";

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <BaseInput />
    SEPARA
    <App />
    <BaseInput />
  </>,
);
