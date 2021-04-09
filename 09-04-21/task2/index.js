const box1 = document.querySelector("#b1");
const box2 = document.querySelector("#b2");
const box3 = document.querySelector("#b3");
const box4 = document.querySelector("#b4");

const res = document.querySelector("#result");


box1.addEventListener('mouseover', (e) => {
    showMessage("Welcome ma friend! 3 more steps to go... 😛 ");
})

box2.addEventListener('mousedown', (e) => {
    showMessage("You're getting there.. don't rush 😂");
})

box3.addEventListener('dblclick', () => {
    showMessage("Twise clicked ! hungry to reach your goal? 🤭");
})

box4.addEventListener('click', () => {
    showMessage("Yay! 🤙 you've MADE IT");
})
// To display message
const showMessage = (message) => res.innerText = message;