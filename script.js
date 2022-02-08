"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		generateRange() {
			let [start, end] = this.string.split(',').map(item => +item);
			let [first, last] = [start, end];
			let exp = `Начальный элемент: ${first}, конечный элемент: ${last}`;

			let res = (start <= end) ? Array.from({length: end - start + 1}, () => start++) :
				                       `Нереальный массив`;

			this.results.push({exp, res});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
