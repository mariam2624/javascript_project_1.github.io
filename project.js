// To grab the last letter of the string we do:
// var Mariam = "MariamShaukat"
// Mariam[Mariam.length-1]
// "t"

var FirstName = prompt("Your first name please: ");
var Lastname = prompt("Your last name please: ");
var Age = prompt("How old are you? ");
var Height = prompt("How tall are you?(in cm) ");
var Pet = prompt("What is your pet name? ")
alert("Thank you for the information ")


var NamCon = null;
var AgeCon = null;
var HeightCon = null;
var PetCon = null;

if (FirstName[0] === Lastname[0]) {
  NamCon = true;
}else {
  NamCon = false;
}

if (Age >20 && Age <30) {
  AgeCon = true;
}else {
  AgeCon = false;
}


if (Height >= 170) {
  HeightCon = true;
}else {
  HeightCon = false;
}

if (Pet[Pet.length-1] === "y") {
  PetCon = true;
} else {
  PetCon = false;
}


if(NamCon && AgeCon && HeightCon && PetCon){
  console.log("Welcome Spy!");
}else {
  console.log("Nothing to see here.");
}
