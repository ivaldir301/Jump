
function jogo(){
    window.location.href = 'escolherPers.html';
}

function configuracoes(){
    window.location.href = 'configuracoes.html';
}

function topScores(){
    window.location.href = "topscores.html";
}

function sair(){
    window.location.href = "index1.html";
}

if (localStorage.getItem('nome') === null 
&& localStorage.getItem('username') === null
&& localStorage.getItem('ilha') === null){
    alert("Não estás logado");
    window.location.href = 'index1.html';
}



