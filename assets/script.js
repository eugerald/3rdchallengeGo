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
  var upperCase = "IDOWHATISREQUIRED"
  var numbers = "0123456789"
  var symbols = "!@#$%^&*()_+~"

  var passwordLength = parseInt(prompt("Please enter a valid length(8-126)?"))

  if(passwordLength<8 || passwordLength>126 || isNaN(passwordLength)){
    return "Inavlid Length entered.... Please enter a valid length"
  }
  var acceptLowerCase = confirm("Do you like lowecase letters in your password?")

  var acceptUpperCase = confirm("Do you like Uppercase letters in your password?")

  var acceptNumbers  = confirm("Do you like numbers in your password?") 

  var acceptSymbols = confirm("Do you like symbols  in your password?")

  var userChoices = []

  if (acceptLowerCase){
    userChoices += lowerCase
  }

  
  if (acceptUpperCase){
    userChoices += upperCase
  }

  if (acceptNumbers){
    userChoices += numbers
  }

  if (acceptSymbols){
    userChoices += symbols
  }

   console.log(userChoices)
    if(userChoices.length === 0){
      return "Please choose at least one option......."
    }

    var password =""
    for(let i=0;i<passwordLength;i++){
      var index = Math.floor(Math.random() * userChoices.length)
      password += userChoices[index]
    }
    return password

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
