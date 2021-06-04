import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home";
import About from "./views/About";
import Signup from "./views/Signup";


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
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;