var staticMap = document.querySelector('.contacts__container');
var interactiveMap = document.querySelector('.contacts__map iframe');

if (staticMap) {
  staticMap.classList.add('hidden');
  interactiveMap.classList.remove('hidden');
}
