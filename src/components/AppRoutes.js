import React from "react";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Report from "./Report";
import { Route, Routes } from "react-router-dom";
import { router_data } from "./route_data";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/report" element={<Report />} />

      {/* <Route path="/" element={<Home />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="report" element={<Report />} />
      </Route> */}
    </Routes>
  );
};

export default AppRoutes;
