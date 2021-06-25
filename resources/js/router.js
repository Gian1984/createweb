import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Messagesent from "./views/Messagesent";


const routes = [


    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/messagesent",
        name: "Messagesent",
        component: Messagesent,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
