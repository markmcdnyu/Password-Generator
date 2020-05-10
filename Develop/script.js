// Assignment Code
// let generateBtn = document.querySelector("#generate");

//Declare my variables
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = ["0","1","2","3","4","5","6","7","8","9"];
let specialChar = ["!","@","$","%","&","*","?","<",">","^","+","=","~","`","[","]","/","(",")","|",":",";","-","{","}","_"]; 
let passwordArray = [];
let generatedPassword = [];

//this is from the base code from class and will target the button
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let pwLength = prompt("How many characters would you like your password to be? (Please select a number between 8 and 128)");
  let useLowercase = confirm("Do you want to include lowercase characters? Cancel for 'no' and Okay for 'yes'");
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

//These are my throught on what I might need for logic and functions
  // if (pwLength >= 8 && ....) define if it is range 

    //  if lowercase == true
        //input come certain number of lowercase characters

    //  if (upper == true) {}
        //input come certain number of upper characters
    
    //  if numbers == true
        //input come certain number of number characters
    
    //  if specialcharcters == true
        //input come certain number of special characters characters

    // Need to join the true arrays together (might be charCode?)
    // floor turn into integer [ math.random] (select a position within the array)
    // i++

  passwordText.value = password;

}

//Functions needed 
/*

function hasNumbers (password){}

function hasLowercase (password){}

function hasUppercase (password){}

function hasSpecialCharacters (password){}

function  (password){}


*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
