// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Random Generator Functions

function randomLower() {
 var lowerCase = "abcdefghijklmnopqrstuvwxyz";
 return lowerCase[Math.floor(Math.random() * lowerCase.length)]; 
}

function randomUpper() {
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upperCase[Math.floor(Math.random() * upperCase.length)];
}

function randomNumber() {
  var number = "0123456789";
  return number[Math.floor(Math.random() * number.length)];
}

function randomSymbol() {
  var symbol = " !'#$%&()*+,-./:;<=>?@[]^_`{|}~"
  return number[Math.floor(Math.random() * symbol.length)];
}