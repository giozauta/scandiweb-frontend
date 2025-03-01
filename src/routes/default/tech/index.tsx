import { Route } from "react-router-dom";
import { DEFAULT_LAYOUT_PATHS } from "../index.enum";
import Tech from "@/pages/tech";

export const TECH_PAGE_ROUTES = [
  <Route
    key={DEFAULT_LAYOUT_PATHS.TECH}
    path={DEFAULT_LAYOUT_PATHS.TECH}
    element={<Tech />}
  />,
];
