import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import { Navigate } from "react-router";

// For GET requests
axios.interceptors.request.use(
  (req: any) => {
    req.headers.authorization = localStorage.Token;
    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// For POST requests
axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.type === "400") {
      return <Navigate to="/login" />;
    }
    throw err;
  }
);

ReactDOM.render(<App />, document.getElementById("root"));
