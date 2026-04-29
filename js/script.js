//=== ESTADO (dados da aplicação)===

let likeCount = 0;
let curtido = false; // flag booleana

let deslikeCount = 0;
let descurtido = false;

// função de curtir
function curtir() {

// === SERVICE (regras de negócio)===

if(curtido == false){
   likeCount++;
   curtido = true;
} else{
   likeCount--;
   curtido = false;
}

document.getElementById("likeCount").innerText = likeCount;
}

// função de descurtir
function descurtir(){

if(descurtido == false){
   deslikeCount++;
   descurtido = true;
} else{
   deslikeCount--;
   descurtido = false;
}

document.getElementById("deslikeCount").innerText = deslikeCount;
}

// === CONTROLER (intermediação)===

function clicarCurtir(){
   curtir();
} 

function clicarDescurtir(){
   descurtir();
}
// === EVENTOS ===

document.getElementById("likeBtn").addEventListener("click", clicarDescurtir);
document.getElementById("deslikeBtn").addEventListener("click", clicarDescurtir);