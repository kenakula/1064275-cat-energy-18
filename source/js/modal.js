var modal = document.querySelector('.modal');
var orderBtn = document.querySelectorAll('.products__button');
var resumeShopping = document.querySelector('.modal__button');

for (i = 0; i < orderBtn.length; i++) {
  orderBtn[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal--show');

    var coords = event.target.getBoundingClientRect();
    console.log(coords)

    modal.style.top = coords.top + pageYOffset + 'px';
  })
}

resumeShopping.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.remove('modal--show');
})

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains('modal--show')) {
      modal.classList.remove('modal--show');
    }
  }
})
