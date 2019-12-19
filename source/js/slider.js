var slimCat = document.querySelector('.slim-cat');
var fatCat = document.querySelector('.fat-cat');

var beforeBtn = document.querySelector('.slider__button--before');
var afterBtn = document.querySelector('.slider__button--after');

var rangeBtn = document.querySelector('.range__button');

var slider = document.querySelector('.slider');
var section = document.querySelector('.example');

var stats = document.querySelectorAll('.example__stats');

window.addEventListener('resize', function() {
  if (window.matchMedia("(min-width: 1440px)").matches) {
    if (!slimCat.classList.contains('slider__item--hidden')) {
      //изменяет фон при увеличении размера окна и активном худом котике
      section.classList.add('example--slim')
      //изменяет фон елементам списка определений
      for (i = 0; i < stats.length; i++) {
        stats[i].classList.add('example__stats--slim')
      }
    }
  }
})

afterBtn.addEventListener('click', function() {
  //изменяет фото на худого котика
  slimCat.classList.remove('slider__item--hidden');
  fatCat.classList.add('slider__item--hidden');
  //двигает ползунок в мобильной версии
  rangeBtn.classList.add('range__button--after');

  //изменяет фон на планшетах
  if (window.matchMedia("(min-width: 768px)").matches) {
    slider.classList.add('example__slider--slim')
  }
  //изменяет фон на десктопах
  if (window.matchMedia("(min-width: 1440px)").matches) {
    section.classList.add('example--slim')
    //изменяет фон елементам списка определений
    for (i = 0; i < stats.length; i++) {
      stats[i].classList.add('example__stats--slim')
    }
  }
})

beforeBtn.addEventListener('click', function() {
  //изменяет фото на толстого котика
  fatCat.classList.remove('slider__item--hidden');
  slimCat.classList.add('slider__item--hidden');
  //двигает ползунок в мобильной версии
  rangeBtn.classList.remove('range__button--after');
  //изменяет фон на планшетах
  if (window.matchMedia("(min-width: 768px)").matches) {
    slider.classList.remove('example__slider--slim')
  }
  //изменяет фон на десктопах
  if (window.matchMedia("(min-width: 1440px)").matches) {
    slider.classList.remove('example__slider--slim')
    section.classList.remove('example--slim')
    //изменяет фон елементам списка определений
    for (i = 0; i < stats.length; i++) {
      stats[i].classList.remove('example__stats--slim')
    }
  }
})
