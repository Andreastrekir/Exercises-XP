//Exercise 1: Simple If/Else Statement
let x = 5;
let y = 2;

if (x > y){
	console.log("X is the biggest number");
} 
else {
	console.log("y is the biggest number")
}

//-------------------------------------------------------------
//Exercise 2: Chihuahua

var newDog = "Chihuahua";
var Chihuahua = "Chihuahua";
var numero = newDog.length;
console.log(numero);
console.log(newDog.toLowerCase());
console.log(newDog.toUpperCase());

if (newDog === Chihuahua){
	console.log("I love Chihuahuas, it is my favorite dog breed")
} else {
	console.log("I dont care, I prefer cats")}

//------------------------------------------------------------------------>
//Exercise 3: Even Or Odd

let userNumber = parseInt(prompt("Enter a number"));
function checkNumber (){
     if (userNumber % 2 === 0)
     {
  console.log('${userNumber} is even')
}
	else {
	console.log('${userNumber} is odd')
 }

// ----------------------------------------------------------------------->
//Exercise 4: Group Chat
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"]

	if (users === 0){
	console.log("No one is online")
} 
	if(users == 1){
	console.log('${user[0]} is online')
} 
	if(users ==1 && users == 2){
	console.log("${user[0]} and ${user[1]} are online")
} 
	if(users ==1 && users == 2){
	console.log("${users[0]} , ${users[1]} and ${3 more} are online")
}













































