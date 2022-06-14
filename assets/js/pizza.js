console.log('PizzaPIK')

$(document).ready(function () {

    /*Menu bar background color change script*/
    $(window).scroll(function () {
        let scrollTop = $(window).scrollTop();
        if (scrollTop > 100) {
            $("#nav").css("background-color", "black");
        }
        else {
            $("#nav").css("background-color", "transparent");
        }
    });

    // More code
    $("table").hide();
    $(".additional-buttons").hide();
    $(".additional-info").hide();
    $(".btn.yes").hide();
    $(".btn.no").hide();
    $(".additional-info h4").hide();

    $('.btn.place-order').click(function () {
        let sizeOfPizza = $(".size option:selected").val();
        let toppingsOfPizza = $(".toppings option:selected").val();
        let crustOfPizza = $(".crust option:selected").val();
        let total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
        let order = 1;
        let grandTotal = 0;

        $("table").show();
        $(".additional-buttons").show();
        $(".btn.place-order").hide();

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


        $('.btn.add-order').click(function () {
            let sizeOfPizza = $(".size option:selected").val();
            let toppingsOfPizza = $(".toppings option:selected").val();
            let crustOfPizza = $(".crust option:selected").val();
            let total = parseInt(sizeOfPizza) + parseInt(toppingsOfPizza) + parseInt(crustOfPizza);
            order = order + 1;
            grandTotal = grandTotal + total;


            let newPizza = new Pizza(sizeOfPizza, toppingsOfPizza, crustOfPizza, total, order);

            let newRow = '<tr><th scope="row">' + newPizza.orderNo + '</th><td id="size">' + $(".size option:selected").text() + " - " + newPizza.size + '</td><td id="toppings">' + $(".toppings option:selected").text() + " - " + newPizza.toppings + '</td><td id="crust">' + $(".crust option:selected").text() + " - " + newPizza.crust + '</td><td id="total">' + newPizza.total + '</td></tr>'

            $("#pizza").append(newRow);
        });


        $(".btn.check-out").click(function() {
            $(".btn.add-order").hide();
            $(".btn.check-out").hide();
            $(".additional-info").show();
            $(".btn.yes").show();
            $(".btn.no").show();
            $(".additional-info .location").hide();
            grandTotal = grandTotal + total;
      
            $(".additional-info h3 span").html(grandTotal);
          });
      
          $(".btn.yes").click(function() {
            $(".additional-info h5").hide();
            $(".btn.yes").hide();
            $(".btn.no").hide();
            $(".additional-info .location").show();
            $(".additional-info h3 span").html(grandTotal + 200);
          });
      
          $(".btn.no").click(function() {
            $(".additional-info h5").hide();
            $(".btn.yes").hide();
            $(".btn.no").hide();
            $(".additional-info .location").show();
          });
      
          $(".btn.complete").click(function() {
            let location = $(".additional-info .location input").val();
            $(".additional-info h4").show();
            $(".additional-info .location").hide();
            $(".additional-info h4 span").html(location);
          });








    });




});


