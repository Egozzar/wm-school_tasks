"use strict";

const app = Vue.createApp({
	data() {
		return {
			books: [
				{ id: 1, author: 'Майн Рид', title: 'Всадник без головы'},
				{ id: 2, author: 'Жюль Верн', title: 'Капитан Немо'},
				{ id: 3, author: 'Франц Кафка', title: 'Процесс'},
				{ id: 4, author: 'Герман Гессе', title: 'Сиддхартха'},
				{ id: 5, author: 'Томас Манн', title: 'Будденброки'},
				{ id: 6, author: 'Райчел Мид', title: 'Золотая лилия'},
			],
		}
	},
	methods: {
		sortBooks(field) {
			this.books.sort((a, b) => a[field] > b[field] ? 1 : -1);
		},
	}
});

const vm = app.mount('#app');
