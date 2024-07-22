//define a function to print magician name from an Array
function show_magician(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//define an Array containing magicians name
var magician_names = ["Harry poter", "Hamza", "Usman"];
//call the function to print each magician name
show_magician(magician_names);
