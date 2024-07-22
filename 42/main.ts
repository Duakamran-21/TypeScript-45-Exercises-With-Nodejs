//define the function to show magicians name
function show_magicians(magicians:string[]){
    magicians.forEach(name => console.log(name));
}
//function to make magicians great through .map() it will modify array
function make_great(magicians: string[]){
   return magicians.map(name => `The Great ${name}`);
}

//define an Array of magicians name
let magician_names = ["harry poter","Hamza","Usman"]

//to call make great function to modif function name
let great_magicians = make_great(magician_names);

//call show magicians that show modified list of magicians
show_magicians(great_magicians);
