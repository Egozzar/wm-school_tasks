"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		sumOfSquares() {
			let arr = this.string.split('');
			let start = arr.map(item => +item);

			let end = arr.reduce((sum, val) => {
				return sum + val * val;
			}, 0);
			this.results.push({start, end});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
