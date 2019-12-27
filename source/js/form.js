var submitBtn = document.querySelector('.form__button');
var formInput = document.querySelectorAll('[required]');
var form = document.querySelector('.form');
var catName = document.querySelector('[name=name]');
var catWeight = document.querySelector('[name=weight]');
var mailInput = document.querySelector('[name=email]');
var phoneInput = document.querySelector('[name=phone]');
var mailIcon = document.querySelector('.form__icon--mail');
var phoneIcon = document.querySelector('.form__icon--phone');

//изменяет цвет иконки поля при вводе значений
mailInput.addEventListener('input', function() {
  if (mailInput.validity.valid) {
    mailIcon.classList.add('form__icon--valid');
  } else {
    mailIcon.classList.add('form__icon--error')
  }
})

phoneInput.addEventListener('input', function() {
  if (phoneInput.validity.valid) {
    phoneIcon.classList.add('form__icon--valid');
  } else {
    phoneIcon.classList.add('form__icon--error')
  }
})

//изменяет цвет границ обязательных полей и цвет иконки ввода при отправке формы
submitBtn.addEventListener('click', function(evt) {
  for (i = 0; i < formInput.length; i++) {
    formInput[i].classList.remove('form__input--error');
    mailIcon.classList.remove('form__icon--error');
    phoneIcon.classList.remove('form__icon--error');
    mailIcon.classList.remove('form__icon--valid');
    phoneIcon.classList.remove('form__icon--valid');


    if (!formInput[i].value) {
      evt.preventDefault();
      formInput[i].classList.add('form__input--error');
      window.scrollTo(0, 300);
    }
  }

  if (!mailInput.value) {
    mailIcon.classList.add('form__icon--error')
  } else {
    mailIcon.classList.add('form__icon--valid')
  }

  if (!phoneInput.value) {
    phoneIcon.classList.add('form__icon--error')
  } else {
    phoneIcon.classList.add('form__icon--valid')
  }
})
