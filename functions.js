var getDieRoll = function() {
	console.log("rolling a die");
	return Math.ceil(6 * Math.random());
};

var firstDie = getDieRoll();
var secondDie = getDieRoll();

console.log(firstDie);
console.log(secondDie);
console.log(firstDie + secondDie);

