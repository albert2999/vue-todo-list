import { createRouter, createWebHistory } from 'vue-router'
import ActivityView from '../views/ActivityView/ActivityView.vue'
import TodoView from '../views/TodoView/TodoView.vue'

const routes = [
  {
    path: '/',
    name: 'activity',
    component: ActivityView
  },
  // {
  //   path: '/detail/',
  //   name: 'detail',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/DetailView.vue')
  // },
  {
    path: '/detail/:id',
    name: 'detail',
    props: true,
    component: TodoView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
