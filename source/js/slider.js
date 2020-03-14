'use strict';

(function () {
  const MOBILE_MAX_WIDTH = '(max-width: 767px)';
  const TABLET_MIN_WIDTH = '(min-width: 768px)';
  const TABLET_MAX_WIDTH = '(max-width: 1299px)';
  const FAT_CAT_INDEX = '1';

  const slider = document.querySelector('.slider');
  const sliderImages = slider.querySelectorAll('.slider__item');
  const fatCatImage = slider.querySelector('.slider__item--fat');
  const slimCatImage = slider.querySelector('.slider__item--slim');

  const beforeBtn = slider.querySelector('.slider__button--before');
  const afterBtn = slider.querySelector('.slider__button--after');
  const rangeBar = slider.querySelector('.range');
  const rangeBtn = slider.querySelector('.range__button');

  const toggleRangeBtn = (evt) => {
    evt.target.dataset.index === FAT_CAT_INDEX
      ? rangeBtn.classList.add('range__button--after')
      : rangeBtn.classList.remove('range__button--after');
  };

  const makeMobileImageActive = (evt) => {
    const activeElement = slider.querySelector('.slider__item--active');

    if (evt.target.classList.contains('slider__button')) {
      activeElement.classList.remove('slider__item--active');
      sliderImages[evt.target.dataset.index].classList.add('slider__item--active');
      toggleRangeBtn(evt);
    }

  };

  const makeTabletImageActive = (evt) => {
    if (evt.target.classList.contains('slider__button')) {
      sliderImages[evt.target.dataset.index].classList.add('slider__item--fullwidth');
    }
  }

  const changeHandler = () => {
    if (window.matchMedia(MOBILE_MAX_WIDTH).matches) {
      slider.addEventListener('click', makeMobileImageActive);
      slider.removeEventListener('click', makeTabletImageActive);
      console.log('mobile');
    };

    if (window.matchMedia(TABLET_MAX_WIDTH).matches && window.matchMedia(TABLET_MIN_WIDTH).matches) {
      slider.removeEventListener('click', makeMobileImageActive);
      slider.addEventListener('click', makeTabletImageActive);
      console.log('tablet');
    }
  };

  changeHandler();

  window.addEventListener('resize', window.debounce(changeHandler));

})();
