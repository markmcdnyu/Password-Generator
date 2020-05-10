// JavaScript: Password Generator

//Declare my variables here. Decided on arrays.
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let numbers = ["0","1","2","3","4","5","6","7","8","9"];
let specialChar = ["!","@","$","%","&","*","?","<",">","^","+","=","~","`","[","]","/","(",")","|",":",";","-","{","}","_"]
let passwordArray = [];
let generatedPassword = [];

//This is from the base code from class and will target the button
var generateBtn = document.querySelector("#generate");
let passwordText = document.querySelector("#password");

//Grabbing this element because this will be the place I put the warning about not adhereing to the instructions
let cardDisplay = document.getElementById("cardDisplay");

// Function to begin generating the password 
function generatePassword() {
  let pwLength = prompt("How many characters would you like your password to be? (Please select a number between 8 and 128)");
  
  //Need to check and see if what the user put into the prompt text area fits between 8 and 128 characters
  pwLength = parseInt(pwLength);
  if (pwLength >= 8 && pwLength <= 128) {
    passwordArray = [];
    generatedPassword =[];

    //Use confirm and prompts like the acceptance critera says. Version 2 I would use the web interface and interactive elements because the prompt and confirm aren't the most visually appealing 
    let useLowercase = confirm("Do you want to include lowercase characters? Cancel for 'no' and Okay for 'yes'");
    let useUppercase = confirm("Do you want to include uppercase characters? Cancel for 'no' and Okay for 'yes'");
    let useNumbers = confirm("Do you want to include numbers? Cancel for 'no' and Okay for 'yes'");
    let useSpecial = confirm("Do you want to include special characters? Cancel for 'no' and Okay for 'yes'");

    //Put the if/else statements to confirm what the user selected, then concat to the array
    if (useLowercase === true) {
    passwordArray = passwordArray.concat(lowerCase);
    }
    if (useUppercase === true) {
    passwordArray = passwordArray.concat(upperCase);
    }
    if (useNumbers === true) {
    passwordArray = passwordArray.concat(numbers);
    }
    if (useSpecial === true) {
    passwordArray = passwordArray.concat(specialChar);
    }

    //Need to account for when someone either puts in less than 8 characters, more than 128 characters, or selects no to everything
    if ((useLowercase === false) && (useUppercase === false) && (useNumbers === false) && (useSpecial === false)) {
      cardDisplay.innerHTML = "ERROR - PLEASE SAY 'YES' TO ONE OF THE CATEGORIES OF CHARACTERS. REFRESH THE PAGE TO START OVER";
    }
   } else {
    cardDisplay.innerHTML = "ERROR - PLEASE SELECT A NUMBER BETWEEN 8 and 128. REFRESH THE PAGE TO START OVER";
  }

  //Need a for loop to run to through the number of characters selected by the user
  for (let i = 0; i < pwLength; i++) {
    let randomArray = Math.floor(Math.random() * passwordArray.length);
    generatedPassword.push(passwordArray[randomArray]);
  };
  return generatedPassword.join(' ');
};

//Need a function to write the newly generated password with the selected criteria
function writePassword() {
  var password = generatePassword();
  if (password != 0) {
    cardDisplay.innerHTML = "Your new password is below";
  }
  passwordText.innerText = password;
}

//Class code for the button -- addEventListner 
generateBtn.addEventListener("click", writePassword);