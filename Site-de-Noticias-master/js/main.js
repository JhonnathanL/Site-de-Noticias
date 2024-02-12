// Cadastra uma nova Notícia

document
  .getElementById("adicionarBotao")
  .addEventListener("click", function () {
    var container = document.getElementById("container");
    var novaColuna = document.createElement("div");
    novaColuna.classList.add("coluna");
    novaColuna.innerHTML = `
    <h1>${document.getElementById("tituloNoticia").value}</h1>
    <p>${document.getElementById("conteudoNoticia").value}</p>
    <p>${document.getElementById("autorNoticia").value}</p>
    <a href="">
      <button class="notbut"><p>Acessar</p></button>
    </a>
  `;
    container.appendChild(novaColuna);
  });
