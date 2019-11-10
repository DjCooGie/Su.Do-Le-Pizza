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

  setInterval(function () {
    $("#infor").fadeIn(function () {
      $(this).fadeOut(1800);
    });
  }, 1700)










  let price;
  let crust_price;
  let topping_price;
  let total = 0;

  function GetPizza(name, size, crust, topping, total) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.topping = topping;
    this.total = total;
  }
  // order button
  $(document).ready(function () {
    $("button.order").click(function (event) {
      let pName = $(".name option:selected").val();
      let pSize = $("#size input:checked").val();
      let pCrust = $("#crust option:selected").val();
      let pTopping = [];

      $.each($("input[name='topping']:checked"), function () {
        pTopping.push($(this).val());
      });

      switch (pSize) {
        case "0":
          price = 0;
          break;
        case "small":
          price = 600;
          break;
        case "medium":
          price = 900;
          break;
        case "large":
          price = 1200;
        default:
          console.log("error");
      }

      switch (pCrust) {
        case "0":
          c_price = 0;
          break;
        case "Flatbread":
          c_price = 100;
          break;
        case "Stuffed":
          c_price = 200;
          break;
        case "Neapolitan":
          c_price = 300;
          break;        
        case "Gluten-free":
          c_price = 300;
          break;
        default:
          console.log("error");
      }

      let topping_value = pTopping.length * 100;

      if (pSize == "0" && pCrust == "0") {
        $("button.order").show();
        $("#infor   ").show();
        $("div.choice").hide();
        alert("Kindly select  Pizza size and crust");
      } else {
        // $("button.order").hide();
        // $("#infor").hide();
        $("div.choice").slideDown(1200);
      }

      total = price + c_price + topping_value;
      let checkoutTotal = 0;
      checkoutTotal = checkoutTotal + total;

      $("#pizname").html($(".name option:selected").val());
      $("#pizsize").html($("#size input:checked").val());
      $("#pizcrust").html($("#crust option:selected").val());
      $("#piztopping").html(pTopping.join(", "));
      $("#total").html(total);

      // add button
      $("button.addPizza").click(function () {
        let pName = $(".name option:selected").val();
        let pSize = $("#size input:checked").val();
        let pCrust = $("#crust option:selected").val();
        let pTopping = [];

        switch (pSize) {
          case "0":
            price = 0;
            break;
          case "large":
            price = 1500;
            break;
          case "medium":
            price = 950;
            break;
          case "small":
            price = 700;
          default:
            console.log("error");
        }

        switch (pCrust) {
          case "0":
            c_price = 0;
            break;
          case "Crispy":
            c_price = 300;
            break;
          case "Stuffed":
            c_price = 200;
            break;
          case "Gluten-free":
            c_price = 250;
            break;
          case "Flatbread":
            c_price = 300;
          case "Focaccia":
            c_price = 200;
            break;
          default:
            console.log("error");
        }

        let topping_value = pTopping.length * 100;
        total = price + c_price + topping_value;

        checkoutTotal = checkoutTotal + total;

        newOrder = new GetPizza(pName, pSize, pCrust, pTopping, total);
        $("#ordersmade").append(
          `<tr><td id="pizname">` +
          newOrder.name +
          `</td><td id="pizsize"> ` +
          newOrder.size +
          `</td><td id="pizsize"> ` +
          newOrder.crust +
          `</td><td id="pizsize"> ` +
          newOrder.topping +
          `</td><td id="pizsize"> ` +
          newOrder.total +
          `</td></tr>`
        );
      });

      $("button#checkout").click(function () {
        $("button#checkout").hide();
        $("button.addPizza").hide();
        $("button#deliver").slideDown(1000);
        $("#piztotal").append("Your order bill is Kshs. " + checkoutTotal);
      });

      // delivery button
      $("button.deliver").click(function () {
        $(".pizzatable").hide();
        $(".choice h2").hide();
        $(".delivery").slideDown(1000);
        $("#addedprice").hide();
        $("button.deliver").hide();
        $("#piztotal").hide();

        let deliveryAmount = checkoutTotal + 200;
        $("#totalbill").append(
          "Your total bill now is: " + deliveryAmount
        );
      });

      $("button#final-order").click(function (event) {
        event.preventDefault();
        $("#pizzatotal").hide();
        $(".delivery").hide();
        $("button#final-order").hide();
        let deliveryAmount = checkoutTotal + 200;

        let person = $("input#name").val();
        let phone = $("input#phone").val();
        let location = $("input#location").val();

        if (
          $("input#name").val() &&
          $("input#phone").val() &&
          $("input#location").val() != ""
        ) {
          $("#lefinalesms").append(
            person +
            ", Your order has been received succesfully and is under process. Delivery will be made at " +
            location +
            ". Pay your total bill on delivery." + " (Kshs. " + deliveryAmount + ")" 
          );
          $("#totalbill").hide();
          $("#finallmessage").slideDown(1200);
        } else {
          alert("Kindly enter your details");
          $(".delivery").show();
          $("button#final-order").show();
        }
      });
      event.preventDefault();
    });
  });




























});