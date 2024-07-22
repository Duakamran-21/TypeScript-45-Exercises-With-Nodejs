let apple = "apple";
//define variables
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple","banana","orange"]; 

//Test for equality and  inequality with strings
console.log("is apple is equal to apple");
console.log(apple =="apple");

console.log("\nis apple is not equal to apple");
console.log(apple != "apple");

//Test using lowerCase function
console.log("\nis apple is equal to apple after converting to lowerCase");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nis apple is not equal to apple after convering to lowerCase");
console.log(uppercaseApple.toLowerCase() != "apple");

// numerical Tests
//equal to
console.log("is ten is equal to twenty?");
console.log(ten == twenty);

//not equal to
console.log("\n is ten is nopt equal to twenty");
console.log(ten != twenty);

//greater or not greater
console.log("\n is ten is greater than zero");
console.log(10 > 0);

//less than
console.log("\n is twenty is less than 10");
console.log(twenty < ten);


//Greater than or equal to
console.log("\n is ten is greater than or equal to 5");
console.log(ten >= 5);


//less than or equal to
console.log("\nis twenty is less than or equal to 10");
console.log(twenty <= 10);

//Tests using "and" & "or" Operators
//using && (and)
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty != 10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 30");
console.log(twenty != 10 && twenty > 30);

//using || (or)
console.log("\n 20 is greater than 50 OR 20 is equal to 20");
console.log(20 > 50 || 20 == 20);

console.log("\n 20 is greater than 50 OR 20 is  not equal to 20");
console.log(20 > 50 || 20 != 20);

// Test whether an item is include in Array
console.log("\nis orange include in my fruits Array");
console.log(fruits.includes("orange"));

//not include
console.log("\nis orange is not include in my fruits Array");
console.log(!fruits.includes("orange"));