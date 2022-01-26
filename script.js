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
			let args = this.string.split('');
			args.sort(() => Math.random() - 0.5);

			let end = args.join('');
			this.results.push({start: this.string, end});
			this.string = '';
		}
	}
});

const vm = app.mount('#app');
