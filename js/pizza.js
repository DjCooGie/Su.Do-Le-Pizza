function selectOnlyThis(id) {
  var myCheckbox = document.getElementsByName("myCheckbox");
  Array.prototype.forEach.call(myCheckbox, function (el) {
    el.checked = false;
  });
  id.checked = true;
}







$(document).ready(function () {

// Blinking elements
  setInterval(function () {
    $(".blink").fadeOut(function () {
      $(this).fadeIn(1500);
    });
  }, 1200)

  setInterval(function () {
    $("#logo").fadeIn(function () {
      $(this).fadeOut(1500);
    });
  }, 1200)












  });



























});