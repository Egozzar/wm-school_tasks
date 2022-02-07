"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		findCouple() {
			let [str, num] = this.string.split(' ');
			let arr = str.split('').map(item => +item);
			let cloneArr = arr.slice();
			let start = `Массив: [${cloneArr}], сумма: ${num}  `
			let res = [];

			while (arr.length > 1) {
				let item = arr.shift();
				let item2 = arr.find(elem => elem + item === +num);
				if (item2) res.push(`${item}+${item2}`);
				arr = arr.filter(elem => elem !== item && elem !== item2);
			}
			let end = res.length ? res.join(' ; ') : 'слагаемые не найдены.';

			this.results.push({start, end});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
