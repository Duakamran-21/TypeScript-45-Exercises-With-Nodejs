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
//inform that only two guest can be invited for dinner
console.log("unfortunately, the new dinner table wont arrive on time, so I can only invite two Guest to Dinner with me");
//using while-loop to remove the guest from array untill only two Guest remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("SORRY, ".concat(removedGuest, " I Cant invite you to Dinner"));
}
//sending a invitation to the last two guest on the list
console.log("Invitation to the last Two Guest");
guestList.forEach(function (lasttwo) { return console.log("luckly ".concat(lasttwo, ",you are still invited to dinner")); });
//removing last two guest from the list
guestList.pop();
guestList.pop();
console.log("empty list:", guestList);
