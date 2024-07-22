"use strict";
//Making a Function
function makeShirt(size = "large", printMessage = "I Love Typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
//calling a function with by default value
makeShirt();
//calling a function now with medium size and default message
makeShirt("medium");
//calling a function now with small size and differnet print on it
makeShirt("small", "I Love Javascript");
