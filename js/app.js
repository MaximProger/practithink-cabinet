$(document).ready(function () {
  // Tooltip
  if ($('[data-toggle="tooltip"]').length) {
    $('[data-toggle="tooltip"]').tooltip({
      template:
        '<div class="tooltip"><div class="tooltip-arrow tooltip-arrow--top"></div><div class="tooltip-inner"></div></div>',
    });
  }

  // Sidebar Open || Close
  $(".logo").click(function () {
    $("#sidebar").toggleClass("sidebar--hide");
    $(".logo__img").toggleClass("active");
  });

  $("#openSideBar").click(function () {
    $(".sidebar").addClass("active");
    $(".mask").fadeIn("mask--active");
  });

  $(".mask").click(function () {
    $(this).fadeOut();
    $(".sidebar").removeClass("active");
  });

  // Select
  $(".select").click(function () {
    $(".select").not($(this)).removeClass("active");
    $(this).toggleClass("active");
  });

  $(".select__checkbox__item").click(function () {
    $(this).toggleClass("active");
    $(this).parents(".select").find(".select__title").addClass("active");
    $(this)
      .parents(".select")
      .find(".select__title")
      .text($(this).find(".select__label").text());
  });

  $(".select__list__item").click(function () {
    $(this).parents(".select").find(".select__title").addClass("active");
    $(this).parents(".select").find(".select__title").text($(this).text());
    $(".select__list__item").removeClass("active");
    $(this).addClass("active");
  });

  // Кнопки в паннели
  $(".pannel__btn").click(function () {
    $(this).toggleClass("pannel__btn--active");
  });

  // Chat Menu
  $(".chat__menu__item").click(function (evt) {
    evt.preventDefault();
    $(this).toggleClass("active");
    $(this).find(".chat__menu__list").slideToggle();
  });

  // Faivourite
  $(".chat__body__star").click(function () {
    $(this).toggleClass("active");
  });

  // Chat Menu
  $("#chatMenu").click(function () {
    $(".chat__col").slideDown();
  });

  $(".chat__col__close__btn").click(function () {
    $(".chat__col").slideUp();
  });

  // Textmore
  $(".video__text__link").click(function (evt) {
    evt.preventDefault();
    $(this).fadeOut();
    $(".video__text--hidden").slideDown();
  });

  // Сортировки
  $(".catalog__sort__arrow").click(function () {
    // $(".catalog__sort__list").removeClass("catalog__sort__list--active");
    $(this).toggleClass("catalog__sort__arrow--active");
    $(this)
      .parent()
      .parent()
      .find(".catalog__sort__list")
      .toggleClass("catalog__sort__list--active");
  });

  $(".catalog__sort__value").click(function () {
    $(".catalog__sort__arrow").removeClass("catalog__sort__arrow--active");
    $(this)
      .parent()
      .parent()
      .parent()
      .find(".catalog__sort__list")
      .removeClass("catalog__sort__list--active");

    $(this).parent().parent().find(".catalog__sort__text").text($(this).text());
  });

  // Rating
  $(".review__star").click(function () {
    $(".review__star").removeClass("detail__star--active");
    $(this).addClass("detail__star--active");

    if ($(this).hasClass("review__star--1")) {
      $(".review__star").addClass("detail__star--active");
      $(".rating__item__value").text("5.0 Excellent");
    } else if ($(this).hasClass("review__star--2")) {
      $(".review__star--3").addClass("detail__star--active");
      $(".review__star--4").addClass("detail__star--active");
      $(".review__star--5").addClass("detail__star--active");
      $(".rating__item__value").text("4.0 Good");
    } else if ($(this).hasClass("review__star--3")) {
      $(".review__star--4").addClass("detail__star--active");
      $(".review__star--5").addClass("detail__star--active");
      $(".rating__item__value").text("3.0 Satisfactorily");
    } else if ($(this).hasClass("review__star--4")) {
      $(".review__star--5").addClass("detail__star--active");
      $(".rating__item__value").text("2.0 Weakly");
    } else {
      $(".rating__item__value").text("1.0 Unsatisfactory");
    }
  });
});
