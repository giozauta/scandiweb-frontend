import All from "@/pages/all";
import { Route } from "react-router-dom";
import { DEFAULT_LAYOUT_PATHS } from "../index.enum";

export const ALL_PAGE_ROUTES = [
  <Route
    key={DEFAULT_LAYOUT_PATHS.ALL}
    path={DEFAULT_LAYOUT_PATHS.ALL}
    element={<All />}
  />,
];
