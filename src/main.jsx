import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";          // (for base styles)
import App from "./App";       // THIS expects App.jsx or App.js
import "./App.css";            // (for your portfolio custom styles)

createRoot(document.getElementById("root")).render(<App />);  