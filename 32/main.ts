//Array of current users
let current_users = ["Usman","ali","Areeba","Zain","Osama",]

//Array of new users
let new_users = ["Hamza","Ayesha","Ali","Mahad","areeba"]

//Loop through new_users to check for usernames availability

new_users.forEach(new_one_user => {
    //makig a condition for username already exist and save in our_condition variable
    let our_condition =(current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase()))
  
    //print diffrent massage usinig if-else statements
    if(our_condition){
        console.log(`Sorry ${new_one_user}, is already taken`)
    }else{
        console.log(`This Username ${new_one_user}, is available`)
    }
})