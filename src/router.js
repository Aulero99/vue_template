import { createRouter, createWebHashHistory } from 'vue-router'
// import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

function importPages(){
    
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/cards',
    name: 'Cards',
    component: loadPage('CardsPage')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: loadPage('NotFound')
  },
  {
    path: '/:pathMatch(.*)',
    name: 'Bad Not Found',
    component: loadPage('NotFound')
  }
  //   {
//     path: '/profile/:id',
//     name: 'Profile',
//     component: loadPage('ProfilePage')
//   },
//   {
//     path: '/account',
//     name: 'Account',
//     component: loadPage('AccountPage'),
//     beforeEnter: authGuard
//   },
//   {
//     path: '/vault/:id',
//     name: 'Vault',
//     component: loadPage('VaultPage')
//   }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
