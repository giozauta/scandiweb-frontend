import Pdp from "@/pages/pdp";
import { Route } from "react-router-dom";
import { DEFAULT_LAYOUT_PATHS } from "../index.enum";

export const PDP_PAGE_ROUTES = [
  <Route
    key={DEFAULT_LAYOUT_PATHS.PDP}
    path={DEFAULT_LAYOUT_PATHS.PDP}
    element={<Pdp />}
  />,
];
