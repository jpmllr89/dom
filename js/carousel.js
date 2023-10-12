const slides = document.querySelectorAll('.testimonial-carousel-item');
const buttons = document.querySelectorAll('.carousel-controls button');

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length -1 ? current +1 : 0; 
let prev = current > 0 ? current -1 : slides.length -1;

// create event listener for the buttons

buttons[0].addEventListener('click' e => {

});
// decide how to call prev/next
//update variables
// current index = newIndex
// nextIndex = current +1 : 0
//prevIndex = current -1 : slides.length -1

//update css classes


const goToNext = () => {

};

const goToPrev = () =>{

}

for(let i in buttons){
  buttons[i].addEventListener('click', () => i === 0 ? goToPrev() : goToNext());
}