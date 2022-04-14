const buttonNewPassword = document.querySelector(".generator__button");
const resultPassword = document.querySelector(".generator__result");

generatePassword();

buttonNewPassword.addEventListener("click", generatePassword);

const inputNumber = document.querySelector("input[type=number]");
inputNumber.addEventListener("input", (e) => {
  const value = +inputNumber.value;
  if (value > 20) {
    inputNumber.value = 20;
  }
     else if (value < 1) {
      inputNumber.value = '';
    }
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePassword() {
  const passwordLength = document.querySelector("#password-length").value;
  console.log(passwordLength);
  const lowerCaseOption = document.querySelector("#lower-case").checked;
  const UpperCaseOption = document.querySelector("#upper-case").checked;
  const symbolsOption = document.querySelector("#symbols").checked;
  const numbersOption = document.querySelector("#numbers").checked;

  if (lowerCaseOption + UpperCaseOption + symbolsOption + numbersOption == 0) {
    return;
  }
  if (passwordLength === '') {
    resultPassword.textContent = "Введите число от 1 до 20";
    return;
  }

  let result = "";
  for (let i = 0; i < passwordLength; i++) {
    const randomNumber = generateRandomNumber(0, 3);
    if (randomNumber === 0 && lowerCaseOption) {
      result += String.fromCharCode(generateRandomNumber(97, 122));
    } else if (randomNumber === 1 && UpperCaseOption) {
      result += String.fromCharCode(generateRandomNumber(65, 90));
    } else if (randomNumber === 2 && symbolsOption) {
      const symbols = '`~@"#$;%:^?&*()_-+=/';
      result += symbols[generateRandomNumber(0, symbols.length - 1)];
    } else if (randomNumber === 3 && numbersOption) {
      result += generateRandomNumber(0, 9);
    } else {
      i--;
    }
  }
  resultPassword.textContent = result;
}
