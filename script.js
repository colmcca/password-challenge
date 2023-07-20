// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
}
// User selection prompts
function passwordChoice () {
  randomArray = [];
var passwordLength = window.prompt("Please choose a number between 8 and 128 for your password length.");

if (passwordLength < 8) {
  alert("Your password length must be at least 8 digits.");
  return "Please try again.";
}

if (passwordLength > 128) {
  alert("Your password length cannot exceed 128 digits.");
  return "Please try again.";
}

if (isNaN(passwordLength)) {
  alert("You must type a numerical value.")
  return "Please try again.";
}

if (!passwordLength) {
  return;
}

if (confirm("Do you want your password to include lowercase letters?")) {
  randomArray = randomArray.concat(lowerCase);
}

if (confirm("Do you want your password to include uppercase letters?")) {
  randomArray = randomArray.concat(upperCase);
}

if (confirm("Do you want your password to include numbers?")) {
  randomArray = randomArray.concat(numbers);
}

if (confirm("Do you want your password to include special characters?")) {
  randomArray = randomArray.concat(symbols);
}

return true;
}



// Write password to the #password input
function writePassword() {
  passwordChoice();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// variables

var passwordLength = 120
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/",";", ":", "<", ">", "?", "@", "[", "]"];
var randomArray = [];