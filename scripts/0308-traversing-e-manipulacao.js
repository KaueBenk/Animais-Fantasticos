// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const copy = document.querySelector(".copy");

copy.appendChild(menu.cloneNode(true));

// Selecione o primeiro DT da dl de Faq
const firstDT = document.querySelector(".faq dl").children[0];
console.log(firstDT);

// Selecione o DD referente ao primeiro DT
const DD = document.querySelector("dt").nextElementSibling;
console.log(DD);

// Substitua o conteúdo html de .faq pelo de .animais
let faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");

faq.innerHTML = animais.cloneNode(true).innerHTML;
