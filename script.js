"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		creating() {
			if (this.string === '') return;
			let end = [];

			for (let i = 0; i < this.string.length; i++) {
				end.push(this.string.substring(i - 1, i + 2));
			}
			this.results.push({start: this.string, end});
			this.string = '';
		}
	},
});

const vm = app.mount('#app');
