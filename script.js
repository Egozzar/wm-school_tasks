"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			array: [],
			result: '',
		}
	},
	methods: {
		startingSubstring(field) {
			let [str1, str2] = this.array;
			let res = '';

			for (let i = 0; i < str1.length; i++) {
				if (str1[i] === str2[i]) {
					res += str1[i];
				} else break;
			}
			this.result = res === '' ? 'Совпадений не найдено' : res;
		},
		creating() {
			if (this.array.length === 2) {
				alert('Массив уже создан. Нажмите кнопку Search.');
				this.string = '';
				return;
			}
			this.array.push(this.string);
			this.string = '';
		}
	}
});

const vm = app.mount('#app');
