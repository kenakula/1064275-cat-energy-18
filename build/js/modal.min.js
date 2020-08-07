var modal = document.querySelector('.modal');
var orderGoodsBtn = document.querySelectorAll('.products__button');
var orderAdditionalsBtn = document.querySelectorAll('.additional-goods__link');
var resumeShopping = document.querySelector('.modal__button');

//для ссылок основных товаров каталога
for (i = 0; i < orderGoodsBtn.length; i++) {
  orderGoodsBtn[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');

    var coords = event.target.getBoundingClientRect();
    console.log(coords);

    modal.style.top = coords.top + pageYOffset + 'px';
  })
}

//для ссылок дополнительных товаров каталога
for (i = 0; i < orderAdditionalsBtn.length; i++) {
  orderAdditionalsBtn[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');

    var coords = event.target.getBoundingClientRect();
    console.log(coords);


    modal.style.top = coords.top + pageYOffset + 'px';
  })
}

resumeShopping.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal--show');
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
    }
  }
})
