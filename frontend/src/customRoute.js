import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/dashboard";
import Leave from "./components/leaves/leave";
import Team from "./components/team/team";
import Login from "./components/login/login";

const CustomRoute = () => {
  return (
    <div className="custom-route-container">
      <Route index path="/" element={<Dashboard />} />
      <Route path="/leaves" element={<Leave />} />
      <Route path="/team" element={<Team />} />
      <Route path="/leave/policy" element={<Login />} />
    </div>
  );
};

export default CustomRoute;
