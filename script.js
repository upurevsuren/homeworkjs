// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    var lenght_password = prompt("Please enter length of the password", "8");
    if(lenght_password > 128 || lenght_password < 8) {
        alert("Password length should between 8 and 128 characters");
    }

  var password = generatePassword(lenght_password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(length) {
    var length = length,
        lowerCase = "abcdefghijklmnopqrstuvwxyz",
        upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        numeric = "0123456789",
        specialCharacters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

        charset = lowerCase + upperCase + numeric + specialCharacters,
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}