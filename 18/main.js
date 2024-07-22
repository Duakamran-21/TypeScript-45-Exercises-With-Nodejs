var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Making a Array of Countries and print its Original Order
var countriesToVisit = ["China", "Denmark", "Brazil", "Argentina"];
console.log("Original Order:", countriesToVisit);
//print the Array in Alphabetical Order without modifying the actual list
console.log("Alphabetical Order:", __spreadArray([], countriesToVisit, true).sort());
//show that the Array is stil in its Original Order
console.log("Still in Orignal Order:", countriesToVisit);
//print the Array in Reversed Order without modifying the actual Array list
console.log("Reverse Order:", __spreadArray([], countriesToVisit, true).reverse());
//show that the Array is stil in its Original Order
console.log("Still in Orignal Order:", countriesToVisit);
//we have changed the Original Array Order now
console.log("Original Array Reversed:", countriesToVisit.reverse());
//print the Array to show that it's back to it's Original Order
console.log("Back to Original Order:", countriesToVisit.reverse());
//ptint the Array to show that it's Order has been changed in Alphabetical Order now
console.log("Sorted in Alphabetical Order:", countriesToVisit.sort());
//we have changed again the Original Array Order Now in reverse order again
console.log("Original Array Reversed again:", countriesToVisit.reverse());
