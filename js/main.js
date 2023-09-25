const modalOpen = "[data-open]";
const modalClose = "[data-close]";
const isVisible = 'is-visible';


const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);


// Full site modal open buttons
for(const el of openModal){
  el.addEventListener('click', function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}