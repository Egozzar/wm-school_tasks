"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			start: [22, true, 'Жираф', 157, null, 'Crow', [1, 2, 3]],
			results: [],
		}
	},
	methods: {
		moveElement() {
			let [pos, fut] = this.string.split(',').map(item => +item);

			if (pos < 0 || pos > this.start.length - 1 ||
				  fut < 0 || fut > this.start.length - 1) {
				alert('Значения позиций должны быть в диапазоне \nпрепарируемого массива, т.е. 0 >= позиция <= 6');
				this.string = '';
				return;
			}

			let clone = this.start.slice();
			let elem = clone.splice(pos, 1)[0];
			clone.splice(fut, 0, elem);

			this.results.push({exp: `Элемент ${elem} с позиции ${pos} на позицию ${fut}`,
			                   res: clone});
			this.string = '';
		},
	}
});

const vm = app.mount('#app');
