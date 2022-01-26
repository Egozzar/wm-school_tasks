"use strict";

const app = Vue.createApp({
	data() {
		return {
			string: '',
			results: [],
		}
	},
	methods: {
		changeRegister() {
			let res = this.string.split('').map(item => {
				let postLow = item.toLowerCase();
				return item === postLow ? item.toUpperCase() : postLow;
			}).join('');
			this.results.push({start: this.string, end: res});
			this.string = '';
		}
	}
});

const vm = app.mount('#app');
