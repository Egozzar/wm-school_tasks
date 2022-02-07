"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		filterFalse() {
			let arr = this.string.split('').map(item => +item);

			let start = arr.slice();
			let end = arr.filter(item => item);

			this.results.push({start, end});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
