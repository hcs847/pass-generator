// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function to produce a password based on criteria
function generatePassword() {
  //variable for possible password characters
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var uperCase = "ABCDEFGHIJKLMNOPQRST";
  var digits = "0123456789"
  var symbols = "@!#$%&*"

  // user promps
  var passLength = window.prompt("What is the passwrod length? ");
  // converting prompt from text to integer 
  passLength = parseInt(passLength);
  var upCaseCnfrm = window.confirm("Would you like to include uppercase letters?")
  var symbolCnfrm = window.confirm("Would you like to include symbols?")
  var digitsCnfrm = window.confirm("Would you like to include digits?")
  var generPass = '';

  // selecting random lowercase characters
  for (i = 0; i < (passLength - 3); i++) {
    n = randomNum(lowerCase);
    generPass += lowerCase.charAt(n);
  }

  // adding character types per user request
  if (upCaseCnfrm) {
    generPass += uperCase.charAt(randomNum(uperCase));
  };
  if (symbolCnfrm) {

    generPass += symbols.charAt(randomNum(symbols));
  };
  if (digitsCnfrm) {
    generPass += digits.charAt(randomNum(digits));

  };
  return generPass;
};

function randomNum(chartrs) {
  var randomI = Math.floor(Math.random() * (chartrs.length + 1));
  return randomI;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(generatePassword());