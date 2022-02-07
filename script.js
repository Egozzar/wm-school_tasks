"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		sumMul() {
			let arr = this.string.split('').map(item => +item);

			let start = arr.slice();
			let sum = arr.reduce((sum, val) => sum + val, 0);
			let mul = arr.length ? arr.reduce((mul, val) => mul * val) : 0;

			this.results.push({start, end: `sum = ${sum}, mul = ${mul}`});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
