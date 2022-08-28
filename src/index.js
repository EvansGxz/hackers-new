import { Global } from "@emotion/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { global, reset } from "./styles";
import { createRoot } from "react-dom/client";


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global styles={reset} />
    <Global styles={global} />
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>
);
