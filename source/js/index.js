$(document).ready(function () {
  const toggler = $('.main-nav__toggle');
  const navList = $('.main-nav__list');
  const contacts = $('.contacts__container');
  const mapIframe = $('.contacts__map iframe');
  const form = $('.form');
  const sliderButtons = $('.slider__button');

  // --------------- menu
  $(document.body).removeClass('no-js');
  toggler.addClass('main-nav__toggle--open');
  toggler.click(function () {
    navList.slideToggle();
  })
  // --------------- map
  contacts.addClass('hidden');
  mapIframe.removeClass('hidden');
  // --------------- form validation
  form.validate({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      weight: {
        required: true,
        number: true
      },
      age: {
        required: true,
        number: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      }
    },
    focusCleanup: true,
    errorClass: 'form__input--error',
    errorPlacement: function (error, element) {
      return true;
    },

    submitHandler: function (form) {
      form.submit();
    }
  })
  // --------------- slider

  sliderButtons.click(function (evt) {
    let index = parseInt(evt.target.dataset.index);

    if (index === 0) {
      $('.slider__item--fat').css('opacity', 1);
      $('.slider__item--slim').css('opacity', 0);
      $('.range__button').removeClass('range__button--right');
    } else {
      $('.slider__item--slim').css('opacity', 1);
      $('.slider__item--fat').css('opacity', 0);
      $('.range__button').addClass('range__button--right');
    }
  });

  // ограничения для ползунка
  const Restrictions = {
    mobile: 42,
    tablet: 393
  };

  const TABLET_WIDTH = 767;

  // TODO остается прозрачность 0.1
  $('#drag').draggable({
    axis: 'x',
    containment: 'parent',
    opacity: 0.6,
    drag: function () {
      let left = $(this).css('left');
      let opacity;

      if (window.innerWidth > TABLET_WIDTH) {
        opacity = parseInt(left) / Restrictions.tablet
      } else {
        opacity = parseInt(left) / Restrictions.mobile
      }

      $('.slider__item--slim').css('opacity', opacity)
      $('.slider__item--fat').css('opacity', 1 - opacity)
    },
  });
});
