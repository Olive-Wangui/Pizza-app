$(document).ready(function() {
    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });
});
//Get inputs
$("#checkout").click(function () {
    let flavour = $("#flavour option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = $("#toppings option:selected").val();
    let number = $("#number").val();
    console.log(size);

    //Function order
    let order = (f, s, c, t, n, total) => {
        return {f, s, c, t, n, total};
    };

  // check price 
    let price, totalPrice;
    switch (flavour) {
        case flavour = "pepperoni":
            switch (size) {
                case size = "small":
                    price = 300;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "medium":
                    price = 600;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "large":
                    price = 1200;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
            }
            break;
        case flavour = "Bacon-Sausage-pineapple-pepper":
            switch (size) {
                case size = "small":
                    price = 300;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "medium":
                    price = 600;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "large":
                    price = 1200;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
            }
            break;
        case flavour = "Bacon-and-Caramelized-Bacon":
            switch (size) {
                case size = "small":
                    price = 300;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "medium":
                    price = 600;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "large":
                    price = 1200;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
            }
            break;
        case flavour = "Italian Sausage and Pepperoni":
            switch (size) {
                case size = "small":
                    price = 300;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "medium":
                    price = 600;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "large":
                    price = 1200;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
            }
            break;
        case flavour = "boerewors":
            switch (size) {
                case size = "small":
                    price = 300;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "medium":
                    price = 600;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "large":
                    price = 1200;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
            }
            break;
        case flavour = "hawaiian":
            switch (size) {
                case size = "small":
                    price = 300;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "medium":
                    price = 600;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "large":
                    price = 1200;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
            }
            break;
        case flavour = "mushroom":
            switch (size) {
                case size = "small":
                    price = 300;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "medium":
                    price = 600;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "large":
                    price = 1200;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
            }
            break;
        case flavour = "regina":
            switch (size) {
                case size = "small":
                    price = 300;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "medium":
                    price = 600;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
                case size = "large":
                    price = 1200;
                    if (crust === "thin") {
                        totalPrice = (price * number) + 100;
                    } else if (crust === "thick") {
                        totalPrice = (price * number) + 150;
                    } else if (crust === "flatbread") {
                        totalPrice = (price * number) + 180;
                    } else {
                        totalPrice = (price * number) + 280;
                    }
                    break;
            }
            break;
    }
    switch (topping) {
        case topping = "mushrooms":
            totalPrice = totalPrice + 80;
            break;
        case topping = "onions":
            totalPrice = totalPrice + 80;
            break;
        case topping = "sausage":
            totalPrice = totalPrice + 80;
            break;
        case topping = "greenpepper":
            totalPrice = totalPrice + 80;
            break;
        case topping = "olives":
            totalPrice = totalPrice + 120;
            break;
        case topping = "pineapple":
            totalPrice = totalPrice + 120;
            break;
        case topping = "sweetcorn":
            totalPrice = totalPrice + 120;
            break;
        case topping = "bacon":
            totalPrice = totalPrice + 120;
            break;
        case topping = "mince":
            totalPrice = totalPrice + 120;
            break;
        case topping = "beef":
            totalPrice = totalPrice + 170;
            break;
        case topping = "chicken":
            totalPrice = totalPrice + 170;
            break;

    }

     //Execute order function
     let newOrder = order(flavour, size, crust, topping, number, totalPrice);
     console.log(newOrder); // test function

     let topping_value = ptopping.length*100;
     console.log("topping value" + topping_value);

     if((psize == "0") && (pcrust == "0")){
         console.log("nothing selected");
         $("button.checkout").show();
         $("#information").show();
         $("div.choice").hide();
         alert("Please select the pizza size and crust");
     }
     else{
         $("button.checkout").hide();
         $("#information").hide();
         $("div.choice").slideDown(1000);
     }

     total = price + crust_price + topping_value;
     console.log(total);
     let checkoutTotal = 0;
     checkoutTotal = checkoutTotal + total;

     //checkout button
     $("button#checkout").click(function(){
        $("button#checkout").hide();
        $("button.addPizza").hide();
        $("button.deliver").slideDown(1000);
        $("#addedPrice").slideDown(1000);
        console.log("Your total order bill is sh. " + checkoutTotal);
        $("#pizzaTotal").append("Your total order bill is sh. " + checkoutTotal);
     });

     //

     //create a new object
     // let myOrder = JSON.stringify(JSON.parse(newOrder));

     //Write to the order
     $('.summary').slideDown(2000);
     $('.cdata-overlay').slideUp();
     $('#list').slideDown();
     $('.deliver').show(1000);
     $('.delivernot').show(1000);

     $('#list').text(" ");
     $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
         + newOrder.s + "<br>" + "Crust :     "
         + newOrder.c + "<br>" + "Toppings :     "
         + newOrder.t + "<br>" + " Number of pizzas :    "
         + newOrder.n + "<br>" + "Total Price :  "
         + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
});

  //Deliver
  $(".deliver").click(function () {
     $('.summary').slideUp();
     $('#list').slideUp();
     $('.summary').text("Provide location details").slideDown();
     $('.deliver').hide(1000);
     $('.delivernot').hide(1000);
     $('.cdata-overlay').slideDown();
     let deliveryamount = checkoutTotal+100;
     console.log("You will pay sh. "+deliveryamount+" on delivery");
     $("#totalbill").append("Your bill plus delivery fee is: "+deliveryamount);
 });


 //Pick Up
 $(".delivernot").click(function () {
     
 });

 //Scrollify
 $(function () {
     $.scrollify.move('#sum-order');
 });