"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		countIdentic() {
			let arr = this.string.split('');
			let start = arr.map(item => +item);
			let set = new Set();

			while (arr.length) {
				let item = arr.pop();
				if (arr.includes(item)) set.add(+item);
			}
			let res = set.size;
			this.results.push({start, end: ` повторяющихся элементов - ${res}шт: [${[...set]}]`})
			this.string = '';
		}
	}
});

const vm = app.mount('#app');
