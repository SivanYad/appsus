import bookApp from "./cmps/book-app.js";
import homePage from "./cmps/home-page.cmp.js";
import aboutPage from "./cmps/about-page.cmp.js";
import bookDetails from "./cmps/book-details.cmp.js"

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },

]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})