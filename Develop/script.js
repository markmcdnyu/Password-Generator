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
function generatePassword() {
  let pwLength = prompt("How many characters would you like your password to be? (Please select a number between 8 and 128)");
  
  pwLength = parseInt(pwLength);
  if (pwLength >= 8 && pwLength <= 128) {
    passwordArray = [];
    generatedPassword =[];

  let useLowercase = confirm("Do you want to include lowercase characters? Cancel for 'no' and Okay for 'yes'");
  let useUppercase = confirm("Do you want to include uppercase characters? Cancel for 'no' and Okay for 'yes'");
  let useNumbers = confirm("Do you want to include numbers? Cancel for 'no' and Okay for 'yes'");
  let useSpecial = confirm("Do you want to include special characters? Cancel for 'no' and Okay for 'yes'");

  //then, need to use if/else to check true or false for these confrims above ...if (x === true)
  if (useLowercase === true) {
    passwordArray = passwordArray.concat(useLowercase);
  }
  if (useUppercase === true) {
    passwordArray = passwordArray.concat(useUppercase);
  }
  if (useNumbers === true) {
    passwordArray = passwordArray.concat(useNumbers);
  }
  if (useSpecial === true) {
    passwordArray = passwordArray.concat(useSpecial);
  }

  //Need a warning or signal to say "refresh the page" if nothing is choosen

  if ((useLowercase === false) && (useUppercase === false) && (useNumbers === false) && (useSpecial === false)) {
    cardDisplay.innerHTML = "ERROR - PLEASE SAY 'YES' TO ONE OF THE CATEGORIES OF CHARACTERS. REFRESH THE PAGE TO START OVER";
  }
}
else {
    cardDisplay.innerHTML = "ERROR - PLEASE SELECT A NUMBER BETWEEN 8 and 128. REFRESH THE PAGE TO START OVER";
  }
}
//Need a for loop to make the random selection and then display it
for (let i = 0; i < pwLength; i++) {
  let randomArray = Math.floor(Math.random() * passwordArray.length);
  generatedPassword.push(passwordArray[randomArray]);
};
return generatedPassword.join('');

function newPassword() {
  let password = writePassword();
  if (password != 0) {
    cardDisplay.innerHTML = "Your new password is below";
  }
  passwordText.innerText = password;
}
generateBtn.addEventListener("click", writePassword);