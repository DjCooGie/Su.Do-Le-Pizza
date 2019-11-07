





$(document).ready(function () {

// Blinking paragraph
  setInterval(function () {
    $(".blink").fadeOut(function () {
      $(this).fadeIn();
    });
  }, 1200)



});