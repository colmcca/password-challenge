// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
var passwordLength = window.prompt("Please choose a number between 8 and 128 for your password length.");

if (passwordLength < 8) {
  alert("Your password lenght must be at least 8 digits.");
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
  randomLower();
}

if (confirm("Do you want your password to include uppercase letters?")) {
  randomUpper();
}

if (confirm("Do you want your password to include numbers?")) {
  randomNumber();
}

if (confirm("Do you want your password to include special characters?")) {
  randomSymbol();
}


  return "This is your password"
}

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