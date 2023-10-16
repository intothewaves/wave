import LocomotiveScroll from 'locomotive-scroll';
import Splitting from "splitting";

Splitting();

'use strict';
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    smartphone: { smooth: false }, tablet: { smooth: false }
});

//scroll section on
const footer = document.querySelector('footer');
window.addEventListener('scroll', () => {
    let pageYOffset = window.scrollY + screen.height / 2;
    let scrollLocation = document.documentElement.scrollTop;
    let windowHeight = window.innerHeight;
    let fullHeight = document.body.scrollHeight;

    if (scrollLocation + windowHeight + 200 >= fullHeight) {
        footer.classList.add('on');
    } 

});

