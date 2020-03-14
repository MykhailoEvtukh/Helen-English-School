'use strict';

var burger = document.querySelector('.header__btn-burger');
var overlay = document.querySelector('.overlay');
var closeBtn = document.querySelector('.submenu-btn');
var logo = document.querySelector('.title-picture_header');

var openOverlay = function openOverlay() {
  overlay.classList.add('overlay_active');
  burger.style.display = 'none';
  logo.style.display = 'none';
};

var closeOverlay = function closeOverlay() {
  overlay.classList.remove('overlay_active');
  burger.style.display = 'block';
  logo.style.display = 'block';
};

burger.addEventListener('click', openOverlay);
closeBtn.addEventListener('click', closeOverlay);