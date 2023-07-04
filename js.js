1; //pofile El

const profileEl = document.querySelector(".mamue1");

const workel = document.querySelector(".work-bio");

let prevScrollpos = window.screenY;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (currentScrollPos === 0) {
    // Scrolling down
    profileEl.classList.remove("hidden");
    profileEl.classList.add("menu-ani");
    profileEl.style.backgroundColor = "rgb(204, 227, 227)";
  } else if (currentScrollPos > prevScrollpos) {
    // Scrolling up
    profileEl.classList.add("hidden");
  } else {
    profileEl.classList.remove("hidden");
    profileEl.classList.add("menu-ani");
    profileEl.style.backgroundColor = "#F7FAF7";
  }

  prevScrollpos = currentScrollPos;
};
