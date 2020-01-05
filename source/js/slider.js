var slider = document.querySelector('.slider');

var fatCat = document.querySelector('.slider__item--fat');
var slimCat = document.querySelector('.slider__item--slim');

var beforeBtn = document.querySelector('.slider__button--before');
var afterBtn = document.querySelector('.slider__button--after');
var rangeBtn = document.querySelector('.range__button');


//для мобильной версии
var turnOn = function(slide) {
  if (!slide.classList.contains('slider__item--off')) {
    slide.classList.add('slider__item--on')
  } else {
    slide.classList.remove('slider__item--off')
    slide.classList.add('slider__item--on')
  }
};

var turnOff = function(slide) {
  if (!slide.classList.contains('slider__item--on')) {
    slide.classList.add('slider__item--off')
  } else {
    slide.classList.remove('slider__item--on')
    slide.classList.add('slider__item--off')
  }
};

if (window.matchMedia('(max-width: 767px)').matches) {
  beforeBtn.addEventListener('click', function() {
    turnOn(fatCat);
    turnOff(slimCat);
    rangeBtn.classList.remove('range__button--after');
  })

  afterBtn.addEventListener('click', function() {
    turnOn(slimCat);
    turnOff(fatCat);
    rangeBtn.classList.add('range__button--after');
  })
};

//для планшетной версии
