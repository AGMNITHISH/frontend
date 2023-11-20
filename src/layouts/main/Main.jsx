import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../contents/Dashboard";
import CommentView from "../../contents/CommentView";

const Main = () => {
  return (
    <div>
      <Header />
      <div className=" bg-slate-400 p-4">
        <div className="bg-slate-700 min-h-screen p-4 rounded-lg">
          <Routes>
            <Route path="/*" element={<Dashboard />} />
            <Route path="/commentView" element={<CommentView />} />
          </Routes>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Main;
