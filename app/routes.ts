import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  
  layout("routes/layout.tsx", [
    index("routes/home.tsx"),
    layout("routes/tab-a.layout.tsx", prefix("tab-a", [
      index("routes/tab-a.tsx"),
      route("sub-a", "routes/tab-a.sub-a.tsx"),
    ])),
    route("tab-b", "routes/tab-b.tsx"),
    route("tab-c", "routes/tab-c.tsx"),
  ]),
] satisfies RouteConfig;
