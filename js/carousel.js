const slides = document.querySelectorAll('.testimonial-carousel-item');
const buttons = document.querySelectorAll('.carousel-controls button');

let current = Math.floor(Math.random() * slides.length);
let next = current < slides.length -1 ? current +1 : 0; 
let prev = current > 0 ? current -1 : slides.length -1;

// create event listener for the buttons
// decide how to call prev/next
//update variables
// current index = newIndex
// nextIndex = current +1 : 0
//prevIndex = current -1 : slides.length -1

//update css classes

const goToNext = () => {
  current < slides.length -1 ? goToNum(current +1) : goToNum(0);
};

const goToPrev = () =>{
  current > 0 ? goToNum(current -1) : goToNum(slides.length -1);
}

for(let i = 0; i< buttons.length; i++){
  buttons[i].addEventListener('click', () => i === 0 ? goToPrev() : goToNext());
}

const updateCss = () => {
  slides.forEach((slide) => {
    slide.classList.remove('active', 'prev', 'next');
  })

  slides[current].classList.add('active');
  slides[next].classList.add('next');
  slides[prev].classList.add('prev');
}

updateCss();
const goToNum = (num) => {
  current = num;
  next = current < slides.length -1 ? current +1 : 0; 
  prev = current > 0 ? current -1 : slides.length -1;
  console.log(current);
  updateCss();
}