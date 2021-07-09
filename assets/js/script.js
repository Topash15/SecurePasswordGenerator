// Assignment code here



// Uppercase letter array
var uppercaseString = "QWERTYUIOPASDFGHJKLZXCVBNM"
var uppercase = uppercaseString.split("");
//console.group(uppercase);

//Converting uppercase array to lowercase
var lowercaseString = uppercaseString.toLowerCase();
var lowercase = lowercaseString.split("");
//console.log(lowercase);

//Numeric array
var numeric = [1,2,3,4,5,6,7,8,9]

//Special Character array
var specialString = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"+'"'
var special = specialString.split("");
//console.log(special)

debugger;

//main function to generate the password
var generatePassword = function() {

    //prompts user for password length
  while (!passwordLength || passwordLength < 8 || passwordLength > 128){
    var passwordLength = prompt("How many characters should your password be? Enter a number between 8 and 128");
    if (passwordLength < 8 || passwordLength > 128){
      alert("Invalid selection. You must pick a number between 8 and 128!")
    }
  }
  //console.log(passwordLength)
  //Loop asking for user's character choices
  while(!passwordUpper && !passwordLower && !passwordNumeric & !passwordSpecial){
    //Asks if uppercase letters should be included
    var passwordUpper = confirm("Would you like to include uppercase letters?")
      //confirms user's choice
      if(passwordUpper === true){
        alert("Uppercase letters will be included");
      }else{
        alert("Uppercase letters will not be included.")
      }

    // Asks if lowercase letters should be included
    var passwordLower = confirm("Would you like to include lowercase letters?")
      //confirms user's choice
      if(passwordLower){
        alert("Lowercase letters will be included");
      }else{
        alert("Lowercase letters will not be included.")
      }

    //Asks if numbers should be included
    var passwordNumeric = confirm("Would you like to include numbers?")
      //confirms user's choice
      if(passwordNumeric){
        alert("Numbers will be included");
      }else{
        alert("Numbers will not be included.")
      }

    //Asks if special characters should be included
    var passwordSpecial = confirm("Would you like to include special characters?")
      //confirms user's choice
      if(passwordSpecial){
        alert("Special characters will be included");
      }else{
        alert("Special characters will not be included.")
      }

    //confirms that at least one type of character has been selected
    if(!passwordUpper && !passwordLower && !passwordNumeric & !passwordSpecial){
      alert("You must select at least one character type!")
    }
  };

  //generates the password
  var createPassword = function() {

    //empty array of possible characters
    var possibleCharacters = [];

    //series of if statements add correct characters to the possible characters array
    if (passwordUpper){
      possibleCharacters.push(...uppercase);
    }
    if (passwordLower){
      possibleCharacters.push(...lowercase);
    }
    if (passwordNumeric){
      possibleCharacters.push(...numeric);
    }
    if (passwordSpecial){
      possibleCharacters.push(...special);
    }
    //console.log(possibleCharacters)

    var finalPassword = [];

    //for loop to create password from array
    for ( var i = 0; i < passwordLength; i++){
      let character = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
      finalPassword.push(character);
    };

    //converts finalpassword array to a string
    var finalPasswordString = finalPassword.join("");
    return finalPasswordString;
  };
  //console.log(finalPasswordString)
  return createPassword();
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

//~~~~Start proof of concept~~~~


//Proof of concept for creating password
//var newpassword = (numeric[4]+lowercase[3]+uppercase[3]).toString()
//console.log(newpassword)
