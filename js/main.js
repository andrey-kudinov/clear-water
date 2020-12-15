input = document.querySelectorAll(".input");
inputFalse = document.querySelectorAll(".input-user-false");
let validNameBln, validTelBln, validMailBln, validLocBln, validCheckBln;

// проверка имени
function validName() {
  input[0].value = input[0].value.replace(/[^А-Яа-яЁё\s]/g, "");
  if (input[0].value != "" && input[0].value.length > 1) {
    // console.log("имя верно");
    inputFalse[0].style.display = "none";
    validNameBln = true;
    validBtnOrder();
    validBtnNext();
  } else {
    // console.log("имя ошибка");
    inputFalse[0].style.display = "block";
    validNameBln = false;
    validBtnOrder();
    validBtnNext();
  }
}

input[0].onchange = function () {
  validName();
};

// проверка телефона
function validTel() {
  // console.log(`количество символов в номере ${input[1].value.length}`);
  // console.log(`номер ${input[1].value}`);
  if (input[1].value.length == 22) {
    // console.log("телефон верно");
    inputFalse[1].style.display = "none";
    validTelBln = true;
    validBtnOrder();
    validBtnNext();
  } else {
    // console.log("телефон ошибка");
    inputFalse[1].style.display = "block";
    validTelBln = false;
    validBtnOrder();
    validBtnNext();
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
    // console.log("почта верно");
    inputFalse[2].style.display = "none";
    validMailBln = true;
    validBtnOrder();
    validBtnNext();
  } else {
    // console.log("почта ошибка");
    inputFalse[2].style.display = "block";
    validMailBln = false;
    validBtnOrder();
    validBtnNext();
  }
}

input[2].onchange = function () {
  validMail();
};

// проверка адреса
function validLoc() {
  input[3].value = input[3].value.replace(/[^А-Яа-яЁё0-9.,-\s]/g, "");
  if (
    input[3].value.match(/[А-Яа-яЁё]/g) &&
    input[3].value.match(/[0-9.,-\s]/g) &&
    input[3].value.length > 5
  ) {
    // console.log("адрес верно");
    inputFalse[3].style.display = "none";
    validLocBln = true;
    validBtnOrder();
    validBtnNext();
  } else {
    // console.log("адрес ошибка");
    inputFalse[3].style.display = "block";
    validLocBln = false;
    validBtnOrder();
    validBtnNext();
  }
}

input[3].onchange = function () {
  validLoc();
};

// проверка чекбокса
document.querySelector(".input-in__user-check").onchange = function () {
  if (document.querySelector(".input-in__user-check").checked == true) {
    validCheckBln = true;
    // console.log("согласен на ОПД");
    validBtnOrder();
    validBtnNext();
  } else {
    validCheckBln = false;
    // console.log("НЕ согласен на ОПД");
    validBtnOrder();
    validBtnNext();
  }
};

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
  // console.log(`количество 18,9 л - ${amountNumFirst} штук`);
  sum();
};

btnMinus[0].onclick = function () {
  amountNumFirst--;
  if (amountNumFirst < 0) {
    amountNumFirst = 0;
  }
  amountNum[0].textContent = `${amountNumFirst}`;
  // console.log(`количество 18,9 л - ${amountNumFirst} штук`);
  sum();
};

btnPlus[1].onclick = function () {
  amountNumSecond++;
  amountNum[1].textContent = `${amountNumSecond}`;
  // console.log(`количество 1,5 л - ${amountNumSecond} штук`);
  sum();
};

btnMinus[1].onclick = function () {
  amountNumSecond--;
  if (amountNumSecond < 0) {
    amountNumSecond = 0;
  }
  amountNum[1].textContent = `${amountNumSecond}`;
  // console.log(`количество 1,5 л - ${amountNumSecond} штук`);
  sum();
};
btnPlus[2].onclick = function () {
  amountNumThird++;
  amountNum[2].textContent = `${amountNumThird}`;
  // console.log(`количество 0,5 л - ${amountNumThird} штук`);
  sum();
};

btnMinus[2].onclick = function () {
  amountNumThird--;
  if (amountNumThird < 0) {
    amountNumThird = 0;
  }
  amountNum[2].textContent = `${amountNumThird}`;
  // console.log(`количество 0,5 л - ${amountNumThird} штук`);
  sum();
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
    switch (number) {
      case 0:
        amountNumFirst = 0;
        amountNum[0].textContent = `${amountNumFirst}`;
        sum();
        break;
      case 1:
        amountNumSecond = 0;
        amountNum[1].textContent = `${amountNumSecond}`;
        sum();
        break;
      case 2:
        amountNumThird = 0;
        amountNum[2].textContent = `${amountNumThird}`;
        sum();
        break;
      default:
      // console.log("ошибка в displaySize");
    }
    // console.log(`кнопка ${number} выбора объема заказа воды - passive`);
    sum();
  } else {
    sizeActive[number].style.display = "block";
    sizePassive[number].style.display = "none";
    amountDisplay[number].style.display = "flex";
    // console.log(`кнопка ${number} выбора объема заказа воды - active`);
    sum();
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

// выбор временнного интервала
const btnTime = document.querySelectorAll(".button-in__time-time");
let validTimeBln;
let time;

function displayTime(number) {
  if (btnTime[number].classList.contains("button-in__time-time_active")) {
    btnTime[number].classList.remove("button-in__time-time_active");
    console.log(`кнопка ${number} выбора временнного интервала - passive`);
    validTimeBln = false;
    validBtnOrder();
  } else {
    disableTimeAll();
    btnTime[number].classList.add("button-in__time-time_active");
    console.log(`кнопка ${number} выбора временнного интервала - active`);
    validTimeBln = true;
    time = btnTime[number].textContent;
    validBtnOrder();
  }
}

function disableTimeAll() {
  for (i = 0; i < 5; i++) {
    btnTime[i].classList.remove("button-in__time-time_active");
  }
  validTimeBln = false;
  validBtnOrder();
}

btnTime[0].onclick = function () {
  displayTime(0);
};

btnTime[1].onclick = function () {
  displayTime(1);
};

btnTime[2].onclick = function () {
  displayTime(2);
};

btnTime[3].onclick = function () {
  displayTime(3);
};

btnTime[4].onclick = function () {
  displayTime(4);
};

// заполнение кнопок с днями
const displayDate = document.querySelectorAll(".button-in__time-day_number");
const displayWeek = document.querySelectorAll(".button-in__time-day_week");

let dateNow = new Date();

function displayWeekDay(date) {
  let days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  return days[date.getDay()];
}

function displayMonth(date) {
  let months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  return months[date.getMonth()];
}

function displayDateWeek(number) {
  displayDate[number].textContent = `${dateNow.getDate()}`;
  displayWeek[number].textContent = `${displayWeekDay(dateNow)}`;
  if (displayWeekDay(dateNow) == "сб" || displayWeekDay(dateNow) == "вс") {
    displayWeek[number].style.color = "#FD7562";
  } else {
    displayWeek[number].style.color = "#9caedd";
  }
}

displayDateWeek(0);

for (let i = 1; i < 6; i++) {
  dateNow.setDate(dateNow.getDate() + 1);
  displayDateWeek(i);
}

// смена кнопок с днями
const btnDayNext = document.querySelector(".button-in__time-day_next");
const btnDayBefore = document.querySelector(".button-in__time-day_before");

dateNow = new Date();

btnDayNext.onclick = function () {
  dateNow.setDate(dateNow.getDate() + 1);

  displayDateWeek(0);

  for (let i = 1; i < 6; i++) {
    dateNow.setDate(dateNow.getDate() + 1);
    displayDateWeek(i);
  }

  dateNow.setDate(dateNow.getDate() - 5);

  if (btnDay[numBtnDay].classList.contains("button-in__time-day_active")) {
    if (numBtnDay == 0) {
      disableDayAll();
      disableTimeAll();
    } else {
      displayDay(numBtnDay - 1);
    }
  }
};

btnDayBefore.onclick = function () {
  let dateRightNow = new Date();
  if (dateNow >= dateRightNow) {
    dateNow.setDate(dateNow.getDate() - 1);
    // console.log("назад ещё можно");
    displayDateWeek(0);

    for (let i = 1; i < 6; i++) {
      dateNow.setDate(dateNow.getDate() + 1);
      displayDateWeek(i);
    }

    dateNow.setDate(dateNow.getDate() - 5);

    if (btnDay[numBtnDay].classList.contains("button-in__time-day_active")) {
      if (numBtnDay == 5) {
        disableDayAll();
        disableTimeAll();
      } else {
        displayDay(numBtnDay + 1);
      }
    }
  } else {
    // console.log("назад уже нельзя");
  }
};

// выбор кнопок с днями
const btnDay = document.querySelectorAll(".button-in__time-day");
let numBtnDay = 0;
let day;
let month;
let dayOfWeek;
let validDayBln;

function displayDay(number) {
  if (btnDay[number].classList.contains("button-in__time-day_active")) {
    btnDay[number].classList.remove("button-in__time-day_active");
    // console.log(`кнопка ${number} выбора дня - passive`);
    validDayBln = false;
    validBtnOrder();
  } else {
    disableDayAll();
    btnDay[number].classList.add("button-in__time-day_active");
    // console.log(`кнопка ${number} выбора дня - active`);
    numBtnDay = number;
    dateNow.setDate(dateNow.getDate() + number);
    console.log(
      `число - ${dateNow.getDate()}, день недели - ${displayWeekDay(dateNow)}`
    );
    day = dateNow.getDate();
    month = displayMonth(dateNow);
    dayOfWeek = displayWeekDay(dateNow);
    // console.log(`число - ${day} ${month}, день недели - ${dayOfWeek}`);
    dateNow.setDate(dateNow.getDate() - number);
    changeTime();
    validDayBln = true;
    validBtnOrder();
  }
}

function disableDayAll() {
  for (i = 0; i < 6; i++) {
    btnDay[i].classList.remove("button-in__time-day_active");
  }
  validDayBln = false;
  validBtnOrder();
}

btnDay[0].onclick = function () {
  displayDay(0);
};

btnDay[1].onclick = function () {
  displayDay(1);
};

btnDay[2].onclick = function () {
  displayDay(2);
};

btnDay[3].onclick = function () {
  displayDay(3);
};

btnDay[4].onclick = function () {
  displayDay(4);
};

btnDay[5].onclick = function () {
  displayDay(5);
};

//смена времени доставки в зависимости от дня
const timeWeekdays = document.querySelector(".in__time-time_wrapper-weekdays");
const timeWeekends = document.querySelector(".in__time-time_wrapper-weekends");

function changeTime() {
  if (dayOfWeek == "сб" || dayOfWeek == "вс") {
    timeWeekdays.style.display = "none";
    timeWeekends.style.display = "flex";
  } else {
    timeWeekdays.style.display = "flex";
    timeWeekends.style.display = "none";
  }
}

// подсчет итого
totalDisplay = document.querySelectorAll(".in__sum-total_ruble");
let validTotalBln;

function sum() {
  total = 220 * amountNumFirst + 175 * amountNumSecond + 270 * amountNumThird;
  totalDisplay[0].textContent = `${total}`;
  totalDisplay[1].textContent = `${total}`;
  if (total > 0) {
    validTotalBln = true;
  } else {
    validTotalBln = false;
  }
  validBtnOrder();
}

// проверка кнопки Заказать
function validBtnOrder() {
  if (
    validNameBln == true &&
    validMailBln == true &&
    validTelBln == true &&
    validLocBln == true &&
    validCheckBln == true &&
    validDayBln == true &&
    validTimeBln == true &&
    validTotalBln == true
  ) {
    btnOrder.disabled = false;
    // console.log("кнопку можно активировать");
  } else {
    btnOrder.disabled = true;
    // console.log("кнопку НЕЛЬЗЯ активировать");
  }
}

// переход
const btnOrder = document.querySelector(".button-in__sum-order");
const pageIn = document.querySelector(".in");
const pageOut = document.querySelector(".out");

btnOrder.onclick = function () {
  pageIn.style.display = "none";
  pageOut.style.display = "block";
  displayOrder();
};

// вывод заказа
const orderSubtitle = document.querySelectorAll(".out__order-subtitle");
const orderValue = document.querySelectorAll(".out__order-value");
const orderNum = document.querySelector(".out_desc-num");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

orderNum.textContent = `${getRandomInt(999)}`;

function displayOrder() {
  if (amountNumFirst == 0) {
    orderSubtitle[0].style.display = "none";
    orderValue[0].style.display = "none";
  }
  if (amountNumSecond == 0) {
    orderSubtitle[1].style.display = "none";
    orderValue[1].style.display = "none";
  }
  if (amountNumThird == 0) {
    orderSubtitle[2].style.display = "none";
    orderValue[2].style.display = "none";
  }

  orderSubtitle[3].textContent = `${day} ${month}`;
  orderValue[0].textContent = `${amountNumFirst} шт.`;
  orderValue[1].textContent = `${amountNumSecond * 6} шт.`;
  orderValue[2].textContent = `${amountNumThird * 12} шт.`;
  orderValue[3].textContent = `${time}`;
  orderValue[4].textContent = `${input[3].value}`;
  orderValue[5].textContent = `${input[1].value}`;
}
// переходы в мобильной версии
btnStart = document.querySelector(".button-about__btn-order_mobile");
btnNext = document.querySelector(".button-in__user-next_mobile");
btnBack = document.querySelector(".in__water-back_mobile");

btnStart.onclick = function () {
  document.querySelector(".about").style.display = "none";
  document.querySelector(".in__title").style.display = "block";
  document.querySelector(".in__user").style.display = "block";
};

function validBtnNext() {
  if (
    validNameBln == true &&
    validMailBln == true &&
    validTelBln == true &&
    validLocBln == true &&
    validCheckBln == true
  ) {
    btnNext.disabled = false;
    // console.log("кнопку ДАЛЕЕ можно активировать");
  } else {
    btnNext.disabled = true;
    // console.log("кнопку ДАЛЕЕ НЕЛЬЗЯ активировать");
  }
}
btnNext.onclick = function () {
  document.querySelector(".in__title").style.display = "none";
  document.querySelector(".in__user").style.display = "none";
  document.querySelector(".in__wrap").style.display = "block";
  document.querySelector(".in__sum").style.display = "block";
};

btnBack.onclick = function () {
  document.querySelector(".in__title").style.display = "block";
  document.querySelector(".in__user").style.display = "block";
  document.querySelector(".in__wrap").style.display = "none";
  document.querySelector(".in__sum").style.display = "none";
};
