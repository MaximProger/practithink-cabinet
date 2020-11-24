$(document).ready(function () {
  // Sidebar Open || Close
  $("#sidebar").click(function () {
    $(this).toggleClass("sidebar--hide");
    $(".logo__img").toggleClass("active");
  });

  // Select
  $(".select").click(function () {
    $(this).toggleClass("active");
  });

  $(".select__list__item").click(function () {
    $(this).parents(".select").find(".select__title").addClass("active");
    $(this).parents(".select").find(".select__title").text($(this).text());
    $(".select__list__item").removeClass("active");
    $(this).addClass("active");
  });
});
