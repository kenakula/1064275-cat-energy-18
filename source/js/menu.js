var burgerButton = document.querySelector('.main-nav__toggle');

burgerButton.classList.add('main-nav__toggle--open');

burgerButton.addEventListener('click', function() {
  burgerButton.classList.toggle('main-nav__toggle--open');
  burgerButton.classList.toggle('main-nav__toggle--close');
})
