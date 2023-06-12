function changeTheme1(){
    var body = document.body;
    var buttons = document.querySelectorAll(".buttons");

  // Definir a imagem de fundo inicial e ajustar a opacidade
  body.style.backgroundImage = 'url("imagens/Nasus.jpg")';
  body.style.transition = "background-image 0.5s ease";

  // Alterar cor dos botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "rgb(252, 0, 55)";
    buttons[i].style.color = "white";
  }

  // Acessar o elemento desejado usando ou document.querySelectorAll()
var navLink = document.querySelectorAll("nav a");

for (var i = 0; i < navLink.length; i++) {
    navLink[i].classList.add("after-red");
  }

  var title = document.getElementsByTagName("h6");
  for (var i = 0; i < title.length; i++) {
    title[i].style.color = "rgb(252, 0, 55)";
    
  }

}
function changeTheme2(){
    var body = document.body;
    var buttons = document.querySelectorAll(".buttons");

  // Definir a imagem de fundo inicial e ajustar a opacidade
  body.style.backgroundImage = 'url("imagens/yasuo.jpeg")';
  body.style.transition = "background-image 0.5s ease";

  // Alterar cor dos botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "rgb(111, 4, 252)";
    buttons[i].style.color = "white";
  }

  // Acessar o elemento desejado usando ou document.querySelectorAll()
var navLink = document.querySelectorAll("nav a");

for (var i = 0; i < navLink.length; i++) {
    navLink[i].classList.add("after-gray");
  }

  var title = document.getElementsByTagName("h6");
  for (var i = 0; i < title.length; i++) {
    title[i].style.color = "rgb(111, 4, 252)";
    
  }
}
function changeTheme3(){
    var body = document.body;
    var buttons = document.querySelectorAll(".buttons");

  // Definir a imagem de fundo inicial e ajustar a opacidade
  body.style.backgroundImage = 'url("imagens/streetFighter.jpg")';
  body.style.transition = "background-image 0.5s ease";

  // Alterar cor dos botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "rgb(4, 215, 252)";
    buttons[i].style.color = "white";
  }

  // Acessar o elemento desejado usando ou document.querySelectorAll()
var navLink = document.querySelectorAll("nav a");

for (var i = 0; i < navLink.length; i++) {
    navLink[i].classList.add("after-blue");
  }

  var title = document.getElementsByTagName("h6");
  for (var i = 0; i < title.length; i++) {
    title[i].style.color = "rgb(4, 215, 252)";
    
  }
}
function changeTheme4(){
    var body = document.body;
    var buttons = document.querySelectorAll(".buttons");

  // Definir a imagem de fundo inicial e ajustar a opacidade
  body.style.backgroundImage = 'url("imagens/carro.jpg")';
  body.style.transition = "background-image 0.5s ease";

  // Alterar cor dos botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "rgb(1, 211, 29)";
    buttons[i].style.color = "white";
  }

  // Acessar o elemento desejado usando ou document.querySelectorAll()
var navLink = document.querySelectorAll("nav a");

for (var i = 0; i < navLink.length; i++) {
    navLink[i].classList.add("after-green");
  }

  var title = document.getElementsByTagName("h6");
  for (var i = 0; i < title.length; i++) {
    title[i].style.color = "rgb(1, 211, 29)";
    
  }
}
function changeTheme5(){
    var body = document.body;
    var buttons = document.querySelectorAll(".buttons");

  // Definir a imagem de fundo inicial e ajustar a opacidade
  body.style.backgroundImage = 'url("imagens/pokemon.png")';
  body.style.transition = "background-image 0.5s ease";

  // Alterar cor dos botões
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].style.backgroundColor = "rgb(255, 230, 1)";
    buttons[i].style.color = "white";
  }

  // Acessar o elemento desejado usando ou document.querySelectorAll()
var navLink = document.querySelectorAll("nav a");

for (var i = 0; i < navLink.length; i++) {
    navLink[i].classList.add("after-yellow");
  }

  var title = document.getElementsByTagName("h6");
  for (var i = 0; i < title.length; i++) {
    title[i].style.color = "rgb(218, 196, 0)";
    
  }
}
