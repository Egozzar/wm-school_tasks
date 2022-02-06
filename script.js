"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		expand() {
			let arr = this.string.split('')
				.map(item => Array.from({0: +item,
					1: Array.from({0: ++item, length:1}), length:2}));

			let start = this.copyDeep(arr);
			let end = this.recurs(arr);
			this.results.push({start, end});
			this.string = '';
		},
		copyDeep(arr) {
			let clone = [];
			arr.forEach((item, ind) => {
				if (Array.isArray(item)) {
					clone[ind] = this.copyDeep(item);
				} else {
					clone[ind] = item;
				}
			});
			return clone;
		},
		recurs(arr) {
			let clone = [];

			for (let i = 0; i < arr.length; i++) {
				if (arr[i].fill) {
					clone = clone.concat( this.recurs(arr[i]) );
				} else {
					clone.push(arr[i]);
				}
			}
			return clone;
		}
	}
});

const vm = app.mount('#app');
