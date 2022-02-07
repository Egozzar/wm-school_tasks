"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		ofterElement() {
			let arr = this.string.split('');
			let start = arr.slice();
			let counter = {};

			for (let val of arr) {
				counter[val] = (val in counter) ? counter[val] + 1 : 1;
			}

			let res = [];
			let maxRepeat = 0;

			for (let val of Object.entries(counter)) {
				if (val[1] > maxRepeat) {
					maxRepeat = val[1];
					res = [val];
				} else if (val[1] === maxRepeat) {
					res.push(val);
				}
			}

			let end = res.map(item => item[0]);

			this.results.push({start, end});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
