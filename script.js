"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		removeItem() {
			let [str, elem] = this.string.split(' ');
			let arr = str.split('');
			let start = arr.slice();

			let end = arr.filter(item => item !== elem);

			this.results.push({start, end});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
