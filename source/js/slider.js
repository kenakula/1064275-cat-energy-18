'use strict';

(function () {

  var slider = document.querySelector('.slider');
  var sliderList = slider.querySelector('.slider__items-list');
  var sliderItems = sliderList.querySelectorAll('.slider__item');

  var controlsContainer = slider.querySelector('.slider__controls');
  var rangeButton = controlsContainer.querySelector('.range__button');

  var newSlideFadeOut = function (slide) {
    var opacity = 0;
    var timeout = setTimeout(function tick () {
      if (opacity < 11) {
        slide.style.opacity = opacity / 10;
        opacity++;
        timeout = setTimeout(tick, 50);
      }
    }, 50)
  };

  var activeSlideFadeIn = function (slide) {
    var opacity = 1;
    var timeout = setTimeout(function tick () {
      if (opacity < 11) {
        slide.style.opacity = 1 - opacity / 10;
        opacity++;
        timeout = setTimeout(tick, 50);
      }
    }, 50);
  };

  var changeSlideOpacity = function (activeSlide, newSlide) {
    newSlideFadeOut(newSlide);
    activeSlideFadeIn(activeSlide);
  };

  var changeRangeButtonPosition = function (activeSlide) {
    switch (activeSlide) {
      case '1':
        rangeButton.classList.remove('range__button--left');
        rangeButton.classList.add('range__button--right');
        break;
      default:
        rangeButton.classList.remove('range__button--right');
        rangeButton.classList.add('range__button--left');
    }
  };

  var changeSlide = function (evt) {
    var currentSlide = sliderList.querySelector('.slider__item--active')

    if (evt.target.classList.contains('button')) {
      var newSlideIndex = evt.target.dataset.index;
      currentSlide.classList.toggle('slider__item--active');
      sliderItems[newSlideIndex].classList.toggle('slider__item--active');
      changeRangeButtonPosition(newSlideIndex);
      changeSlideOpacity(currentSlide, sliderItems[newSlideIndex]);
    }
  };

  controlsContainer.addEventListener('click', changeSlide);
})();
