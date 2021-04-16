const box1 = document.getElementById("b1");
const box2 = document.getElementById("b2");
const box3 = document.getElementById("b3");
const box4 = document.getElementById("b4");

const res = document.getElementById("result");


box1.addEventListener('mouseover', (e) => {
    showMessage("Welcome ma friend! 3 more steps to go... 😛 ");
})

box2.addEventListener('mousedown', (e) => {
    showMessage("You're getting there.. don't rush 😂");
})

box3.addEventListener('dblclick', (e) => {
    showMessage("Twise clicked ! hungry to reach your goal? 🤭");
})

box4.addEventListener('click', (e) => {
    showMessage("Yay! 🤙 you've MADE IT");
})
// To display message
const showMessage = (message) => res.innerText = message;