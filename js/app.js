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

  // Inputs Focus
  $(".resitration__input").focus(function () {
    $(this).parent().find(".contact__icon").addClass("active");
  });

  $(".resitration__input").blur(function () {
    $(this).parent().find(".contact__icon").removeClass("active");
  });

  // Validation Registration/login
  $(".registration__form").validate({
    rules: {
      name: {
        required: true,
        minlength: 2,
      },
      email: {
        required: true,
      },
      teacher: {
        required: true,
      },
      password: {
        required: true,
        minlength: 6,
      },
    },
    messages: {
      name: {
        required: "Name is required",
        minlength: "The name must be at least 2 characters",
      },
      teacher: "Please enter your teacher name",
      password: {
        required: "Password is required",
        minlength: "Password must be at least 6 characters",
      },
      email: {
        required: "Email is required",
        email: "Email address format required",
      },
    },
  });

  // Registration Select
  $("#registrationForm").submit(function () {
    if (
      $("#registrationSelect").find(".select__title").hasClass("active") ==
      false
    ) {
      $("#registrationSelect").addClass("error");
      $("#teacher-error").text("Please select");

      return false;
    } else {
      $("#registrationSelect").removeClass("error");
      $("#teacher-error").text("");

      return true;
    }
  });

  $(".registration__list__item").click(function () {
    if (
      $("#registrationSelect").find(".select__title").hasClass("active") ==
      false
    ) {
      $("#registrationSelect").addClass("error");
      $("#teacher-error").text("Please select");
    } else {
      $("#registrationSelect").removeClass("error");
      $("#teacher-error").text("");
    }
  });
});
