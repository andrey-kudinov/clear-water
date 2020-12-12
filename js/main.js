input = document.querySelectorAll(".input");
inputFalse = document.querySelectorAll(".input-user-false");
let validNameBln, validTelBln, validMailBln, validLocBln;

// проверка имени
function validName() {
  input[0].value = input[0].value.replace(/[^А-Яа-яЁё\s]/g, "");
  if (input[0].value != "" && input[0].value.length > 1) {
    console.log("имя верно");
    inputFalse[0].style.display = "none";
    validNameBln = true;
    validBtnOrder();
  } else {
    console.log("имя ошибка");
    inputFalse[0].style.display = "block";
    validBtnOrder();
  }
}

input[0].onchange = function () {
  validName();
};

// проверка телефона
function validTel() {
  console.log(`количество символов в номере ${input[1].value.length}`);
  console.log(`номер ${input[1].value}`);

  if (input[1].value.length == 22) {
    console.log("телефон верно");
    inputFalse[1].style.display = "none";
    validTelBln = true;
    validBtnOrder();
  } else {
    console.log("телефон ошибка");
    inputFalse[1].style.display = "block";
    validTelBln = false;
    validBtnOrder();
  }
}

input[1].onchange = function () {
  validTel();
};

// проверка почты
function validMail() {
  if (
    input[2].value.match(
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    )
  ) {
    console.log("почта верно");
    inputFalse[2].style.display = "none";
    validMailBln = true;
    validBtnOrder();
  } else {
    console.log("почта ошибка");
    inputFalse[2].style.display = "block";
    validMailBln = false;
    validBtnOrder();
  }
}

input[2].onchange = function () {
  validMail();
};

// проверка адреса
function validLoc() {
  input[3].value = input[3].value.replace(/[^А-Яа-яЁё0-9.,-\s]/g, "");
  if (input[3].value != "" && input[3].value.length > 1) {
    console.log("адрес верно");
    inputFalse[3].style.display = "none";
    validNameBln = true;
    validBtnOrder();
  } else {
    console.log("адрес ошибка");
    inputFalse[3].style.display = "block";
    validNameBln = false;
    validBtnOrder();
  }
}

input[3].onchange = function () {
  validLoc();
};

// проверка кнопки
function validBtnOrder() {
  if (
    validNameBln == true &&
    validMailBln == true &&
    validTelBln == true &&
    validLocBln == true
  ) {
    // document.querySelector(".button-user__send").disabled = false;
    // document.querySelector(".out__name").textContent = userName.value;
    // document.querySelector(".out__number").textContent = `№${getRandomInt(
    //   9999
    // )}`;
    // document.querySelector(".out__mail-user").textContent = userMail.value;
    // document.querySelector(".out__phone-user").textContent =
    //   "+7 (999) 000 - 11 - 22";
  } else {
    // document.querySelector(".button-user__send").disabled = true;
  }
}

// маска телефона
window.addEventListener("DOMContentLoaded", function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
    else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select();
    }
  }

  function mask(event) {
    let matrix = "+7 (___) ___ - __ - __",
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");
    if (def.length >= val.length) val = def;
    this.value = matrix.replace(/./g, function (a) {
      return /[_\d]/.test(a) && i < val.length
        ? val.charAt(i++)
        : i >= val.length
        ? ""
        : a;
    });
    if (event.type == "blur") {
      if (this.value.length == 2) this.value = "";
    } else setCursorPosition(this.value.length, this);
  }
  input[1].addEventListener("input", mask, false);
  input[1].addEventListener("focus", mask, false);
  input[1].addEventListener("blur", mask, false);
});

// количество воды
const btnPlus = document.querySelectorAll(".button-in__water-amount_plus");
const btnMinus = document.querySelectorAll(".button-in__water-amount_minus");
const amountNum = document.querySelectorAll(".in__water-amount_number");

let amountNumFirst = (amountNumSecond = amountNumThird = 0);

btnPlus[0].onclick = function () {
  amountNumFirst++;
  amountNum[0].textContent = `${amountNumFirst}`;
  console.log(`количество 18,9 л - ${amountNumFirst} штук`);
  sum()
};

btnMinus[0].onclick = function () {
  amountNumFirst--;
  if (amountNumFirst < 0) {amountNumFirst = 0}
  amountNum[0].textContent = `${amountNumFirst}`;
  console.log(`количество 18,9 л - ${amountNumFirst} штук`);
  sum()
};

btnPlus[1].onclick = function () {
  amountNumSecond++;
  amountNum[1].textContent = `${amountNumSecond}`;
  console.log(`количество 1,5 л - ${amountNumSecond} штук`);
  sum()
};

btnMinus[1].onclick = function () {
  amountNumSecond--;
  if (amountNumSecond < 0) {amountNumSecond = 0}
  amountNum[1].textContent = `${amountNumSecond}`;
  console.log(`количество 1,5 л - ${amountNumSecond} штук`);
  sum()
};
btnPlus[2].onclick = function () {
  amountNumThird++;
  amountNum[2].textContent = `${amountNumThird}`;
  console.log(`количество 0,5 л - ${amountNumThird} штук`);
  sum()
};

btnMinus[2].onclick = function () {
  amountNumThird--;
  if (amountNumThird < 0) {amountNumThird = 0}
  amountNum[2].textContent = `${amountNumThird}`;
  console.log(`количество 0,5 л - ${amountNumThird} штук`);
  sum()
};

// переключение состояний кнопок объема воды
const btnSize = document.querySelectorAll(".button-in__water-size");
const sizeActive = document.querySelectorAll(".btn-circle_active");
const sizePassive = document.querySelectorAll(".btn-circle_passive");
const amountDisplay = document.querySelectorAll(".in__water-amount");


function displaySize(number) {
  if (sizePassive[number].style.display == "none") {
    sizeActive[number].style.display = "none";
    sizePassive[number].style.display = "block";
    amountDisplay[number].style.display = "none";
    console.log(`кнопка ${number} - passive`);
  } else {
    sizeActive[number].style.display = "block";
    sizePassive[number].style.display = "none";
    amountDisplay[number].style.display = "block";
    console.log(`кнопка ${number} - active`);
  }
}

btnSize[0].onclick = function () {
  displaySize(0);
};

btnSize[1].onclick = function () {
  displaySize(1);
};

btnSize[2].onclick = function () {
  displaySize(2);
};

// подсчет итого
totalDisplay = document.querySelector(".in__sum-total_ruble")

function sum() {
  total = 220 * amountNumFirst + 175 * amountNumSecond + 270 * amountNumThird;
  totalDisplay.textContent = `${total}`
}

