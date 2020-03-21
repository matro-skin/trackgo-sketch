try {
	require('bootstrap');
}
catch (e) {
	console.error(e)
}

// let drawer = {
//     toggle: document.querySelector('.drawer-toggle'),
//     backdrop: document.querySelector('.drawer-backdrop')
// };
//
// drawer.toggle.addEventListener('click',function() {
//     document.body.classList.add('drawer-opened');
// });
// drawer.backdrop.addEventListener('click',function () {
//     document.body.classList.remove('drawer-opened');
// });
//
// document.querySelectorAll('.show-map').forEach(function (el, i) {
//     el.addEventListener('click', function (e) {
//         e.preventDefault();
//         let container = e.target.closest('.delivery-item');
//         container.classList.toggle('map-opened');
//     });
// });

const routes = [
	{
		path: '/',
		component: () => import('./pages/Home')
	},
	{
		path: '/foo',
		// component: Foo
	},
	{
		path: '/bar',
		// component: Bar
	}
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
