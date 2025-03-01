import DefaultLayout from "@/layouts/default";

import React from "react";
import { Route, Routes } from "react-router-dom";
import { DEFAULT_LAYOUT_ROUTES } from "./default";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>{DEFAULT_LAYOUT_ROUTES}</Route>
    </Routes>
  );
};

export default AppRoutes;
