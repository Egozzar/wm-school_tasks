"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		sumArr() {
			let [arr1, arr2] = this.string.split(' ')
				.map(item => item.split(''));
			let long = arr1.length > arr2.length ? arr1 : arr2;
			let short = arr1 === long ? arr2 : arr1;
			let res = long.map((item, i) => {

				return (short[i] === undefined) ? +item : +item + +short[i];
			});
			this.results.push({start: `[${long}] + [${short}] `, end: res});
			this.string = '';
		}
	}
});

const vm = app.mount('#app');
