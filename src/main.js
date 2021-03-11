import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Routes from './routes'
import './assets/tailwind.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(ElementUI);

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
})


Vue.config.productionTip = false

// Filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});

Vue.filter('snippet',function(value){
  return value.slice(0,100) + '...';
});


new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
