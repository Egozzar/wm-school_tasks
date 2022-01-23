"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		colonOdd () {
			let arr = this.string.split('');

			for (let i = 0; i < arr.length; i++) {
				if ((arr[i] % 2) && (arr[i + 1] % 2)) {
					arr.splice(i + 1, 0, ':');
					i++;
				}
			}

			this.results.push( arr.join('') );
			this.string = '';
		}
	}
});

const vm = app.mount('#app');
