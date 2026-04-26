// Global variables
const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!#$%&*+/:;<=>?@^';
let passwordLength = 0;
let passwordPool = '';

// Get references to the elements
const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy"); // New button for copying password

// Write password to the #password input
function writePassword() {
  prompts();
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

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
  let password = '';
  for (i = 0; i < passwordLength; i++) {
    const rand = Math.floor(Math.random() * passwordPool.length);
    const nextRand = passwordPool.charAt(rand);
    password = password.concat(nextRand);
  }
  return password; // Returns the generated password directly
}

// Event listener for the generate button
generateBtn.addEventListener("click", writePassword);

// Event listener for the copy to clipboard button
copyBtn.addEventListener("click", async function() {
  const passwordText = document.querySelector("#password");
  await navigator.clipboard.writeText(passwordText.value);
  alert("Password copied to clipboard!"); // Optional feedback
});
