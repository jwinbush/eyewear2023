import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/Home";
import "./index.css";
import { motion as m } from "framer-motion";

ReactDOM.render(
  <React.StrictMode>
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <Home />
    </m.div>
  </React.StrictMode>,
  document.getElementById("root")
);
