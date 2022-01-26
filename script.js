"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		removeDuplicates() {
			let start = this.string.split('');
			let startLow = start.map(item=> {
				return item.toLowerCase();
			});
			let end = [...new Set(startLow)];

			this.results.push({start, end});
			this.string = '';
		}
	}
});

const vm = app.mount('#app');
