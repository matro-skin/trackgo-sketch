// try {
// 	require('bootstrap');
// }
// catch (e) {
// 	console.error(e)
// }

let pages = [];
for(let i = 2; i <= 5; i++) {
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

// let specifiedElements = document.getElementsByClassName('dropdown');
// console.log('specifiedElements', specifiedElements);
//
// for(let el of specifiedElements) {
// 	document.addEventListener('click', function(event) {
// 		var isClickInside = el.contains(event.target);
// 		if (!isClickInside) {
// 			Vue.prototype.$root.$emit('dropdown',false);
// 			//the click was outside the specifiedElement, do something
// 		}
// 	});
// }

// var bsn = require("bootstrap.native");
// let myDropdown = document.getElementById('navbarDropdown');
// console.log('myDropdown', myDropdown);
// var myDropdownInit = new Dropdown( myDropdown );
// console.log(myDropdownInit);
