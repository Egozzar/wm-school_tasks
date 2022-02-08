"use strict";

const app = Vue.createApp({
	data() {
		return {
			start: [2, 3, 5, 7, 11, 13, 17, 19],
			results: [],
		}
	},
	methods: {
		preparing() {
			this.start.reduce((sum, val) => {
				this.results.push(sum);
				return sum + val;
			});
		},
	},
});

const vm = app.mount('#app');
