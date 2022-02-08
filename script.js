"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		arrayFilled() {
			let [length, elem] = this.string.split(' ');
			let start = `Элемент: ${elem}, количество: ${+length}шт `;
			let end = Array.from({length}, () => +elem);

			this.results.push({start, end});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
