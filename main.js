var botao = document.getElementById("adicionarBotao");
botao.onclick = function() {
  var lista = document.getElementById("ult2");
  var novoItem = document.createElement("li");
  novoItem.innerHTML = '<li class="lit">' + 
    '<h1>Notícia 1</h1>' + 
    '<p> Olá Esta é uma Noticia Aleatoria Testando O Codigo </p>' + 
    '<button class="notbut">Acessar</button>' + 
    '</li>';
  lista.appendChild(novoItem);
};