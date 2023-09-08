import {Curtains, Plane} from "curtainsjs";
import LocomotiveScroll from 'locomotive-scroll';
import anime from 'animejs/lib/anime.es.js';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});


anime({
    targets: '.spring-physics-demo',
    translateX: 250,
    direction: 'alternate',
    loop: true,
    easing: 'spring(1, 80, 10, 0)'
  })


// wait for everything to be ready
window.addEventListener("load", () => {
// set up our WebGL context and append the canvas to our wrapper
const curtains = new Curtains({
container: "canvas"
});
// get our plane element
const planeElement = document.getElementsByClassName("plane")[0];
// set our initial parameters (basic uniforms)
const params = {
vertexShaderID: "plane-vs", // our vertex shader ID
fragmentShaderID: "plane-fs", // our fragment shader ID
uniforms: {
time: {
name: "uTime", // uniform name that will be passed to our shaders
type: "1f", // this means our uniform is a float
value: 0,
},
},
};
// create our plane using our curtains object, the HTML element and the parameters
const plane = new Plane(curtains, planeElement, params);
plane.onRender(() => {
// use the onRender method of our plane fired at each requestAnimationFrame call
plane.uniforms.time.value++; // update our time uniform value
});
});