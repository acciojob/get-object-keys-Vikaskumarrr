//your JS code here. If required.
function getThekeys (){
	Object.prototype.getkeys= function(){
		return Object.keys(this);
	}
}

getThekeys();

let student = {
	name: "vikas"
}

const key = student.getkeys();
console.log(key);

