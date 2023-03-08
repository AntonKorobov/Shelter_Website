const BTN_LEFT = document.querySelector('#pets__scroller-button-left');
const BTN_RIGHT = document.querySelector('#pets__scroller-button-right');
const CAROUSEL = document.querySelector('#carousel');
const ITEM_LEFT = document.querySelector('#item-left');
const ITEM_RIGHT = document.querySelector('#item-right');

import { showModalWindowEvent } from '../JS/script_popup.js';

const response = await fetch('../../base/pets_base.json');
const cardBase = await response.json();

const moveLeft = () => {
  CAROUSEL.classList.add('transition-left');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
};

const moveRight = () => {
  CAROUSEL.classList.add('transition-right');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
};

//GENERATE PAGE------------------------------------------------
let activeCards = chooseRandomCards([, , ,]);
createCardTemplate(activeCards, 'item-active');
createCardTemplate(chooseRandomCards(activeCards), 'item-left');
createCardTemplate(chooseRandomCards(activeCards), 'item-right');
//-------------------------------------------------------------

function createCardTemplate(generateNumbers, item) {
  for (let i = 0; i < generateNumbers.length; i++) {
    document.querySelector(`#${item} > a:nth-child(${i + 1}) > img`).src = cardBase[generateNumbers[i]].img;
    document.querySelector(`#${item} > a:nth-child(${i + 1}) > p`).innerHTML = cardBase[generateNumbers[i]].name;
  }
  return;
}

function chooseRandomCards(numbers) {
  const numbersOfCards = [0, 1, 2, 3, 4, 5, 6, 7];
  let filteredArray = [];
  let generatedArray = [];

  if (numbers[0] === undefined) {
    filteredArray = numbersOfCards;
  } else {
    for (let i = 0; i < numbersOfCards.length; i++) {
      if (numbers.indexOf(numbersOfCards[i]) === -1) {
        filteredArray.push(numbersOfCards[i]);
      }
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    let randomIndex = Math.floor(Math.random() * filteredArray.length);
    generatedArray.push(filteredArray[randomIndex]);
    filteredArray.splice(randomIndex, 1);
  }
  return generatedArray;
}

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

CAROUSEL.addEventListener('animationend', (animationEvent) => {
  let changedItem;

  if (animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition-left');
    changedItem = ITEM_RIGHT;
    document.querySelector('#item-active').innerHTML = ITEM_RIGHT.innerHTML;
  } else {
    CAROUSEL.classList.remove('transition-right');
    changedItem = ITEM_LEFT;
    document.querySelector('#item-active').innerHTML = ITEM_LEFT.innerHTML;
  }

  //GENERATE NEW CARDS------------------------------------------------------------
  let cardsNumbers = chooseRandomCards(activeCards);
  activeCards = cardsNumbers;
  createCardTemplate(cardsNumbers, changedItem.id); //cardNumbers 0...7
  //------------------------------------------------------------------------------

  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);
  showModalWindowEvent();
});
