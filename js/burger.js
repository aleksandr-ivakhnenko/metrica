const BURGER_OPENED_CLASSNAME = 'menu-burger_open';
const BURGER_BTN_OPENED_CLASSNAME = 'button-menu-burger_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const burgerNode = document.querySelector('.js-menu-burger');
const burgerBtnNode = document.querySelector('.js-button-menu-burger');
const burgerContentNode = document.querySelector('.js-menu-burger__content');

/* const burgerNavLinksNodesAll = document.querySelectorAll('.menu-burger__link');

const burgerNavLinksNodes = [burgerNavLinksNodesAll[0], 
                            burgerNavLinksNodesAll[1], 
                            burgerNavLinksNodesAll[2], 
                            burgerNavLinksNodesAll[3]
                            burgerNavLinksNodesAll[4]];
console.log(burgerNavLinksNodes)

burgerNavLinksNodes[0].addEventListener('click', toggleBurger);
burgerNavLinksNodes[1].addEventListener('click', toggleBurger);
burgerNavLinksNodes[2].addEventListener('click', toggleBurger);
burgerNavLinksNodes[3].addEventListener('click', toggleBurger);
burgerNavLinksNodes[4].addEventListener('click', toggleBurger); */

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
    bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
    burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
};
