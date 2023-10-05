const theme = "theme";
const dataTheme = 'data-theme';
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';
const root = document.documentElement;

/* Theme */

const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
const currentTheme = localStorage.getItem(theme);

const setActive = (e, selector) => {
  if (document.querySelector(`${selector}.${active}`) !== null){
    document.querySelector(`${selector}.${active}`).classList.remove(active);
    e.classList.add(active);
  }else{
    e.classList.add(active);
  }
}

const setTheme = (val) => {

  if(val === dark){
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  }else{
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
}

if(currentTheme){
  root.setAttribute(dataTheme, currentTheme);
  switcher.forEach((btn) =>{
    btn.classList.remove(active);
  });
  if(currentTheme === dark){
    switcher[1].classList.add(active);
  }else{
    switcher[0].classList.add(active);
  }
}

toggleTheme.addEventListener('click', function(){
  const tab = this.parentElement.parentElement;
  if(!tab.className.includes(open)){
    tab.classList.add(open);
  }else{
    tab.classList.remove(open);
  }
});

for(const el of switcher){
  el.addEventListener('click', function(){
    const toggle = this.dataset.toggle;
    // set active state
    setActive(el, switcherBtn);
    setTheme(toggle);

  });
}


/*Modal*/

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

// Portfolio

const dataFilter = '[data-filter]';
const filterLink = document.querySelectorAll(dataFilter);
const portfolioData = '[data-item]';
const portfolioItems = document.querySelectorAll(portfolioData);

for (const e of filterLink){
  e.addEventListener('click', function(){
    setActive(e, '.filter-link');
    const filter = this.dataset.filter;
    portfolioItems.forEach((card) =>{
      if(filter==='all'){
        card.style.display = 'block';
      } else if(card.dataset.item === filter){
        card.style.display = 'block';
      } else{
        card.style.display = 'none';
      }
    });
  });
}

// Search bar logic

const searchBox = document.querySelector('#search');

searchBox.addEventListener('keyup', (e) => {
  const searchInput = e.target.value.toLowerCase().trim();
  portfolioItems.forEach((card) =>{
    if(card.dataset.item.includes(searchInput)){
      card.style.display = "block";
    }else{
      card.style.display = 'none';
    }
  })


})


//This below section is for an exercise, comment out later:
// const data = [
//   {
//     picture:"./assets/img/anenome.jpeg",
//     title:'Zoo / Wildlife',
//     caption:'LifeScience website',
//     attribute: {
//       name: "data-item",
//       value: "web"
//     }
//   },
//   {
//     picture: './assets/img/img1.jpg',
//     title:'Zoo / Wildlife',
//     caption:'LifeScience website',
//     attribute: {
//       name: "data-item",
//       value: "app"
//     }
//   },
//   {
//     picture:'./assets/img/img2.jpg',
//     title:'Zoo / Wildlife',
//     caption:'LifeScience website',
//     attribute: {
//       name: "data-item",
//       value: "ui"
//     }
//   },
//   {
//     picture:'./assets/img/img3.jpg',
//     title:'Zoo / Wildlife',
//     caption:'LifeScience website',
//     attribute: {
//       name: "data-item",
//       value: "app"
//     }
//   },
//   {
//     picture:'./assets/img/img4.jpg',
//     title:'Zoo / Wildlife',
//     caption:'LifeScience website',
//     attribute: {
//       name: "data-item",
//       value: "web"
//     }
//   },
//   {
//     picture:'./assets/img/img5.jpg',
//     title:'Zoo / Wildlife',
//     caption:'LifeScience website',
//     attribute: {
//       name: "data-item",
//       value: "app"
//     }
//   }
// ]

// const portfolioPanel = document.querySelector('.portfolio-panel');
// const portfolioCard = 'portfolio-card';
// const portfolioCardBody = 'portfolio-card-body';
// const cardModal = 'card-modal';



// for(let i = 0; i< data.length; i++){
//   let card = document.createElement('div');
//   card.classList.add(portfolioCard);
//   card.setAttribute(data[i].attribute.name, data[i].attribute.value);
//   card.innerHTML =
//   `<div class="portfolio-card-body">
//     <img src=${data[i].picture} alt="portfolio icon">
//     <a class='card-modal' href="#">
//       <div>${data[i].title}</div>
//       <h3>${data[i].caption}</h3>
//     </a>
//   </div>`;
//   portfolioPanel.appendChild(card);
// }