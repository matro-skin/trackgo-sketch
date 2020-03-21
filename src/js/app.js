try {
	require('bootstrap');
}
catch (e) {
	console.error(e)
}

const routes = [
	{
		path: '/',
		name: '1',
		component: () => import('./pages/Home')
	},
	{
		path: '/2',
		name: '2',
		component: () => import('./pages/Page2')
	},
];

import Vue from 'vue'
import VueRouter from 'vue-router'

const router = new VueRouter({
	routes
});
Vue.use(VueRouter);

import Layout from './layout/Layout.vue'
Vue.component('Layout', Layout);

new Vue({
	render: h => h(Layout),
	router
}).$mount('#app');
