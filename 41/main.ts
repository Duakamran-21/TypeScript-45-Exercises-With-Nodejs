//define a function to print magician name from an Array

function show_magician(magicians: string[]){
    magicians.forEach(name => console.log(name));
}

//define an Array containing magicians name
let magician_names = ["Harry poter","Hamza","Usman"]

//call the function to print each magician name
show_magician(magician_names);