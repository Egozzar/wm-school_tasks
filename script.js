"use strict";

const app = Vue.createApp({
	data() {
		return {
			sum: 7,
			start: [0, 1, 2, 3, 4, 5, 6, 7],
			results: [],
		}
	},
	methods: {
		preparing() {
			let clone = this.start.slice();

			while (clone.length > 1) {
				let item = clone.shift();
				let item2 = clone.find(elem => elem + item === this.sum);

				if (item2) {
					let newElement = `${item} : ${item2}`;
					this.results.push(newElement);
					clone = clone.filter(elem => elem !== item && elem !== item2);
				}
			}
			this.results = this.results.length ? this.results : `Слагаемые не найдены`;
		},
	},
});

const vm = app.mount('#app');
