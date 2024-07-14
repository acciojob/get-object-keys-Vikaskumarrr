//your JS code here. If required.
let student = { 
    name: "vikas",
    age : 21
}

Object.prototype.getkeys = function(){ 
    return Object.keys(this);
}

const keys = student.getkeys();
console.log(keys);