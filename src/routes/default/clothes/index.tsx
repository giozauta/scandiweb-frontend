import { Route } from "react-router-dom";
import { DEFAULT_LAYOUT_PATHS } from "../index.enum";
import Clothes from "@/pages/clothes";

export const CLOTHES_PAGE_ROUTES = [
  <Route
    key={DEFAULT_LAYOUT_PATHS.CLOTHES}
    path={DEFAULT_LAYOUT_PATHS.CLOTHES}
    element={<Clothes />}
  />,
];
