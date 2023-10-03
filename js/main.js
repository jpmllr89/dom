const theme = "theme";
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = '.active';

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
    event.preventDefault();
  });
}

for(const el of closeModal){
  el.addEventListener('click', function(){
    this.parentElement.parentElement.classList.remove(isVisible);
  });
}