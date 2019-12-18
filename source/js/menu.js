var burgerButton = document.querySelector('.main-nav__toggle');
var nav = document.querySelector('.main-nav');
var menu = document.querySelector('.main-nav__list');

nav.classList.add('main-nav--closed');
menu.classList.add('hidden');

burgerButton.addEventListener('click', function() {
  menu.classList.toggle('hidden')

  nav.classList.toggle('main-nav--closed')
  nav.classList.toggle('main-nav--opened')
})
