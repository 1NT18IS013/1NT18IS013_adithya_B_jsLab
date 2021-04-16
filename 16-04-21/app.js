const cards = [...document.querySelectorAll('.card')];

let score = document.getElementsByClassName("score");
// console.log(cards);

// array of opened cards
const cardsOpen = [];

// to flip/open cards
const showCards = (e) => {
    e.target.classList.add("show");
    e.target.classList.add("disable");
}

// matching cards
const matched = () => {
    cardsOpen.forEach(card => {
        card.classList.add("match");
        card.classList.remove("show");
    });
    cardsOpen = [];
}

// unmatched cards
const unmatched = () => {
    cardsOpen.forEach((card) => {
      card.classList.add("unmatch");
    });
    cardsOpen = [];
}

// game play
const flipCards = (e) => {
    cardsOpen.push(e.currentTarget);
    if (cardsOpen.length === 2) {
        cardsOpen[0].type == cardsOpen[1].type ? matched() : unmatched();
    }
}


// adding clickHandlers for every card
cards.forEach(card => {
    card.addEventListener('click', showCards);
    card.addEventListener('click', flipCards);
});

