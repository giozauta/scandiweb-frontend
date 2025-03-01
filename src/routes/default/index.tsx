import { CLOTHES_PAGE_ROUTES } from "./clothes";
import { TECH_PAGE_ROUTES } from "./tech";
import { PDP_PAGE_ROUTES } from "./Pdp";
import { ALL_PAGE_ROUTES } from "./all";

export const DEFAULT_LAYOUT_ROUTES = [
  ...ALL_PAGE_ROUTES,
  ...TECH_PAGE_ROUTES,
  ...CLOTHES_PAGE_ROUTES,
  ...PDP_PAGE_ROUTES,
];
