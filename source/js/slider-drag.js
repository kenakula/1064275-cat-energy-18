'use strict';

{
  const slider = document.querySelector('.slider');
  const sliderItem = slider.querySelectorAll('.slider__item');
  const sliderRange = slider.querySelector('.range');
  const rangeButton = slider.querySelector('.range__button');

  rangeButton.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    let shiftX = evt.clientX - rangeButton.getBoundingClientRect().left;

    let onMouseMove = function (evt) {
      let newLeft = evt.clientX - shiftX - sliderRange.getBoundingClientRect().left;

      if (newLeft < -5) {
        newLeft = -5;
      } else if (newLeft > 393) {
        newLeft = 393;
      }

      rangeButton.style.left = newLeft + 'px';
    }

    let onMouseUp = function (evt) {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  })



}
