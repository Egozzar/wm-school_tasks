"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		getRandom() {
			let arr = this.string.split(',');
			let start = arr.slice();
			let indRandom = Math.floor(Math.random() * arr.length);
			let end = arr[indRandom];

			this.results.push({start, end});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
