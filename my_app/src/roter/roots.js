import Vue from 'vue'
import VueRrot from 'vue-router';
import LoginPage from '../components/containers/LoginPage';
import JobsPage from '../components/containers/JobsPage';



Vue.use(VueRrot);

const router = new VueRrot({
    routes: [{
        path: '/',
        name: 'login',
        component: LoginPage
      },
      {
        path: '/jobs',
        name: 'jobs',
        component: JobsPage
      }
  
    ]
  })
  export default router;