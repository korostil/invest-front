const ShareList = () => import("@/components/ShareList")
const Share = () => import("@/components/Share")
const Home = () => import("@/views/Home")

const routes = [
    {
            path: '/share',
            component: ShareList,
            name: 'share',
            children: [
                {
                    path: '/share/:ticker',
                    name: 'share',
                    component: Share,
                    props: true,
                }
            ]
        },
        {
            path: '',
            component: Home
        },
        {
            path: "/page-not-found",
            alias: '*',
            component: { render: (h) => h("div", ["404! Page Not Found!"]) },
        },
];

export default routes;
