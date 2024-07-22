//Array of current users
var current_users = ["Usman", "ali", "Areeba", "Zain", "Osama",];
//Array of new users
var new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "areeba"];
//Loop through new_users to check for usernames availability
new_users.forEach(function (new_one_user) {
    //makig a condition for username already exist and save in our_condition variable
    var our_condition = (current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); }));
    //print diffrent massage usinig if-else statements
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, ", is already taken"));
    }
    else {
        console.log("This Username ".concat(new_one_user, ", is available"));
    }
});
