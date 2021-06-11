import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Signup from "./views/Signup";
import Contact from "./views/Contact";


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
        path: "/signup",
        name: "Signup",
        component: Signup,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
