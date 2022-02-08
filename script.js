"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		generateNumbers() {
			let [elem, length] = this.string.split(' ');
			elem = +elem;
			let start = `Начальный элемент: ${elem}, количество: ${+length}шт `;

			let end = Array.from({length}, () => elem++);

			this.results.push({start, end});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
