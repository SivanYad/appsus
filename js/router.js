import keepApp from './pages/keep-app.cmp.js'
import emailApp from './pages/email-app.cmp.js'
import booksApp from './pages/books-app.cmp.js'
import homePage from './pages/home-page.cmp.js'
import emailDetails from './apps/mail/pages/email-details.cmp.js'
import noteDetails from './apps/keep/pages/note-details.cmp.js'

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/email',
        component: emailApp,
        children: [
            {
                path: ':emailId',
                component: emailDetails
            }
        ]
    },
    // {
    //     path: '/email/:emailId',
    //     component: emailDetails
    // },
    {
        path: '/keep',
        component: keepApp,
        children:[
            {
                path:':noteId',
                component:noteDetails
            }
        ]
    },

]

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
})