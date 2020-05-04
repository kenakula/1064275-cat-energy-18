'use strict';

{
  const slider = document.querySelector('.slider');
  const sliderItems = slider.querySelectorAll('.slider__item');
  const sliderControls = slider.querySelector('.slider__controls');
  const rangeButton = sliderControls.querySelector('.range__button');

  const showSlide = function () {
    sliderItems.forEach(function (it) {
      it.classList.toggle('slider__item--active');
    })
  }

  const onSliderButtonSlideToggle = function (evt) {

    if (evt.target.classList.contains('slider__button--after')) {
      showSlide();
      rangeButton.classList.toggle('range__button--right');
    } else if (evt.target.classList.contains('slider__button--before')) {
      showSlide();
      rangeButton.classList.toggle('range__button--right');
    }
  }

  sliderControls.addEventListener('click', onSliderButtonSlideToggle);

}
