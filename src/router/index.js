import { createWebHistory, createRouter } from 'vue-router';
import Home from '@/components/Home.vue';
import Moto from '@/components/Moto.vue';
import Motorcycles from '@/components/Motorcycles.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/moto',
    name: 'Moto',
    component: Moto,
    meta: {
      title: 'Moto'
    }
  },
  {
    path: '/motorcycles',
    name: 'Motorcycles',
    component: Motorcycles,
    meta: {
      title: 'Motorcycles'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = to.meta.title
  if (title) {
    document.title = title
  }
  next()
})

export default router;
