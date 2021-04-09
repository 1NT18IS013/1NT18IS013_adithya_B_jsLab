const fname = document.querySelector('#fname');
const lname = document.querySelector('#lname');
const form = document.querySelector('#myForm');
const output = document.querySelector('.display');

// console.log(button);
form.addEventListener('submit', (e) => {
    e.preventDefault();

    firstName = fname.value;
    lastName = lname.value;
    output.innerText = `Hi ${firstName} ${lastName} !`;
});
