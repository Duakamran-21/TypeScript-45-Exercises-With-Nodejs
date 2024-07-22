let userNames = ["Mahad","Ali","Zeeshan","Admin","Usman"];
userNames = []

if (userNames.length === 0 ){
console.log("your Array is Empty We Need to find some users!")
}else{
    userNames.forEach(oneUser=> {
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${oneUser}, Thank you for logging in again`)
        }
    })

}