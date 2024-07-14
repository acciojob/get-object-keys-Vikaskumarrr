//your JS code here. If required.
let student = { 
    name: "vikas",
	getkeys : function(){ 
    return Object.keys(this);
		}
}

// Object.prototype.getkeys = function(){ 
//     return Object.keys(this);
// }

const key = student.getkeys();
console.log(key);