//гамбургер

//создаем переменные
const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close'),
	overlay = document.querySelector('.menu__overlay');

//при клике на гамбургер
hamburger.addEventListener('click', () => {
	//добавляем блоку 'меню' класс активности
	menu.classList.add('active');
});

//при клике на крестик
closeElem.addEventListener('click', () => {
	//убираем у блока 'меню' класс активности
	menu.classList.remove('active');
});

//закрываем блок 'меню' при клике на фон
overlay.addEventListener('click', () => {
	menu.classList.remove('active');
});

//закрываем блок 'меню' при клике на клавишу Esc (keyup - функция сработает, когда клавиша esc будет отпущена)
document.addEventListener('keyup', function (e) {
	if (e.key === "Escape") {
		menu.classList.remove('active');
	}
	
});