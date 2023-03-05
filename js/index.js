const menuBtn = document.querySelector('.js-menu-btn');
let menuBtnContent = menuBtn.innerHTML;
let contentText = ['menu', 'close']

const nav = document.querySelector('.js-nav');
const overlay = document.querySelector('.js-overlay');
const bodyDocument = document.querySelector('body');

const linkNav = document.querySelectorAll('.js-link-nav');

const btn = document.querySelectorAll('.js-btn');
const link = document.querySelectorAll('.js-link');


function openCloseMenu() {

    if (menuBtnContent === contentText[0]) {
        menuBtnContent = contentText[1];
        menuBtn.innerHTML = menuBtnContent;
    } else {
        menuBtnContent = contentText[0];
        menuBtn.innerHTML = menuBtnContent;
    }
    
    nav.classList.toggle('menu-open');
    overlay.classList.toggle('menu-open');
    bodyDocument.classList.toggle('scroll-lock');
}

menuBtn.addEventListener('click', openCloseMenu);
overlay.addEventListener('click', openCloseMenu);

function classCheck() {
    if (nav.classList.contains('menu-open')) {
        openCloseMenu()
    }
}

linkNav[0].addEventListener('click', classCheck);
linkNav[1].addEventListener('click', classCheck);
linkNav[2].addEventListener('click', classCheck);
linkNav[3].addEventListener('click', classCheck);

btn[1].addEventListener('click', function(e) {
    e.preventDefault()
});

link[0].addEventListener('click', function(e) {
    e.preventDefault()
});
link[1].addEventListener('click', function(e) {
    e.preventDefault()
});
link[2].addEventListener('click', function(e) {
    e.preventDefault()
});
