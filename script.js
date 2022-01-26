"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		shuffle() {
			let [start, length = 1] = this.string.split(' ');
			let end = start.slice(0, +length);

			this.results.push({start, end});
			this.string = '';
		}
	}
});

const vm = app.mount('#app');
