import React from "react";
import CreateIssue from "./CreateIssue";

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-end items-center ">
        <CreateIssue />
      </div>
    </div>
  );
};

export default Dashboard;
