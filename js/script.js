//=== BANCOS DE DADOS (JSON Simulado) === 

let post = {
  likeCount: 0,
  deslikeCount: 0,
  curtido: false,
  descurtido: false
}

//=== SERVICE (regras de negócio) === 

function curtir() {
  if (post.curtido == false){
    likeCount++;
    curtido = true;

    if(post.descurtido == true){
      deslikeCount--;
      descurtido = false;
    }

  }else{
    post.likeCount--;
    post.curtido = false;
  }

}

function descurtir() {
  if(post.descurtido == false){
    post.deslikeCount++;
    post.descurtido = true;

    if(post.curtido == true){
      post.likeCount--;
      post.curtido = false;
    }

  }
  else{
    post.deslikeCount--;
    post.descurtido = false;
  }
}

//=== API SIMULADA ===

function getPost(){
  return post;
}
function likePost(){
  curtir();
  return post;
}
function deslikePost(){
  descurtir();
  return post;
}

// === VIEW (interface/renderização)===
function atualizarTela(){
  document.getElementById("likeCount").innerText = likeCount;
  document.getElementById("deslikeCount").innerText = deslikeCount;
}

//=== CONTROLLER (intermediação)===

function clicarCurtir(){
  curtir();
  atualizarTela();
}
function clicarDescurtir(){
  descurtir();
  atualizarTela();
}

// === EVENTOS ===

document.getElementById("likeBtn").addEventListener("click", clicarCurtir);
document.getElementById("deslikeBtn").addEventListener("click", clicarDescurtir);

// === INICIALIZAÇÃO ===  

atualizarTela();