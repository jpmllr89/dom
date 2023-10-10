const data = {
  dataPortfolioCards : [
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
  ],
  dataModals : [
    {
      id: "modal1",
      h3: "Web Development",
      img: "./assets/img/portfolio-1.jpg",
      strongParagraph: "My first Awesome Website",
      firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
      secondParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
    },
    {
      id: "modal2",
      h3: "Web Development",
      img: "./assets/img/portfolio-2.jpg",
      strongParagraph: "My first Awesome Website",
      firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
      secondParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
    },
    {
      id: "modal3",
      h3: "Web Development",
      img: "./assets/img/portfolio-3.jpg",
      strongParagraph: "My first Awesome Website",
      firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
      secondParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
    },
    {
      id: "modal4",
      h3: "Web Development",
      img: "./assets/img/portfolio-7.jpg",
      strongParagraph: "My first Awesome Website",
      firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
      secondParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
    },
    {
      id: "modal5",
      h3: "App Development",
      img: "./assets/img/portfolio-5.jpg",
      strongParagraph: "My first Awesome Website",
      firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
      secondParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
    },
    {
      id: "modal6",
      h3: "App Development",
      img: "./assets/img/portfolio-6.jpg",
      strongParagraph: "My first Awesome Website",
      firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
      secondParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
    },
    {
      id: "modal7",
      h3: "UI Development",
      img: "./assets/img/portfolio-7.jpg",
      strongParagraph: "My first Awesome Website",
      firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
      secondParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
    },
    {
      id: "modal8",
      h3: "UI Development",
      img: "./assets/img/portfolio-8.jpg",
      strongParagraph: "My first Awesome Website",
      firstParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?",
      secondParagraph: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim corrupti repellendus sunt minus, ipsam cumque perspiciatis. Obcaecati, sit eligendi illo ipsa exercitationem modi cumque repellendus eos aliquam magni reiciendis nam?"
    },
  
  ]

}

// Generate Portfolio Cards
const portfolioPanel = document.querySelector('.portfolio-panel');
const portfolioCard = 'portfolio-card';
const portfolioCardBody = 'portfolio-card-body';
const cardModal = 'card-modal';



for(let i = 0; i< data.dataPortfolioCards.length; i++){
  let card = document.createElement('div');
  card.classList.add(portfolioCard);
  card.setAttribute(data.dataPortfolioCards[i].attributes[0].name, data.dataPortfolioCards[i].attributes[0].value);
  card.setAttribute(data.dataPortfolioCards[i].attributes[1].name, data.dataPortfolioCards[i].attributes[1].value);
  card.innerHTML =
  `<div class="portfolio-card-body">
    <img src=${data.dataPortfolioCards[i].picture} alt="portfolio icon">
    <div class='card-modal'>
      <div>${data.dataPortfolioCards[i].title}</div>
      <h3>${data.dataPortfolioCards[i].caption}</h3>
    </div>
  </div>`;
  portfolioPanel.appendChild(card);
}

// Generate corresponding modals
const main = document.querySelector('.site-wrapper');
const modal = 'modal';

for(let i = 0; i< data.dataModals.length; i++){
  let modalElement = document.createElement('div');
  modalElement.classList.add(modal);
  modalElement.setAttribute('id', data.dataModals[i].id);
  modalElement.setAttribute('data-animation', "slideDown");
  modalElement.innerHTML =
  `<div class="modal-dialog">
    <header class="modal-header">
      <h3>${data.dataModals[i].h3}</h3>
      <i data-close class="fas fa-times"></i>
    </header>
    <div class="modal-body">
      <div class="img-wrapper">
        <img src=${data.dataModals[i].img} alt="portfolio icon">
      </div>
      <div class="text-body">
        <p><strong>${data.dataModals[i].strongParagraph}</strong><p>
        <p>${data.dataModals[i].firstParagraph}<p>
        <p>${data.dataModals[i].secondParagraph}<p>
      </div>
    </div>
  </div>`;
  main.appendChild(modalElement);
}