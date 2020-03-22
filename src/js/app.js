try {
	require('bootstrap');
}
catch (e) {
	console.error(e)
}

let pages = [];
for(let i = 2; i <= 7; i++) {
	pages.push({
		path: '/' + i,
		name: i,
		component: () => import('./pages/Page' + i)
	})
}

const routes = [
	{
		path: '/',
		name: '1',
		component: () => import('./pages/Home')
	},
].concat(pages);

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

