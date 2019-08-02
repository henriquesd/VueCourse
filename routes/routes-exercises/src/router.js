import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'

// import User from './components/user/User'
// import UserList from './components/user/UserList'
// import UserDetail from './components/user/UserDetail'
// import UserEdit from './components/user/UserEdit'

Vue.use(Router)

// const User = () => import('./components/user/User')
// const UserList = () => import('./components/user/UserList')
// const UserDetail = () => import('./components/user/UserDetail')
// const UserEdit = () => import('./components/user/UserEdit')

const User = () => import(/* webpackChunkName: "user" */ './components/user/User')
const UserList = () => import(/* webpackChunkName: "user" */ './components/user/UserList')
const UserDetail = () => import(/* webpackChunkName: "user" */ './components/user/UserDetail')
const UserEdit = () => import(/* webpackChunkName: "user" */ './components/user/UserEdit')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else if (to.hash) {
            return { selector: to.hash }
        } else { 
            return { x: 0, y: 0 }
        }
    },
    routes: [{
        name: 'home',
        path: '/',
        // component: Home
        components: {
            default: Home,
            menu: Menu
        }
    }, {
        path: '/user',
        // component: User,
        components: {
            default: User,
            menu: MenuAlt,
            menuBottom: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UserList },
            { path: ':id', component: UserDetail, props: true,
                beforeEnter: (to, from, next) => {
                    console.log('before route -> user detail')
                    next()
                }  },
            { path: ':id/edit', component: UserEdit, props: true,
                name: 'editUser' },
        ]
    }, {
        path: '/redirect',
        redirect: '/user'
    }, {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log('before routes -> global')
    next()
})

export default router