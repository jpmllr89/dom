//This below section is for an exercise, comment out later:
const data = [
  {
    picture:"./assets/img/anenome.jpeg",
    title:'Zoo / Wildlife',
    caption:'LifeScience website',
    attribute: {
      name: "data-item",
      value: "web"
    }
  },
  {
    picture: './assets/img/img1.jpg',
    title:'Zoo / Wildlife',
    caption:'LifeScience website',
    attribute: {
      name: "data-item",
      value: "app"
    }
  },
  {
    picture:'./assets/img/img2.jpg',
    title:'Zoo / Wildlife',
    caption:'LifeScience website',
    attribute: {
      name: "data-item",
      value: "ui"
    }
  },
  {
    picture:'./assets/img/img3.jpg',
    title:'Zoo / Wildlife',
    caption:'LifeScience website',
    attribute: {
      name: "data-item",
      value: "app"
    }
  },
  {
    picture:'./assets/img/img4.jpg',
    title:'Zoo / Wildlife',
    caption:'LifeScience website',
    attribute: {
      name: "data-item",
      value: "web"
    }
  },
  {
    picture:'./assets/img/img5.jpg',
    title:'Zoo / Wildlife',
    caption:'LifeScience website',
    attribute: {
      name: "data-item",
      value: "app"
    }
  }
]

const portfolioPanel = document.querySelector('.portfolio-panel');
const portfolioCard = '.portfolio-card';
const portfolioCardBody = '.portfolio-card-body';
const cardModal = '.card-modal';



for(let i = 0; i< data.length; i++){
  let card = document.createElement('div');
  card.classList.add(portfolioCard);
  card.setAttribute(data[i].attribute.name, data[i].attribute.value);
  card.innerHTML =
  `<div class="portfolio-card-body">
    <img src=${data[i].picture} alt="portfolio icon">
    <a class='card-modal' href="#">
      <div>${data[i].title}</div>
      <h3>${data[i].caption}</h3>
    </a>
  </div>`;
  portfolioPanel.appendChild(card);
}