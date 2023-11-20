import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./layouts/login/Login";
import Main from "./layouts/main/Main";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main/*" element={<Main />} />
      </Routes>
    </Router>
  </Provider>
);
