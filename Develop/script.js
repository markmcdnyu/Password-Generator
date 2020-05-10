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

let passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  let pwLength = prompt("How many characters would you like your password to be? (Please select a number between 8 and 128)");
// Get whatever the user inputs and turn it into an integer 
  pwLength = parseInt(pwLength);
  //define if it is in range of 8 - 128 chars
  if (pwLength >= 8 && pwLength <= 128) {
    passwordArray = [];
    generatedPassword =[];

  let useLowercase = confirm("Do you want to include lowercase characters? Cancel for 'no' and Okay for 'yes'");
  let useUppercase = confirm("Do you want to include uppercase characters? Cancel for 'no' and Okay for 'yes'");
  let useNumbers = confirm("Do you want to include numbers? Cancel for 'no' and Okay for 'yes'");
  let useSpecial = confirm("Do you want to include special characters? Cancel for 'no' and Okay for 'yes'");

  //then, need to check true or false for these confrims above


  let password = generatePassword(); //not sure if I need this ??




  }
//These are my throught on what I might need for logic and functions

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


**** ALSO NEED TO INPUT SOMETHING THAT WILL WARN USER WHEN A CRTITERA IS NOT MET*****
*/
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
