import Header from "@/components/header";
import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout: React.FC = () => {
  return (
    <div className="w-[80%] mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
