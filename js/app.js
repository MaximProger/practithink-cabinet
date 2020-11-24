$(document).ready(function () {
  // Sidebar Open || Close
  $("#sidebar").click(function () {
    $(this).toggleClass("sidebar--hide");
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
    $(".select__checkbox__item").removeClass("active");
    $(this).addClass("active");
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
});
