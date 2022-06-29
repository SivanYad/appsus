import keepApp from './pages/keep-app.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import booksApp from './pages/books-app.cmp.js'
import homePage from './pages/home-page.cmp.js'


const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: emailApp
    },
    // {
    //     path: '/book',
    //     component: bookApp
    // },
    {
        path: '/keep',
        component: keepApp
    },

]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})