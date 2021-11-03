

//declarar variáveis

let state = 0;
let target;
let newChild;
let allSpans;
let eventTarget;
let txt;
let eachSpan;
let letter;
let oneLetter;
let ltrSpan;
let notSpan;
let titleTarget;
let bodyTarget;

//função que insere span no main

target = document.querySelector("main");

function writeSpan() {
  newChild = document.createElement("span");
  target.appendChild(newChild);
  newChild.innerHTML =
    "privacy";
}

//função loop do span

function loopSpan() {
  for (let i = 0; i < 500; i++) {
    writeSpan();
  }

  allSpans = document.querySelectorAll("span");
}

target.addEventListener("click", function () {
  console.log("cenas");
});



//obter o conteúdo de texto dos spans

function getText(){
  for (let i = 0; i < allSpans.length; i++) {
    eachSpan = allSpans[i];
    txt = eachSpan.innerHTML;
    
    //obter os arrays de letras do texto dos spans
    for (let k = 0; k<txt.length; k++){
      letter = txt.split([]);

      //obter cada letra
      oneLetter = letter[k];
    
      //criar um span para por cada letra num span individual
      ltrSpan = document.createElement("span");

      //dar uma classe a esse span para se distinguir
      ltrSpan.setAttribute ('class', 'eachLtr');

      //inserir esse span dentro de cada span com as palavras privacy/transparency
      eachSpan.appendChild(ltrSpan);

      //por as letras individuais dentro do span .eachLtr
      ltrSpan.innerHTML = oneLetter;

      }  
}

}


//função muda as cores de fundo e letras

titleTarget = document.querySelector('h1');
bodyTarget = document.querySelector('body');

function changeColors(){
  if (state === 0){
titleTarget.style.color = "white";
bodyTarget.style.backgroundColor = "rgb(51, 46, 60)";
target.style.color = "rgb(51, 46, 60)";

}

if (state === 1){
  bodyTarget.style.backgroundColor = "rgb(1, 35, 40)";
  target.style.color = "rgb(1, 35, 40)";
}
}


//função mudança de privacy para transparency

function changePtoT() {
  state = 1;
  for (let n = 0; n < allSpans.length; n++) {
    allSpans[n].innerHTML =
      "transparency";
  }
  getText();
}


//função mudança de transparency para privacy

function changeTtoP() {
  state = 0;
  for (let k = 0; k < allSpans.length; k++) {
    allSpans[k].innerHTML =
      "privacy";
  }
  getText();
}

//quando clicar no fundo, privacy muda para transparency e vice-versa

bodyTarget.addEventListener('click', function() {
	if(state === 0) {
		changePtoT();
    changeColors();
	} else {
		changeTtoP();
    changeColors();
	}
});


//carregar a página com o loop de palavras já no fundo, com acesso às letras individuais, e com as cores de fundo e das letras
window.onload = loopSpan();
window.onload = getText();
window.onload = changeColors();

