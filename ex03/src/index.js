var myPetsArray = ["Dog", "Cat"];
function myArrayFunction(myPets) {
  var myNewPets = [...myPets];
  myNewPets.push("Bird", "Fish");
  myNewPets.pop();
  myNewPets.shift();
  myNewPets.unshift("Lion");
  firstPet = myNewPets[0];
  lastPet = myNewPets[2];
  return myNewPets;
}
console.log(myArrayFunction(myPetsArray));
module.exports = myArrayFunction;
