"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		arrayDiff() {
			let [arr1, arr2] = this.string.split(' ')
				.map(item => item.split(''));
			let [start1, start2] = [arr1, arr2].map(item => item.slice());
			let end = new Set();

			while (arr1.length) {
				let item = arr1.pop();
				if (arr2.includes(item)) {
					arr2 = arr2.filter(elem => elem !== item);
					arr1 = arr1.filter(elem => elem !== item);
				} else {
					end.add(item);
				}
			}

			if (arr2.length) {
				arr2.forEach(item => end.add(item));
			}
			this.results.push({start: `[${start1}] - [${start2}]`, end: [...end]});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
