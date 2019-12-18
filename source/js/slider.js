var slimCat = document.querySelector('.slim-cat');
var fatCat = document.querySelector('.fat-cat');

var beforeBtn = document.querySelector('.slider__button--before');
var afterBtn = document.querySelector('.slider__button--after');

var rangeBtn = document.querySelector('.range__button');

afterBtn.addEventListener('click', function() {
  if (slimCat.classList.contains('slider__item--hidden')) {
    slimCat.classList.toggle('slider__item--hidden');
    fatCat.classList.toggle('slider__item--hidden');
    rangeBtn.classList.add('range__button--after');

    if (rangeBtn.classList.contains('range__button--before')) {
      rangeBtn.classList.remove('range__button--before');
    }
  }
})

beforeBtn.addEventListener('click', function() {
  if (!slimCat.classList.contains('slider__item--hidden')) {
    slimCat.classList.toggle('slider__item--hidden');
    fatCat.classList.toggle('slider__item--hidden');
    rangeBtn.classList.add('range__button--before');

    if (rangeBtn.classList.contains('range__button--after')) {
      rangeBtn.classList.remove('range__button--after');
    }
  }
})
