function escolha(personagem){
    if(personagem == 1){
        localStorage.setItem("personagem", 1);
    }else if(personagem == 2){
        localStorage.setItem("personagem", 2);
    }else if(personagem == 3){
        localStorage.setItem("personagem", 3);
    }
    window.location.href = "jogo.html";
}

function goPage(){
    window.location.href = "paginainicial.html";
}
