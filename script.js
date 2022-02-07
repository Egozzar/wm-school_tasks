"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		compareNumbers() {
			let arr = this.string.split('');
			let start = arr.map(item => +item);

			let end = arr.sort((a, b) => b - a).map(item => +item);
			this.results.push({start, end});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
