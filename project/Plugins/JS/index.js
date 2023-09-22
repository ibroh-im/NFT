// class
class MenuCard {
    constructor(src,alt, tittle, descr, order,userDescriptionInfo, parentSelector){
        this.src = src
        this.alt = alt
        this.tittle = tittle
        this.descr = descr
        this.order = order
        this.userDescriptionInfo = userDescriptionInfo
        this.paretn = document.querySelector(parentSelector)
    }
    render() {
        const element = document.createElement("div")

        element.innerHTML = `
        <div class="card1">
          <div class="imgDiv">
            <img class="cardImg" src=${this.src} alt=${this.alt}>
            </div>
            <div class="cardInfo">
              <p class="userName">
                ${this.tittle}
             </p>
               <p class="userDescription">${this.descr} <span class="userDescriptionInfo">${this.userDescriptionInfo}</span></p>
            </div>
          <div class="cardNumber "> ${this.order} </div>
        </div> 
        `
        this.paretn.append(element)
        
    }
}
new MenuCard(
    './project/images/cards-1.png',
    'cardProfile',
    'Keepitreal',
    'Total Sales:',
    1,
    '34.53 ETH',
    '.cardsMenu'
).render()

new MenuCard(
    './project/images/cards-1.png',
    'cardProfile',
    'DigiLab',
    'Total Sales:',
    2,
    '34.53 ETH',
    '.cardsMenu'
).render()

new MenuCard(
    './project/images/cards-1.png',
    'cardProfile',
    'GravityOne',
    'Total Sales:',
    3,
    '34.53 ETH',
    '.cardsMenu'
).render()

new MenuCard(
    './project/images/cards-1.png',
    'cardProfile',
    'Juanie',
    'Total Sales:',
    4,
    '34.53 ETH',
    '.cardsMenu'
).render()

new MenuCard(
    './project/images/cards-1.png',
    'cardProfile',
    'BlueWhale',
    'Total Sales:',
    5,
    '34.53 ETH',
    '.cardsMenu'
).render()

new MenuCard(
    './project/images/cards-1.png',
    'cardProfile',
    'mr fox',
    'Total Sales:',
    6,
    '34.53 ETH',
    '.cardsMenu'
).render()

new MenuCard(
    './project/images/cards-1.png',
    'cardProfile',
    'Shroomie',
    'Total Sales:',
    7,
    '34.53 ETH',
    '.cardsMenu'
).render()

new MenuCard(
    './project/images/cards-1.png',
    'cardProfile',
    'robotica',
    'Total Sales:',
    8,
    '34.53 ETH',
    '.cardsMenu'
).render()

new MenuCard(
    './project/images/cards-1.png',
    'cardProfile',
    'RustyRobot',
    'Total Sales:',
    9,
    '34.53 ETH',
    '.cardsMenu'
).render()

new MenuCard(
    './project/images/cards-1.png',
    'cardProfile',
    'animakid',
    'Total Sales:',
    10,
    '34.53 ETH',
    '.cardsMenu'
).render()

new MenuCard(
    './project/images/cards-1.png',
    'Dotgu',
    'Keepitreal',
    'Total Sales:',
    11,
    '34.53 ETH',
    '.cardsMenu'
).render()

new MenuCard(
    './project/images/cards-1.png',
    'cardProfile',
    'Ghiblier',
    'Total Sales:',
    12,
    '34.53 ETH',
    '.cardsMenu'
).render()

