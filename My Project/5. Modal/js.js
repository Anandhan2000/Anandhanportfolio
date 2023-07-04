'use strict';

const modal = document.querySelector('.model');
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const showmodal1 = document.querySelector('.showmodal-1');
const showmodal2 = document.querySelector('.showmodal-2');
const showmodal3 = document.querySelector('.showmodal-3');
const gmae1El = document.querySelector('.guess');
const x = document.querySelector('.x');
const dice = document.querySelector('.dice-game');
const di = document.querySelector('.di');

gmae1El.classList.add('hidden');
overlay.classList.add('hidden');
dice.classList.add('hidden');
dice.classList.remove('overlay1');
modal.classList.add('hidden');

showmodal1.addEventListener('click', function () {
  gmae1El.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

x.addEventListener('click', function () {
  gmae1El.classList.add('hidden');
  overlay.classList.add('hidden');
});

showmodal2.addEventListener('click', function () {
  dice.classList.remove('hidden');
  dice.classList.add('overlay1');
});

di.addEventListener('click', function () {
  dice.classList.add('hidden');
  dice.classList.remove('overlay1');
});

showmodal3.addEventListener('click', function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});

close.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
