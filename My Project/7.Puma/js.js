"use strict";

//Menu Function
const menu = document.querySelector(".list");

const menubackgroundel = document.querySelector(".puma-main");
const menFontColour = document.querySelectorAll(".bod1");
const blackPuma = document.querySelector(".pumalogo");
const menus = document.querySelector(".menus");
const menus1 = document.querySelector(".menus1");

const optionEl = document.querySelector(".pumamenu-1");

let key = 0;
menu.addEventListener("click", function () {
  if (key === 0) {
    menubackgroundel.style.backgroundColor = "#F7FAF7";
    for (let i = 0; i < menFontColour.length; i++) {
      menFontColour[i].style.color = "black";
    }
    optionEl.style.display = "flex";
    menu.style.color = "black";
    blackPuma.src = "./image/blackpuma.png";
    menus.style.display = "none";
    menus1.classList.remove("menus1");
    ++key;
    console.log(key);
  } else {
    menubackgroundel.style.backgroundColor = "#040504";
    for (let i = 0; i < menFontColour.length; i++) {
      menFontColour[i].style.color = "white";
    }
    optionEl.style.display = "none";
    menu.style.color = "white";
    blackPuma.src = "./image/Pumalogo.png";
    menus.style.display = "inline";
    menus1.classList.add("menus1");
    --key;
    console.log(key);
  }
});

//____________________________________________________________________________

//Search _______________________________________________________________________

const searchel = document.querySelector(".searchmenu");
const seaechBtn = document.querySelector(".btn-size");
const searchint = document.querySelector(".search-close");
const searchel2 = document.querySelector(".pumabout6");
seaechBtn.addEventListener("click", function () {
  searchel.style.display = "block";
});
searchint.addEventListener("click", function () {
  searchel.style.display = "none";
});

searchel2.addEventListener("click", function () {
  searchel.style.display = "block";
});

// profile icon

const profileElcont = document.querySelector(".menu-perofile1");
const profileE = document.querySelector(".pumabout4");

profileE.addEventListener("click", function () {
  profileElcont.classList.toggle("menu-perofile1");
});
