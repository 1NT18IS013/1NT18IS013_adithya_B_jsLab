const btn1 = document.getElementById("btnTranslateM");
const btn2 = document.getElementById("btnTranslateS");
let inputTxt = document.querySelector(".content");

let output = document.getElementById("output");

const server1URL = "https://api.funtranslations.com/translate/minion.json";
const server2URL = "https://api.funtranslations.com/translate/shakespeare.json";

const getTranslationURL = (serverURL, text) => {
    return `${serverURL}?text=${text}`;
}

const errorHandler = (err) => {
    console.log("Error occcured", err);
    alert("Some issue with the server: try after sometime");
}

btn1.addEventListener('click', () => {
    // console.log('clicked');
    fetch(getTranslationURL(server1URL, inputTxt.value))
        .then(res => res.json())
        .then(json => {
            output.innerHTML = json.contents.translated;
        })
        .catch(errorHandler);
});

btn2.addEventListener('click', () => {
    // console.log('clicked');
    fetch(getTranslationURL(server2URL, inputTxt.value))
      .then((res) => res.json())
      .then((json) => {
        output.innerHTML = json.contents.translated;
      })
      .catch(errorHandler);
});