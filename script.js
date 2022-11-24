// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword(){
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"
  var uppercase = "IDOWHATISREQUIRED"
  var numbers = "0123456789"
  var symbols = "!@#$%^&*()_+~"

  var passwordLength = parseInt(prompt("Please enter a valid length(8-126)?"))

  if(passwordLength<8 || passwordLength>126 || isNaN(passwordLength)){
    return "Inavlid Length entered.... Please enter a valid length"
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
