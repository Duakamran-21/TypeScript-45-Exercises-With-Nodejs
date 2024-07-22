//Define a function with a rest parameter that accept items arguments representing our sandwich

function makeSandwich(...items: string[]){
  console.log("\nMaking a Sandwich with the following items: \n");

  items.forEach(singleItem => console.log(singleItem));

  console.log("\nNow Enjoy your Sandwich");
}

//call the function 3 time with 3 different number of arguements
 
makeSandwich("Chicken","Cheese","Mayo","Egg","Bread");

makeSandwich("Bread","Chicken","Butter");

makeSandwich("Bread","Egg","Butter");