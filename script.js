const passwordBox = document.getElementById("password");
const passwordLength = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const specialChar = "!@#$%^&*()_+";
const numbers = "0123456789";


const allCharacters = upperCase + lowerCase + specialChar + numbers;

function generatePassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += specialChar[Math.floor(Math.random() * specialChar.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while (password.length < passwordLength) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
    alert("Password copied to clipboard");
}