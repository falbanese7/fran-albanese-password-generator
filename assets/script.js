// Assignment Code
const generateBtn = document.querySelector("#generate");

let charNumber;
let wantsLowercase;
let wantsUppercase;
let wantsNumber;
let wantsSymbols;
let newPass;

// Variables for characters
let lowerCaseGen = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

let upperCaseGen = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  
let numberGen = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

let symbolGen = String.fromCharCode(Math.floor(Math.random() * 16) + 32);


// Define generatePassword function
function generatePassword() {
  let charNumber = window.prompt("How many characters would you like to have? Must be more than 8 and less than 128");

  //The password cannot be created if the user selects cancel, so stop them from moving forward.
  if(!charNumber){
   window.alert("Please select the number of characters in your password.");

   //Check for character lenght. If the user inputs a number outside of the range, do not proceed.. 
  } else if (charNumber < 8 || charNumber > 128) {
    charNumber = window.prompt("Your password must be between 8 and 128 characters.")

    
  } // Otherwise the function can continue.
  
    else {
    wantsLowercase = window.confirm("Do you want lowercase letters in your password?");
  
    wantsUppercase = window.confirm("Do you want uppercase letters in your password?");
  
    wantsNumber = window.confirm("Do you want numbers in your password?");
  
    wantsSymbols = window.confirm("Do you want symbols characters in your password?");
  };

    if (!wantsLowercase && !wantsUppercase && !wantsNumber && !wantsSymbols) {
    window.alert("Please select at least one criteria.")

    // If the user selects all criteria.
  } else if (wantsLowercase && wantsUppercase && wantsNumber && wantsSymbols) {
    newPass = lowerCaseGen.concat(upperCaseGen, numberGen, symbolGen);

  } 
  // If the user only selects 3 criteria.

    else if (wantsLowercase && wantsUppercase && wantsNumber) {
    newPass = lowerCaseGen.concat(upperCaseGen, numberGen);

  } else if (wantsLowercase && wantsUppercase && wantsSymbols) {
    newPass = lowerCaseGen.concat(upperCaseGen, symbolGen);
  
  } else if (wantsUppercase && wantsUppercase && wantsSymbols) {
    newPass = upperCaseGen.concat(numberGen, symbolGen);

  } else if (wantsLowercase && wantsNumber && wantsSymbols) {
    newPass = lowerCaseGen.concat(numberGen, symbolGen);
  
  }
   // If the user only wants 2 criteria.
  
    else if (wantsLowercase && wantsUppercase) {
    newPass = lowerCaseGen.concat(upperCaseGen);
  
  } else if (wantsLowercase && wantsNumber) {
    newPass = lowerCaseGen.concat(numberGen);
  
  } else if (wantsLowercase && wantsSymbols) {
    newPass = lowerCaseGen.concat(symbolGen);
  
  } else if (wantsUppercase && wantsNumber) {
    newPass = upperCaseGen.concat(numberGen);
  
  } else if (wantsUppercase && wantsSymbols) {
    newPass = upperCaseGen.concat(symbolGen);
  
  } else if (wantsNumber && wantsSymbols) {
    newPass = numberGen.concat(symbolGen);
  
  } 

  // If the user only wants one 1 criteria.

    else if (wantsLowercase) {
    newPass = lowerCaseGen;
  
  } else if (wantsUppercase) {
    newPass = upperCaseGen;
  
   }else if (wantsNumber) {
    newPass = numberGen;
  
  } else if (wantsSymbols) {
    newPass = numberGen;
  }

  let noPass = [];

  for (let i = 0; i < charNumber; i++) {
    const combos = newPass[Math.floor(Math.random() * newPass.length)];
    noPass.push(combos);
  }
    return newPass;
};


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);