const slides = document.querySelectorAll('.testimonial-carousel-item');
const buttons = document.querySelectorAll('.carousel-controls button');

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length -1 ? current +1 : 0; 
let prev = current > 0 ? current -1 : slides.length -1;

