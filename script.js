//your JS code here. If required.
let student = { 
    name: "vikas"
}

Object.prototype.getkeys = function(){ 
    return Object.keys(this);
}

const keys = student.getkeys();
console.log(keys);