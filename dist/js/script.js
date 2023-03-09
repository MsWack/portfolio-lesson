//гамбургер

//создаем переменные
const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');

//при клике на гамбургер будет выполняться фнукиця
hamburger.addEventListener('click', () => {
	//добавляем блоку меню класс активности
	menu.classList.add('active');
});

//при клике на крестик
closeElem.addEventListener('click', () => {
	//убирвем у блока меню класс активности
	menu.classList.remove('active');
});