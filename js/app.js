$(document).ready(function () {
  // Tooltip
  $('[data-toggle="tooltip"]').tooltip({
    template:
      '<div class="tooltip"><div class="tooltip-arrow tooltip-arrow--top"></div><div class="tooltip-inner"></div></div>',
  });

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
});
