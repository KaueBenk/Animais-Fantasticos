// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]');

function handleClickAddClass(event) {
  event.preventDefault();
  linkInterno.forEach((item) => {
    item.classList.remove("ativo");
  });
  event.currentTarget.classList.add("ativo");
}

linkInterno.forEach((item) => {
  item.addEventListener("click", handleClickAddClass);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
function handleClickLogItem(item) {
  console.log(item.target);
  handleClickRemoveItem(item);
}

const body = document.querySelectorAll("body *");
body.forEach((item) => {
  // item.addEventListener("click", handleClickLogItem);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento
function handleClickRemoveItem(item) {
  item.target.remove();
}

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
let fontSize = 100;

function handleKeyboard(event) {
  if (event.key === "t") {
    fontSize += 10;
    document.querySelector("body").style.fontSize = `${fontSize}%`;
  }
}

window.addEventListener("keydown", handleKeyboard);
