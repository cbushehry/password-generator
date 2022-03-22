 // Global var
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!#$%&*+/:;<=>?@^';
var passwordLength = 0;
var passwordPool = '';


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  prompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

   // resets passwordLength and passWordPool so new password and criteria can be generated
   passwordLength = 0;
   passwordPool = '';
}

var prompts = function () {
  
  // Asks for a password length and loops if incorrect criteria is entered
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    passwordLength = window.prompt('How long do you want your password to be? (please enter 8-128)');
    passwordLength = parseInt(passwordLength);

    if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
      window.alert("Please enter a number between 8 and 128");
    }
  }

  // Asks what should be included in the password and loops if none are selected
  while (!passwordPool) {
    var includeUpper = window.confirm('Do you want to include upper case letters in the password? (Confirm for yes, cancel for no)');
    if (includeUpper) {
      passwordPool = passwordPool.concat(upperCase);
    }

    var includeLower = window.confirm('Do you want to include lower case letters in the password? (Confirm for yes, cancel for no)');
    if (includeLower) {
      passwordPool = passwordPool.concat(lowerCase);
    }

    var includeNumbers = window.confirm('Do you want to include numbers in the password? (Confirm for yes, cancel for no)');
    if (includeNumbers) {
      passwordPool = passwordPool.concat(numbers);
    }

    var includeSymbols = window.confirm('Do you wnat to include symbols in the password? (Confirm for yes, cancel for no)');
    if (includeSymbols) {
      passwordPool = passwordPool.concat(symbols);
    }

    if (!passwordPool) {
      window.alert("Please select at least one criteria for the password");
    }
  }
}

var generatePassword = function() {
  var password = '';
  // loops for length entered by user and concatenates random passwordPool to password var
  for (i = 0; i < passwordLength; i++) {
    var rand = Math.floor(Math.random() * passwordPool.length);
    var nextRand = passwordPool.charAt(rand);
    password = password.concat(nextRand);
  }
  window.alert("Your password is!: " + password);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
