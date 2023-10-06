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
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
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

// Individual Modal
document.addEventListener('click', (e) =>{
  if(e.target === document.querySelector('.modal.is-visible')){
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
})

document.addEventListener('keyup', (e) =>{
  if(e.key === 'Escape'){
    document.querySelector('.modal.is-visible').classList.remove(isVisible);
  }
})

//Portfolio Grid cards
//This below section is for an exercise, comment out later:
const data = [
  {
    picture:"./assets/img/portfolio-1.jpg",
    title:'Web Development',
    caption:'Food Website',
    attributes: [
      {
        name: "data-item",
        value: "web"
      },
      {
        name: "data-open",
        value: "modal1"
      }
    ]
  },
  {
    picture: './assets/img/portfolio-2.jpg',
    title:'Web Development',
    caption:'Crafts website',
    attributes: [
      {
        name: "data-item",
        value: "web"
      },
      {
        name: "data-open",
        value: "modal2"
      }
    ]
  },
  {
    picture:'./assets/img/portfolio-3.jpg',
    title:'Web Development',
    caption:'Shopping website',
    attributes: [
      {
        name: "data-item",
        value: "web"
      },
      {
        name: "data-open",
        value: "modal3"
      }
    ]
  },
  {
    picture:'./assets/img/portfolio-7.jpg',
    title:'Web Development',
    caption:'Skate Website',
    attributes: [
      {
        name: "data-item",
        value: "web"
      },
      {
        name: "data-open",
        value: "modal4"
      }
    ]
  },
  {
    picture:'./assets/img/portfolio-5.jpg',
    title:'App Development',
    caption:'Dating App',
    attributes: [
      {
        name: "data-item",
        value: "app"
      },
      {
        name: "data-open",
        value: "modal5"
      }
    ]
  },
  {
    picture:'./assets/img/portfolio-6.jpg',
    title:'App Development',
    caption:'Gaming App',
    attributes: [
      {
        name: "data-item",
        value: "app"
      },
      {
        name: "data-open",
        value: "modal6"
      }
    ]
  },
  {
    picture:'./assets/img/portfolio-7.jpg',
    title:'UI Design',
    caption:'Cool Design',
    attributes: [
      {
        name: "data-item",
        value: "ui"
      },
      {
        name: "data-open",
        value: "modal7"
      }
    ]
  },
  {
    picture:'./assets/img/portfolio-8.jpg',
    title:'UI Design',
    caption:'Masterpiece',
    attributes: [
      {
        name: "data-item",
        value: "ui"
      },
      {
        name: "data-open",
        value: "modal8"
      }
    ]
  }
]

const portfolioPanel = document.querySelector('.portfolio-panel');
const portfolioCard = 'portfolio-card';
const portfolioCardBody = 'portfolio-card-body';
const cardModal = 'card-modal';



for(let i = 0; i< data.length; i++){
  let card = document.createElement('div');
  card.classList.add(portfolioCard);
  card.setAttribute(data[i].attributes[0].name, data[i].attributes[0].value);
  card.setAttribute(data[i].attributes[1].name, data[i].attributes[1].value);
  card.innerHTML =
  `<div class="portfolio-card-body">
    <img src=${data[i].picture} alt="portfolio icon">
    <div class='card-modal'>
      <div>${data[i].title}</div>
      <h3>${data[i].caption}</h3>
    </div>
  </div>`;
  portfolioPanel.appendChild(card);
}

// Pop-up modal portfolio cards
const dataModals = [
  {
    id: "modal1",
    h3: "Web Development",
    img: "assets/img/portfolio-1.jpg",
    strongParagraph: "My first Awesome Website",
    firstParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
    secondParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
  },
  {
    id: "modal2",
    h3: "Web Development",
    img: "assets/img/portfolio-2.jpg",
    strongParagraph: "My first Awesome Website",
    firstParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
    secondParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
  },
  {
    id: "modal3",
    h3: "Web Development",
    img: "assets/img/portfolio-3.jpg",
    strongParagraph: "My first Awesome Website",
    firstParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
    secondParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
  },
  {
    id: "modal4",
    h3: "Web Development",
    img: "assets/img/portfolio-7.jpg",
    strongParagraph: "My first Awesome Website",
    firstParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
    secondParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
  },
  {
    id: "modal5",
    h3: "App Development",
    img: "assets/img/portfolio-5.jpg",
    strongParagraph: "My first Awesome Website",
    firstParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
    secondParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
  },
  {
    id: "modal6",
    h3: "App Development",
    img: "assets/img/portfolio-6.jpg",
    strongParagraph: "My first Awesome Website",
    firstParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
    secondParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
  },
  {
    id: "modal7",
    h3: "UI Development",
    img: "assets/img/portfolio-7.jpg",
    strongParagraph: "My first Awesome Website",
    firstParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
    secondParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
  },
  {
    id: "modal8",
    h3: "UI Development",
    img: "assets/img/portfolio-8.jpg",
    strongParagraph: "My first Awesome Website",
    firstParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
    secondParagrph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
  },

]

const main = document.querySelector('.site-wrapper');
const modal = 'modal';

for(let i = 0; i< dataModals.length; i++){
  let modalElement = document.createElement('div');
  modalElement.classList.add(modal);
  modalElement.setAttribute('id', dataModals[i].id);
  modalElement.setAttribute('data-animation', "slideDown");
  modalElement.innerHTML =
  `<div class="modal-dialog">
    <header class="modal-header">
      <h3>${dataModals[i].h3}</h3>
      <i data-close class="fas fa-times"></i>
    </header>
    <div class="modal-body">
      <div class="img-wrapper">
        <img src=${data[i].img} alt="portfolio icon">
      </div>
      <div class="text-body">
        <p>${dataModals.strongParagraph}<p>
        <p>${dataModals.firstParagraph}<p>
        <p>${dataModals.secondParagraph}<p>
      </div>
    </div>
  </div>`;
  main.appendChild(modalElement);
}
