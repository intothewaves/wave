import {Curtains, Plane} from "curtainsjs";
import LocomotiveScroll from 'locomotive-scroll';
import anime from 'animejs/lib/anime.es.js';


const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

anime({
    targets: '.spring-physics-demo',
    rotate: 100,
    direction: 'alternate',
    loop: true,
    easing: 'spring(1, 80, 10, 0)'
});


