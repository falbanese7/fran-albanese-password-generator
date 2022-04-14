// Assignment Code
const generateBtn = document.querySelector("#generate");

let charNumber;
let wantsLowercase;
let wantsUppercase;
let wantsNumber;
let wantsSymbols;

// These functions will allow us to generate random characters based on the net-comber.com character set.

function lowerCaseGen() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
} 

function upperCaseGen() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
} 
  
function numberGen(){ 
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function symbolGen() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Define generatePassword function

function generatePassword() {

  let newPass = []; // newPass variable needs to be in the generatePassword function so that way it's reinitialized each time its run.

  let charNumber = window.prompt("How many characters would you like to have? Must be at least 8 characters and at most 128.");

  //The password cannot be created if the user selects cancel, so stop them from moving forward.

   if(!charNumber){
   window.alert("Please select the number of characters in your password.");

   //Check for character length. If the user inputs a number outside of the range, do not proceed.

  } else if (charNumber < 8 || charNumber > 128) {
    charNumber = window.alert("Your password must be between 8 and 128 characters.")
    
  } // Otherwise the function can continue.
  
    else {
    wantsLowercase = window.confirm("Do you want lowercase letters in your password?");
    wantsUppercase = window.confirm("Do you want uppercase letters in your password?");
    wantsNumber = window.confirm("Do you want numbers in your password?");
    wantsSymbols = window.confirm("Do you want symbols in your password?");
  }

    // Since the newPass variable is an array, we can use the push method to add the results of the functions to the array.

    if (wantsLowercase) {
        newPass.push(lowerCaseGen);
    }
    
    if (wantsUppercase) {
        newPass.push(upperCaseGen);
    }

    if (wantsNumber) {
        newPass.push(numberGen);
    }

    if (wantsSymbols) {
        newPass.push(symbolGen);
    }

    // Make sure to include a case for when no criteria is picked 

    if (!wantsLowercase && !wantsUppercase && !wantsNumber && !wantsSymbols) {
        window.alert("Please select at least one criteria.")
        return password = "Null"
    }

    let noPass = [];
    let combos = '';

    // This for loop will allow the user to keep generating new password combonations without refreshing the browser window.

    for (let i = 0; i < charNumber; i++) {
        combos += newPass[Math.floor(Math.random() * newPass.length)]();
        noPass.push(combos);
  }
    return combos;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);