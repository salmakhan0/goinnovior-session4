import { type RouteConfig, index, layout } from "@react-router/dev/routes";

export default [
    layout("layout/Mainlayout.tsx", [
    index("routes/home.tsx"),
    ]),
 ] satisfies RouteConfig;
