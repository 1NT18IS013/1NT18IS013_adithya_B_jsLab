const cards = [...document.querySelectorAll('.card')];

let cardsMatched = [...document.querySelectorAll('.match')];

let score = document.getElementsByClassName("score");
// console.log(cards);

// array of opened cards
let cardsOpen = [];

// to flip/open cards
const showCards = (e) => {
    e.target.classList.add("show");
    e.target.classList.add("disable");
}

const enable = () => {
    // console.log(cards);
    cards.forEach(card => {
        card.classList.remove("disable");
        cardsMatched.forEach(card => card.classList.add("disable"));
    })
}

const disable = () => {
    cards.forEach(card => card.classList.add("disable"));
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
    cardsOpen.forEach(card => {
      card.classList.add("unmatch");
    });
    disable();
    setTimeout(function(){
        cardsOpen.forEach(card => card.classList.remove("show", "match"));
        enable();
        cardsOpen = [];
    }, 1000);
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

