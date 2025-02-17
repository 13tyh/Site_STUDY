$(function () {
  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".header .nav").toggleClass("active");
  });

  $(".nav a").click(function () {
    $(".hamburger").removeClass("active");
    $(".header .nav").removeClass("active");
  });
});
