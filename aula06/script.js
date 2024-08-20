//variáveis
//Como manipular o DOM
//Pegando o elemento HTML
const title = document.getElementById("titulo");
const text = document.getElementById("text");

//Ouvindo um evento de click
title.addEventListener("click", () => {
  if (text.style.display !== "none") {
    text.style.display = "none";
    title.textContent = "Mostrar";
  } else {
    text.style.display = "block";
    title.textContent = "Esconder";
  }
});

console.log(title.textContent);

//mudando o conteúdo
title.textContent = "Novo conteúdo...";

function alterar(parametro) {
  const box = document.getElementById("box");

  switch (parametro) {
    case "blue":
      box.style.backgroundColor = parametro;
      break;
    case "green":
      box.style.backgroundColor = parametro;
      break;

    case "red":
      box.style.backgroundColor = parametro;
      break;
    case "violet":
      box.style.backgroundColor = parametro;
      break;
    case "height":
      var height = box.clientHeight + 5;

      box.style.height = height + "px";
      break;
    case "width":
        var width = box.clientWidth + 5;

        box.style.width = width + "px";
      break;
    case "radius":
      box.style.borderRadius = "56px";
      break;
    default:
      break;
  }
}
