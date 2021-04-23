let cards = [...document.querySelectorAll('.card')];

const deck = document.getElementById('card-deck');

const cardsMatched = document.getElementsByClassName("match");

const score = document.getElementById("score");

// array of opened cards
let cardsOpen = [];
// move count
let moves = 0;

// shuffling cards
const shuffle = (array) => {
    let curr = array.length;
    while (curr !== 0) {
        rand = Math.floor(Math.random() * curr);

        curr--;
        let temp = array[curr];
        array[curr] = array[rand];
        array[rand] = temp;
    }
    return array;
    
}


// to flip/open cards
const showCards = (e) => {
    e.target.classList.add("show");
    e.target.classList.add("disable");
}

// to enable/disable pointer events
const enable = () => {
    cards.forEach(card => card.classList.remove("disable"));
    [...cardsMatched].forEach(card => card.classList.add("disable"));
}

const disable = () => {
    cards.forEach(card => card.classList.add("disable"));
}


// matching cards
const matched = () => {
  cardsOpen.forEach((card) => {
    card.classList.add("match");
    card.classList.remove("show");
  });
//   console.log(cardsOpen);
  cardsOpen = [];
}

// unmatched cards
const unmatched = () => {
    cardsOpen.forEach(card => {
      card.classList.add("unmatch");
    })
    disable();
    setTimeout(function () {
        cardsOpen.forEach(card => card.classList.remove("show", "match", "unmatch"));
        enable();
        cardsOpen = [];
    }, 1200)
}

// game play
const flipCards = (e) => {
    cardsOpen.push(e.currentTarget);
    if (cardsOpen.length === 2) {
        counter();
        cardsOpen[0].type == cardsOpen[1].type ? matched() : unmatched();
    }
}

// move counter
const counter = () => {
    moves += 1;
    score.innerText = moves;
}


// adding clickHandlers for every card
cards.forEach(card => {
    card.addEventListener('click', showCards);
    card.addEventListener('click', flipCards);
});


// Game
const start = () => {

    cardsOpen = [];

    cards = shuffle(cards);
    
    for (let i = 0; i < cards.length; i++) {
        deck.innerHTML = '';
        cards.forEach(card => deck.appendChild(card))
        cards[i].classList.remove("show","match","unmatch","disable")
    }

    moves = 0
    score.innerText = moves;
}

// Start Game
document.body.onload = start();

