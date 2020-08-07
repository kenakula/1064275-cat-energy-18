const TABLET_WIDTH = 767;
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
const sliderButtons = slider.querySelectorAll('.slider__button');

let initialSlideOpacity = 1;

sliderButtons.forEach((it) => {
  it.addEventListener('click', function () {
    if (it.classList.contains('slider__button--after')) {
      let newRight = rangeButtonRestrict(sliderRange.getBoundingClientRect().width);
      rangeButton.style.left = newRight + 'px';
    } else if (it.classList.contains('slider__button--before')) {
      let newLeft = rangeButtonRestrict(sliderRange.getBoundingClientRect().width * -1);
      rangeButton.style.left = newLeft + 'px';
    }
  })
});

// изменяет прозрачность слайдов
const changeSlide = function (evtLeft) {
  let i = setOpacity(evtLeft);
  // TODO сделать универсальнее
  sliderItems[0].style.opacity = 1 - i;
  sliderItems[1].style.opacity = i;
};

// определяет значение прозрачности
const setOpacity = function (evtLeft) {
  let max = Restrictions.mobile.RIGHT;

  if (window.innerWidth > TABLET_WIDTH) {
    max = Restrictions.tablet.RIGHT;
  }

  initialSlideOpacity = evtLeft / max;

  return initialSlideOpacity.toFixed(1);
}

// определяет события по дефолту
let startEvt = Events.notouch.start;
let moveEvt = Events.notouch.move;
let endEvt = Events.notouch.end;

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
