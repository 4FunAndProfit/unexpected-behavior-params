import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route('unexpected', "routes/_index.tsx"),
  route(":id", "routes/product.tsx"),
] satisfies RouteConfig;
