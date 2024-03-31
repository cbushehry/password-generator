// Global variables
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var symbols = '!#$%&*+/:;<=>?@^';
var passwordLength = 0;
var passwordPool = '';

// Get references to the elements
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy"); // New button for copying password

// Write password to the #password input
function writePassword() {
  prompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Resets passwordLength and passwordPool for new generation
  passwordLength = 0;
  passwordPool = '';
}

function prompts() {
  // Asks for password length and criteria, building passwordPool
  while (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt('How long do you want your password to be? (please enter 8-128)');
    passwordLength = parseInt(passwordLength);

    if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
      alert("Please enter a number between 8 and 128");
    }
  }

  while (!passwordPool) {
    if (confirm('Do you want to include upper case letters in the password?')) {
      passwordPool = passwordPool.concat(upperCase);
    }

    if (confirm('Do you want to include lower case letters in the password?')) {
      passwordPool = passwordPool.concat(lowerCase);
    }

    if (confirm('Do you want to include numbers in the password?')) {
      passwordPool = passwordPool.concat(numbers);
    }

    if (confirm('Do you want to include symbols in the password?')) {
      passwordPool = passwordPool.concat(symbols);
    }

    if (!passwordPool) {
      alert("Please select at least one criteria for the password");
    }
  }
}

function generatePassword() {
  var password = '';
  for (i = 0; i < passwordLength; i++) {
    var rand = Math.floor(Math.random() * passwordPool.length);
    var nextRand = passwordPool.charAt(rand);
    password = password.concat(nextRand);
  }
  return password; // Returns the generated password directly
}

// Event listener for the generate button
generateBtn.addEventListener("click", writePassword);

// Event listener for the copy to clipboard button
copyBtn.addEventListener("click", function() {
  var passwordText = document.querySelector("#password");
  passwordText.select(); // Select the password text
  document.execCommand("copy"); // Copy the selected text
  alert("Password copied to clipboard!"); // Optional feedback
});
