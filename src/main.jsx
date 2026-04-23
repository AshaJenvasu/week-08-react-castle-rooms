import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MessageProvider from "./contexts/messageContext/MessageProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </StrictMode>,
);
