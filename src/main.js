document.addEventListener("DOMContentLoaded", () => {
    const generateButton = document.getElementById("generate");
    generateButton.addEventListener("click", generatePassword);
});

function generatePassword() {
    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
    document.getElementById("passwordDisplay").textContent = createPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
}

function createPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:',.<>?";

    let allChars = "";
    if (includeUppercase) allChars += uppercase;
    if (includeLowercase) allChars += lowercase;
    if (includeNumbers) allChars += numbers;
    if (includeSymbols) allChars += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}
