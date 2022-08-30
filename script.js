// Verifique a distância da primeira imagem
// em relação ao topo da página

const img = document.querySelector("img").y;

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgs = document.querySelectorAll("img");
  let width = 0;

  imgs.forEach((imagem) => {
    width += imagem.offsetWidth;
  });

  console.log(width);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll("a");
links.forEach((link) => {
  if (link.clientHeight < 48) {
    console.log(link, "Tem a altura menor que a recomendada");
  }
  if (link.clientWidth < 48) {
    console.log(link, "Tem a largura menor que a recomendada");
  }
});
console.log(links);

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

if (window.matchMedia("(max-width: 720px)").matches) {
  document.querySelector(".menu").classList.add("menu-mobile");
}
