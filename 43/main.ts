//define the function to show magicians name
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
//function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

//define an Array of magicians name
let magician_names = ["Harry poter","Hamza","Usman"]


//making a copy of Original Array through .slice() function 
let copy_magician_names = magician_names.slice() 

//modify the copied Array to include "the great" with their name
let copy_great_magician = make_great(copy_magician_names);

//show both arrays original and copied

//original
console.log("Original Array\n");
show_magicians(magician_names);

//copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magician);