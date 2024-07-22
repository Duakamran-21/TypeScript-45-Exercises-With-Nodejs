//define the function to show magicians name
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//function to make magicians great through .map() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//define an Array of magicians name
var magician_names = ["Harry poter", "Hamza", "Usman"];
//making a copy of Original Array through .slice() function 
var copy_magician_names = magician_names.slice();
//modify the copied Array to include "the great" with their name
var copy_great_magician = make_great(copy_magician_names);
//show both arrays original and copied
//original
console.log("Original Array\n");
show_magicians(magician_names);
//copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magician);
