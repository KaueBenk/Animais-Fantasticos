// Retorne no console todas as imagens do site

const imagens = document.querySelectorAll("img");
console.log(imagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensPalavra = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagensPalavra);
// console.log(imagens.querySelectorAll('[src^="./img/imagem"]'));

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('a[href^="#"]');
console.log(linksInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2 = document.querySelector(".animais-descricao h2");
console.log(h2);

// Selecione o último p do site
const p =
  document.querySelectorAll("p")[--document.querySelectorAll("p").length];
console.log(p);
