let gntrPswdBtn = document.getElementById('gntrPswdBtn');
let pswdBox1 = document.getElementById('pswdBox1');
let pswdBox2 = document.getElementById('pswdBox2');
let msg1 = document.querySelector('.msg1');
let msg2 = document.querySelector('.msg2');
let radioBtn1 = document.getElementById('radioBtn1');
let radioBtn2 = document.getElementById('radioBtn2');

let characters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let symbols = [
  '~',
  '`',
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '_',
  '-',
  '+',
  '=',
  '{',
  '[',
  '}',
  ']',
  ',',
  '|',
  ':',
  ';',
  '<',
  '>',
  '.',
  '?',
  '/',
];
let pswdLimit = 15;
let newPswd = '';
gntrPswdBtn.addEventListener('click', () => {
  pswdBox1.innerHTML = '';
  pswdBox2.innerHTML = '';
  document.getElementById('copyIcon1').style.visibility = '';
  document.getElementById('copyIcon2').style.visibility = '';
  if (radioBtn1.checked === false && radioBtn2.checked === false) {
    for (let i = 0; i < pswdLimit; i++) {
      let pswd = Math.floor(Math.random() * characters.length);
      pswdBox1.innerHTML += characters[pswd];
    }
    for (let i = 0; i < pswdLimit; i++) {
      let pswd = Math.floor(Math.random() * characters.length);
      pswdBox2.innerHTML += characters[pswd];
    }
    document.getElementById('copyIcon1').style.visibility = 'visible';
    document.getElementById('copyIcon2').style.visibility = 'visible';
    document.getElementById('pswdBox1').style.background = '';
    document.getElementById('pswdBox2').style.background = '';
  }
  if (radioBtn1.checked === true && radioBtn2.checked === false) {
    newPswd = characters.concat(numbers);
    // console.log(newPswd);
    for (let i = 0; i < pswdLimit; i++) {
      let pswd = Math.floor(Math.random() * newPswd.length);
      pswdBox1.innerHTML += newPswd[pswd];
    }
    for (let i = 0; i < pswdLimit; i++) {
      let pswd = Math.floor(Math.random() * newPswd.length);
      pswdBox2.innerHTML += newPswd[pswd];
    }
    document.getElementById('copyIcon1').style.visibility = 'visible';
    document.getElementById('copyIcon2').style.visibility = 'visible';
    document.getElementById('pswdBox1').style.background = '';
    document.getElementById('pswdBox2').style.background = '';
  }
  if (radioBtn1.checked === false && radioBtn2.checked === true) {
    newPswd = characters.concat(symbols);
    // console.log(newPswd);
    for (let i = 0; i < pswdLimit; i++) {
      let pswdN = Math.floor(Math.random() * newPswd.length);
      pswdBox1.innerHTML += newPswd[pswdN];
    }
    for (let i = 0; i < pswdLimit; i++) {
      let pswdN = Math.floor(Math.random() * newPswd.length);
      pswdBox2.innerHTML += newPswd[pswdN];
    }
    document.getElementById('copyIcon1').style.visibility = 'visible';
    document.getElementById('copyIcon2').style.visibility = 'visible';
    document.getElementById('pswdBox1').style.background = '';
    document.getElementById('pswdBox2').style.background = '';
  }
  if (radioBtn1.checked === true && radioBtn2.checked === true) {
    newPswd = characters.concat(numbers, symbols);
    // console.log(newPswd);
    for (let i = 0; i < pswdLimit; i++) {
      let pswdN = Math.floor(Math.random() * newPswd.length);
      pswdBox1.innerHTML += newPswd[pswdN];
    }
    for (let i = 0; i < pswdLimit; i++) {
      let pswdN = Math.floor(Math.random() * newPswd.length);
      pswdBox2.innerHTML += newPswd[pswdN];
    }
    document.getElementById('copyIcon1').style.visibility = 'visible';
    document.getElementById('copyIcon2').style.visibility = 'visible';
    document.getElementById('pswdBox1').style.background = '';
    document.getElementById('pswdBox2').style.background = '';
  }
});

copy1 = () => {
  let copyText = pswdBox1.innerHTML;
  navigator.clipboard.writeText(copyText);
  msg1.classList.add('msgActive');
  setTimeout(() => {
    msg1.classList.remove('msgActive');
  }, 700);
  document.getElementById('pswdBox1').style.background = 'black';
  document.getElementById('pswdBox2').style.background = '';
};
copy2 = () => {
  let copyText = pswdBox2.innerHTML;
  navigator.clipboard.writeText(copyText);
  msg2.classList.add('msgActive');
  setTimeout(() => {
    msg2.classList.remove('msgActive');
  }, 700);
  document.getElementById('pswdBox2').style.background = 'black';
  document.getElementById('pswdBox1').style.background = '';
};

