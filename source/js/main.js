let mainNav = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toogle');

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
	mainNav.classList.toggle('main-nav--closed');
});
