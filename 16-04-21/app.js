const cards = [...document.querySelectorAll('.card')];

let score = document.getElementsByClassName("score");
// console.log(cards);

// array of opened cards
const cardsOpen = [];


// to flip/open cards
let showCards = function(){
    // console.log("clicked");
    this.classList.add("show");
    this.classList.add("disable");
}

// adding clickHandlers for every card
cards.forEach(card => card.addEventListener('click', showCards));

