// Global var
var arraySplit = ""; 
var exitApplication = false; 
var userInput = ""; 
var finalPassword = ""; 
var displayPassword = ""; 

var pCriteria = {
  lowercase: { indexNumber: 0 , criteria: "abcdefghijklmnopqrstuvwxyz"
  },
  uppercase: { indexNumber: 1, criteria: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  },
  numeric: { indexNumber: 2, criteria: "0123456789"
  },
  symbols: { indexNumber: 3, criteria: "!\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"
  }
}



//function to generate password criteria
var generatePassword = function() {

  arraySplit = "";
  exitApplication = false;
  userInput = ""; 
  finalPassword = ""; 
  displayPassword = ""; 

  window.alert("The criteria for password generator are lowercase, uppercase, numeric, and/or special characters.");








}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
