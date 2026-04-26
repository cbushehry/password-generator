const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!#$%&*+/:;<=>?@^';

const generateBtn = document.querySelector("#generate");
const copyBtn = document.querySelector("#copy");
const lengthSlider = document.querySelector("#length-slider");
const lengthValue = document.querySelector("#length-value");
const errorMsg = document.querySelector("#error-msg");

lengthSlider.addEventListener("input", function() {
  lengthValue.textContent = lengthSlider.value;
});

function writePassword() {
  let passwordPool = '';

  if (document.querySelector("#include-uppercase").checked) passwordPool += upperCase;
  if (document.querySelector("#include-lowercase").checked) passwordPool += lowerCase;
  if (document.querySelector("#include-numbers").checked) passwordPool += numbers;
  if (document.querySelector("#include-symbols").checked) passwordPool += symbols;

  if (!passwordPool) {
    errorMsg.classList.remove("hidden");
    return;
  }

  errorMsg.classList.add("hidden");

  const passwordLength = parseInt(lengthSlider.value);
  const passwordText = document.querySelector("#password");
  passwordText.value = generatePassword(passwordPool, passwordLength);
}

function generatePassword(pool, length) {
  let password = '';
  const randomValues = new Uint32Array(length);
  crypto.getRandomValues(randomValues);
  for (let i = 0; i < length; i++) {
    password += pool.charAt(randomValues[i] % pool.length);
  }
  return password;
}

generateBtn.addEventListener("click", writePassword);

copyBtn.addEventListener("click", async function() {
  const passwordText = document.querySelector("#password");
  await navigator.clipboard.writeText(passwordText.value);
  alert("Password copied to clipboard!");
});
