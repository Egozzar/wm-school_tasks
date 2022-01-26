"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			result: '',
		}
	},
	methods: {
		chooseYears() {
			let [start, end] = this.string.split(' ');
			start = +start;
			end = +end;
			let res = [];

			for (let i = start; i <= end; i++) {
				let date = new Date(i, 2, 0);

				if (date.getDate() === 29) {
					res.push(i);
				}
			}

			this.result = res.join(', ');
			this.string = '';
		}
	}
});

const vm = app.mount('#app');
