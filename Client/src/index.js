import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const response = await fetch(
  `${process.env.REACT_APP_API_URL}/api/users/login`,
  {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  }
);
