const passwordBox = document.getElementById('mdp');
const length = 12;

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=}{[]><.?\/|';

const allChars = upperLetters + lowerLetters + numbers + symbols;

function creeMdp() {
    var password = "";

    password += upperLetters.charAt(Math.floor(Math.random() * upperLetters.length));
    password += lowerLetters.charAt(Math.floor(Math.random() * lowerLetters.length));
    password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    password += symbols.charAt(Math.floor(Math.random() * symbols.length));

    while (password.length < length) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    passwordBox.value = password;
}