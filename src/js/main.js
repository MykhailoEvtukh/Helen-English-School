'use strict';

let burger = document.querySelector('.header__btn-burger');
let overlay = document.querySelector('.overlay');
let closeBtn = document.querySelector('.submenu-btn');
let logo = document.querySelector('.title-picture_header');

let openOverlay = () => {
    overlay.classList.add('overlay_active');
    burger.style.display = 'none';
    logo.style.display = 'none';
}

let closeOverlay = () => {
    overlay.classList.remove('overlay_active');
    burger.style.display = 'block';
    logo.style.display = 'block';
}

burger.addEventListener('click', openOverlay);
closeBtn.addEventListener('click', closeOverlay);