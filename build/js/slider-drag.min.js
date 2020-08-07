'use strict';

{

  // ограничения для ползунка
  const Restrictions = {
    mobile: {
      LEFT: 5,
      RIGHT: 43
    },

    tablet: {
      LEFT: -5,
      RIGHT: 393
    }
  };

  const TABLET_WIDTH = 767;

  const Events = {
    notouch: {
      start: 'mousedown',
      move: 'mousemove',
      end: 'mouseup'
    },

    touch: {
      start: 'touchstart',
      move: 'touchmove',
      end: 'touchend'
    }
  };

  const slider = document.querySelector('.slider');
  const sliderRange = slider.querySelector('.range');
  const sliderItems = slider.querySelectorAll('.slider__item');
  const rangeButton = slider.querySelector('.range__button');


  // дефолтное значение прозрачности активного слайда
  let opacity = 1;

  // проверка поддержки тач событий
  let isTouchCapable = 'ontouchstart' in window ||
    window.DocumentTouch && document instanceof window.DocumentTouch ||
    navigator.maxTouchPoints > 0 ||
    window.navigator.msMaxTouchPoints > 0;

  // ограничивает движение ползунка
  const rangeButtonRestrict = function (newLeft) {
    let left = Restrictions.mobile.LEFT;
    let right = Restrictions.mobile.RIGHT;

    if (window.innerWidth > TABLET_WIDTH) {
      left = Restrictions.tablet.LEFT;
      right = Restrictions.tablet.RIGHT;
    }

    if (newLeft < left) {
      newLeft = left;
    } else if (newLeft > right) {
      newLeft = right;
    }

    return newLeft;
  };

  // определяет значение прозрачности
  const setOpacity = function (evtLeft) {
    let max = 43;

    if (window.innerWidth > TABLET_WIDTH) {
      max = 393;
    }

    opacity = evtLeft / max;

    return opacity.toFixed(1);
  }

  // изменяет прозрачность слайдов
  const changeSlide = function (evtLeft) {
    let i = setOpacity(evtLeft);
    // TODO сделать универсальнее
    sliderItems[0].style.opacity = 1 - i;
    sliderItems[1].style.opacity = i;
  };

  // переопределяет тип событий при поддержке тач-событий
  if (isTouchCapable) {
    startEvt = Events.touch.start;
    moveEvt = Events.touch.move;
    endEvt = Events.touch.end;
  };

  // функционал drag'n'drop
  if (isTouchCapable) {
    rangeButton.addEventListener(startEvt, function (evt) {
      evt.preventDefault();
      // определяет отступ от края ползунка до точки прикосновения к нему
      let shiftX = evt.touches[0].clientX - rangeButton.getBoundingClientRect().left;

      let onMouseMove = function (moveEvt) {
        // при каждом движении курсора (пальца) изменяет положение ползунка
        let newLeft = moveEvt.changedTouches[0].clientX - shiftX - sliderRange.getBoundingClientRect().left;
        newLeft = rangeButtonRestrict(newLeft);
        changeSlide(newLeft);

        rangeButton.style.left = newLeft + 'px';
      };

      let onMouseUp = function (upEvt) {
        // убирает обработчики событий
        document.removeEventListener(endEvt, onMouseUp);
        document.removeEventListener(moveEvt, onMouseMove);
      };

      document.addEventListener(moveEvt, onMouseMove);
      document.addEventListener(endEvt, onMouseUp);
    });
  } else {
    rangeButton.addEventListener(startEvt, function (evt) {
      evt.preventDefault();
      let shiftX = evt.clientX - rangeButton.getBoundingClientRect().left;

      let onMouseMove = function (moveEvt) {
        let newLeft = moveEvt.clientX - shiftX - sliderRange.getBoundingClientRect().left;
        newLeft = rangeButtonRestrict(newLeft);
        changeSlide(newLeft);

        rangeButton.style.left = newLeft + 'px';
      };

      let onMouseUp = function (upEvt) {
        document.removeEventListener(endEvt, onMouseUp);
        document.removeEventListener(moveEvt, onMouseMove);
      };

      document.addEventListener(moveEvt, onMouseMove);
      document.addEventListener(endEvt, onMouseUp);
    });
  }

}
