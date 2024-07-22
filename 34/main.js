//creating a Array
var pizza = ["Fajita", "Malai tikka", "Chicken Tikka"];
//using for-loop
for (var _i = 0, pizza_1 = pizza; _i < pizza_1.length; _i++) {
    var onePizza = pizza_1[_i];
    console.log("\nI Like ".concat(onePizza, " Pizza"));
}
//print a message outside of the for loop
console.log("Pizza isLove");
