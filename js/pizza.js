$(document).ready(function () {
  
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

  function formValidate() {
    let locs = document.getElementById("loc").nodeValue;

    if (locs = "") {
      alert("Kindly Provide Delivery Location!")
    }
    else
      return true
  }



  // Order function

  $(document).ready(function () {

    $("table").hide();
    $(".additional-buttons").hide();
    $(".additional-info").hide();
    $(".btn.yes").hide();
    $(".btn.no").hide();
    $(".additional-info h4").hide();

    $('.btn.order').click(function () {
      var sizeOfPizza = $(".size option:selected").val();
      var toppingsOfPizza = $(".toppings option:selected").val();
      var crustOfPizza = $(".crust option:selected").val();
      var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
      var order = 1;
      var grandTotal = 0;

      $("table").slideDown(1200);
      $(".additional-buttons").slideDown(1200);
      $(".btn.order").hide();

      $("#size").html($(".size option:selected").text() + " - " + sizeOfPizza);
      $("#toppings").html($(".toppings option:selected").text() + " - " + toppingsOfPizza);
      $("#crust").html($(".crust option:selected").text() + " - " + crustOfPizza);
      $("#total").html(total);

      function Pizza(size, toppings, crust, total, orderNo) {
        this.size = size;
        this.toppings = toppings;
        this.crust = crust;
        this.total = total;
        this.orderNo = orderNo;
      }


      $('.btn.add-pizza').click(function () {
        var sizeOfPizza = $(".size option:selected").val();
        var toppingsOfPizza = $(".toppings option:selected").val();
        var crustOfPizza = $(".crust option:selected").val();
        var total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
        order = order + 1;
        grandTotal = grandTotal + total;


        var newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

        var newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

        $("#pizza").append(newRow);
      });

      $(".btn.check-out").click(function () {
        $(".btn.add-pizza").hide();
        $(".btn.check-out").hide();
        $(".additional-info").slideDown(1200);
        $(".btn.yes").fadeIn(1200);
        $(".additional-info .location").hide();
        grandTotal = grandTotal + total;

        $(".additional-info h3 span").html(grandTotal);
      });

      $(".btn.yes").click(function () {
        $(".additional-info h5").hide();
        $(".btn.yes").hide();
        $(".additional-info .location").slideDown(1200);
        $(".additional-info h3 span").html(grandTotal + 200);
      });

      $(".btn.complete").click(function () {
        var location = $(".additional-info .location input").val();
        $(".additional-info h4").slideDown(1200);
        $(".additional-info .location").hide();
        $(".additional-info h4 span").html(location);
      });
      event.preventDefault
    });

  });






});




























// });