
function verifica(){
    var username = document.getElementById("username").value;
    var nome = document.getElementById("nome").value;
    var ilha = document.getElementById("ilha").value;

    if(username === null && nome === null && ilha === null){
        window.location.href = 'index.html';
    }

    if(localStorage.getItem("nomePlayer") !== null){
        window.location.href = "paginainicial.html";
    }

    var userVar = localStorage.getItem('nome');
    if (userVar === nome){
        //console.log("Usuário EXISTE no SISTEMA");
        document.write('redirecionar');
        window.location.href = 'paginainicial.html';
    }else{
        //console.log("Usuario inexistente no sistema");
        localStorage.setItem("nome" , nome);
        localStorage.setItem("username" , username);
        localStorage.setItem("ilha" , ilha);

        localStorage.setItem("nomePlayer", nome);
        localStorage.setItem("username", username);

        alert("Usuário foi cadastrado no sistema");
        window.location.href = 'paginainicial.html';

        criarUserApi(username);
    }

    console.log(localStorage.getItem('nome'));
    console.log(localStorage.getItem('username'));
    console.log(localStorage.getItem('ilha'));

}

function criarUserApi(user){
   var requests = new XMLHttpRequest();
   requests.open('GET', 'https://asfernandes.com/api/corridaObstakulo/topScore.php?table=a9485&user=' + user, true); 
   requests.onload = function(){
   var dados = JSON.parse(this.response);
   if(requests.status >= 200 && requests.status < 400){
      console.log(dados);
      console.log("sucesso");
   } else{
        console.log("Um erro aconteceu na requisição");
    }

        var tamanho = Object.keys(dados).length;
        console.log(tamanho);
}
}