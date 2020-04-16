$(document).ready(function () {

  const slimColor = "#eaeaea";

  const showSlimSlide = function () {
    $(".slider__item").eq(0).fadeOut();
    $(".slider__item").eq(1).fadeIn();
    $(".range__button").addClass("range__button--right");

    if ($(window).width() >= "1300") {
      $(".example").css("background-color", slimColor);
    }
  };

  const showFatSlide = function () {
    $(".slider__item").eq(0).fadeIn();
    $(".slider__item").eq(1).fadeOut();
    $(".example").css("background-color", "");
    $(".range__button").removeClass("range__button--right");
  };

  $(".slider__button--after").click(showSlimSlide);
  $(".slider__button--before").click(showFatSlide);

});
