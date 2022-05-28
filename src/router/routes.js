const routes = [
  {
    path: "/share",
    component: () => import("@/views/Shares"),
    name: "list of shares"
  },
  {
    path: "/share/:ticker",
    name: "share",
    component: () => import("@/components/Share"),
    props: true
  },
  {
    path: "/share/comparison",
    name: "share comparison",
    props: true
  },
  {
    path: "/page-not-found",
    alias: "*",
    component: { render: h => h("div", ["404! Page Not Found!"]) }
  }
];

export default routes;
