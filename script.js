"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		getLast() {
			let [start, length = 1] = this.string.split(' ');
			length = +length;
			let end = start.slice(-length);

			this.results.push({start, end});
			this.string = '';
		}
	}
});

const vm = app.mount('#app');
