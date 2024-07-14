//your JS code here. If required.
function addGetKeysMethod() {
    Object.prototype.getKeys = function() {
        return Object.keys(this);
    }
}

addGetKeysMethod();

let student = { 
    name: "vikas",
}

const key = student.getKeys();
console.log(key);

