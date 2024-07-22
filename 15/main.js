var guestList = ["Shunaiza", "Meerab", "Falak", "Roohan"];
var dontCome = guestList[1];
console.log(dontCome, "nahi aa sakta");
guestList.splice(1, 1, "Rida");
guestList.forEach(function (guest) { return console.log("Assalam O Alaikum ".concat(guest, ",Would You like to Dinner with me?")); });
