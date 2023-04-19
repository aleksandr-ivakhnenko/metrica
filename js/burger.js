const BURGER_OPENED_CLASSNAME = 'menu-burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'button-menu-burger_open';
const BURGER_CONTENT_OPENED_CLASSNAME = 'menu-burger__content_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const burgerNode = document.querySelector('.js-menu-burger');
const burgerBtnNode = document.querySelector('.js-button-menu-burger');
const burgerContentNode = document.querySelector('.js-menu-burger__content');

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', (event) => {
    const isClickOutsideContent = !event.composedPath().includes(burgerContentNode)

    if (isClickOutsideContent) {
        toggleBurger();
    }
})

function toggleBurger() {
    burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
    burgerContentNode.classList.toggle(BURGER_CONTENT_OPENED_CLASSNAME);
}
