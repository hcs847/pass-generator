// Assignment Code

// function to produce a password based on criteria
function generatePassword() {
  //variable for possible password characters
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var uprCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var digit = "0123456789";
  var symbol = "@!#$%&*'()+,-./:<;=>?[]`{}~\"";

  var generPass = "";

  // extracting selected criteria based on promps
  var selctdCriteria = getPassCriteria();

  // iterating through char types to get random characters
  var lowerCases = selctdCriteria[1];
  if (lowerCases > 0) {
    for (i = 0; i < lowerCases; i++) {
      n = randomNum(lowerCase);
      if (!generPass.includes(lowerCase.charAt(n))) {
        generPass += lowerCase.charAt(n);
      } else {
        i--;
      }
    }
  }

  var uprCases = selctdCriteria[2];
  if (uprCases > 0) {
    for (i = 0; i < uprCases; i++) {
      n = randomNum(uprCase);
      if (!generPass.includes(uprCase.charAt(n))) {
        generPass += uprCase.charAt(n);
      } else {
        i--;
      }
    }
  }
  var symbols = selctdCriteria[3];
  if (symbols > 0) {
    for (i = 0; i < symbols; i++) {
      n = randomNum(symbol);
      if (!generPass.includes(symbol.charAt(n))) {
        generPass += symbol.charAt(n);
      } else {
        i--;
      }
    }
  }

  var digits = selctdCriteria[4];
  if (digits > 0) {
    for (i = 0; i < digits; i++) {
      n = randomNum(digit);
      if (!generPass.includes(digit.charAt(n))) {
        generPass += digit.charAt(n);
      } else {
        i--;
      }
    }
  }
  return randomString(generPass);
}

// function to randomize selection of index
function randomNum(chartrs) {
  var randomI = Math.floor(Math.random() * (chartrs.length + 1));
  return randomI;
}

// function to randomize order of characters in password
function randomString(string) {
  var newString = "";
  var charN = "";
  for (i = 0; i < string.length; i++) {
    charN = string.charAt(randomNum(string));
    if (!newString.includes(charN)) {
      newString += charN;
    } else {
      i--;
    }
  }
  return newString;
}

// function to extract password length and character types
function getPassCriteria() {
  criteria = [];

  // converting prompt from text to integer
  var passLength = parseInt(
    window.prompt("What is the passwrod length? (can be 8 to 128 characters)")
  );
  if (!passLength || isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Please enter a numeric value between 8 to 128.");
    return getPassCriteria();
  }

  var lwrCaseConfrm = window.confirm(
    "Would you like to include lowercase letters?"
  );
  if (lwrCaseConfrm) {
    var lwrCaseNum = parseInt(
      window.prompt("How many characters should be lowercase?")
    );
  }
  if (!lwrCaseConfrm || !lwrCaseNum || isNaN(lwrCaseNum)) {
    var lwrCaseNum = 0;
  }

  var upCaseCnfrm = window.confirm(
    "Would you like to include uppercase letters?"
  );
  if (upCaseCnfrm) {
    var upCaseNum = parseInt(
      window.prompt("How many characters should be uppercase?")
    );
  }
  if (!upCaseCnfrm || !upCaseNum || isNaN(upCaseNum)) {
    var upCaseNum = 0;
  }

  var symbolCnfrm = window.confirm("Would you like to include symbols?");
  if (symbolCnfrm) {
    var symbolNum = parseInt(
      window.prompt("How many characters should be symbols?")
    );
  }
  if (!symbolCnfrm || !symbolNum || isNaN(symbolNum)) {
    var symbolNum = 0;
  }

  var digitsCnfrm = window.confirm("Would you like to include digits?");
  if (digitsCnfrm) {
    var digitsNum = parseInt(
      window.prompt("How many characters should be digits?")
    );
  }
  if (!digitsCnfrm || !digitsNum || isNaN(digitsNum)) {
    var digitsNum = 0;
  }

  if (
    (lwrCaseNum === 0 &&
      upCaseNum === 0 &&
      symbolNum === 0 &&
      digitsNum === 0) ||
    upCaseNum + symbolNum + digitsNum + lwrCaseNum != passLength
  ) {
    alert(
      "Please enter a numeric value for at least one character types and ensure sum of character types equal password length"
    );
    return getPassCriteria();
  }

  criteria.push(passLength, lwrCaseNum, upCaseNum, symbolNum, digitsNum);
  return criteria;
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
