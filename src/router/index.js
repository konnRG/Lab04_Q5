import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EventDetailView from '../views/events/EventDetailView.vue'
import EventAirlineView from '../views/events/EventAirlineView.vue'
import EventLayout from '../views/events/EventLayout.vue'
import NotFoundPage from '../views/PageNotFound.vue'
import ResourceNotFound from '../views/ResourceNotFound.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/passenger/:id',
    name: 'EventLayout',
    component: EventLayout,
    props: true,
    children: [
      {
        path: '',
        name: 'EventDetailView',
        component: EventDetailView,
        props: true
      },
      {
        path: 'airline',
        name: 'EventAirlineView',
        component: EventAirlineView,
        props: true
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundPage
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: ResourceNotFound,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
