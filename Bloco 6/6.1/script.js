// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function previne (event) {
    event.preventDefault();
}

function apenasA (event) {
    const charac = event.key;
    if (charac !== 'a') {
        event.preventDefault();
    }
}

HREF_LINK.addEventListener ('click', previne);
INPUT_CHECKBOX.addEventListener ('click', previne);
INPUT_TEXT.addEventListener ('keypress', apenasA);