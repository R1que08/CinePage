document.addEventListener("DOMContentLoaded", function () {

  const btnEsquerdo = document.querySelector(".botao-esquerdo");
  const btnDireito = document.querySelector(".botao-direito");

  btnEsquerdo.addEventListener("click", function () {
    window.location.href = "../pagina2/pagina2.html";
  });

  btnDireito.addEventListener("click", function () {
    window.location.href = "../pagina4/index.html";
  });

});
