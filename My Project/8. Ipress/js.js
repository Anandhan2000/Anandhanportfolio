const currentDate = new Date();

// Create an array of month names
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const monSortthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Create an array of day names in letter representation
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Extract the day, month, and year from the current date
const day = dayNames[currentDate.getDay()];
const month = monthNames[currentDate.getMonth()];
const year = currentDate.getFullYear();

// Create the date string in the format "Day, Month Day, Year"
const dateString = `${day}, ${month} ${currentDate.getDate()}, ${year}`;

const dates = document.querySelectorAll(".date");
dates[0].innerHTML = dateString;
dates[1].innerHTML = dateString;

//calendar-month
let afterValue = 1;
let beforValue = 1;

let oneMonthBefor = monSortthNames[currentDate.getMonth() - beforValue];
let oneMonthAfter = monSortthNames[currentDate.getMonth() + afterValue];

const oneBefor = document.querySelector(".onemonthbefor");
const oneAfter = document.querySelector(".onemonthafter");
const presentMonth = document.querySelector(".presentmonth");

oneBefor.innerHTML = oneMonthBefor;
oneAfter.innerHTML = oneMonthAfter;
presentMonth.innerHTML = month;
const beforMonEl = document.querySelector(".calendar-btn1-1");
const afterMonEl = document.querySelector(".calendar-btn1-2");

beforMonEl.addEventListener("click", function () {
  if (afterValue > 0 && afterValue < 13) {
    beforValue++;
    console.log(beforValue);
  } else {
    beforValue = 1;
    console.log(beforValue);
  }
});

const currentDayOfWeek = currentDate.getDay();
console.log(currentDayOfWeek);

const lifebtn = document.querySelectorAll(".life");

let i = 0;
lifebtn[i].addEventListener("click", function () {
  if (i === 0) {
    lifebtn[0].classList.toggle("life1");
    lifebtn[1].classList.toggle("life1");
    ++i;
    console.log(i);
  } else {
    lifebtn[i].classList.toggle("life1");
    lifebtn[0].classList.toggle("life1");
    --i;
    console.log(i);
  }
});

lifebtn[1].addEventListener("click", function () {
  if (i === 0) {
    lifebtn[0].classList.toggle("life1");
    lifebtn[1].classList.toggle("life1");
    ++i;
    console.log(i);
  } else {
    lifebtn[i].classList.toggle("life1");
    lifebtn[0].classList.toggle("life1");
    --i;
    console.log(i);
  }
});
