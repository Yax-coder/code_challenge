import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./abstracts/index.scss";

const container = document.getElementById("root");
// const root = ReactDOM.hydrateRoot(document.getElementById("root"));

const root = createRoot(container);
root.render(<App />);
