const text = document.querySelector(".logo");
const txtLogo = text.textContent;
const splittxtLogo = txtLogo.split("");
/** Making the text into an array */
console.log(splittxtLogo);
text.textContent = ("");
/**looping span element through th array */
for (let i = 0; i < splittxtLogo.length; i++) {
    text.innerHTML += "<span>" + splittxtLogo[i] + "</span>"
}

/** putting in the letters one by one*/
let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = text.querySelectorAll('span')[char]
    span.classList.add('fade');
    char++
    if (char === splittxtLogo.length) {


        complete();
        return;
    }
}
/**after it reaches final interval */
function complete() {
    clearInterval(timer);
    timer = null;
}
/**menu navbar */