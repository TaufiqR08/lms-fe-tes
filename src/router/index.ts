import { createRouter, createWebHistory } from 'vue-router'

import AppLayout from '../layouts/AppLayout.vue'
import AssignmentsView from '../views/AssignmentsView.vue'
import CoursesView from '../views/CoursesView.vue'
import DashboardView from '../views/DashboardView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', redirect: '/dashboard' },
        { path: 'dashboard', name: 'dashboard', component: DashboardView },
        { path: 'courses', name: 'courses', component: CoursesView },
        { path: 'assignments', name: 'assignments', component: AssignmentsView },
        { path: 'profile', name: 'profile', component: ProfileView },
      ],
    },
    { path: '/:pathMatch(.*)*', redirect: '/dashboard' },
  ],
})

export default router
