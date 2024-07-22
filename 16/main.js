//Creating a Guest List Array
var guestList = ["Shunaiza", "Meerab", "Falak", "Roohan"];
//making a variable for those guest who cant come
var dontCome = guestList[0];
//printing the name of guest who cant come
console.log(dontCome, "nahi aa saktey hain");
//add or remove guest from guest list array
guestList.splice(1, 1, "Rida");
//message print for bigger table
console.log("Good news ! We have Found a Bigger Table for Dinner");
//adiing a new guest in starting index of array
guestList.unshift("Ali");
//adding anew guest in ending index of array
guestList.push("Yahya");
//get a middle index of our guestList array
var middleIndex = Math.floor(guestList.length / 2);
//addind a new guest to middle index of array
guestList.splice(middleIndex, 0, "Ayesha");
//print message of updated list
console.log("Updated List of our Guest");
//sending a invitation message to our guest one by one with their name
guestList.forEach(function (oneGuest) { return console.log("Assalam O Alaikum ".concat(oneGuest, ", Would You Like to Dinner with Me?")); });
