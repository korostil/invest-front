import Vue from 'vue';
import VueRouter from 'vue-router';
import Share from "@/components/Share";
import Home from "@/views/Home";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: '/share/:ticker',
            name: 'share',
            component: Share
        },
        {
            path: '',
            component: Home
        }
    ]
})