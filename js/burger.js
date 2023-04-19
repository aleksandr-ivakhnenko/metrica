const BURGER_OPENED_CLASSNAME = 'menu-burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'button-menu-burger_open';
const BODY_FIXED_CLASSNAME2 = 'body_fixed';

const bodyNode2 = document.querySelector('body');
const burgerNode = document.querySelector('.js-menu-burger');
const burgerBtnNode = document.querySelector('.js-button-menu-burger');
const burgerContentNode = document.querySelector('.js-menu-burger__content');

const burgerNavLinksNodesAll = document.querySelectorAll('.menu-burger__link');

burgerBtnNode.addEventListener('click', toggleBurger);

const burgerNavLinksNodes = Array.from(document.querySelectorAll('.menu-burger__link'));

burgerNavLinksNodes.forEach(element => {
    element.addEventListener('click', toggleBurger);
});

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    };
});

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode2.classList.toggle(BODY_FIXED_CLASSNAME2);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
};
