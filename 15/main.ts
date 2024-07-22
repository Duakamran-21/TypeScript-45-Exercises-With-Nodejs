let guestList =["Shunaiza","Meerab","Falak","Roohan"];
let dontCome = guestList[1]

console.log(dontCome, "nahi aa sakta");

guestList.splice(1,1, "Rida");




guestList.forEach(guest => console.log(`Assalam O Alaikum ${guest},Would You like to Dinner with me?`));
