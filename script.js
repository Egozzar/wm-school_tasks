"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		concatOrigin() {
			let [arr1, arr2] = this.string.split(' ')
				.map(item => item.split('').map(item => +item));

			let end = new Set([...arr1, ...arr2]);
			this.results.push({start: `[${arr1}] + [${arr2}]`, end: [...end]});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
