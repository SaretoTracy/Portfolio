const text = document.querySelector(".logo");
const txtLogo = text.textContent;
const splittxtLogo = txtLogo.split("");

console.log(splittxtLogo);
text.textContent = ("");

for (let i = 0; i < splittxtLogo.length; i++) {
    text.innerHTML += "<span>" + splittxtLogo[i] + "</span>"
}