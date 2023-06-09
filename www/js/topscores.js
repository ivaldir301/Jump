
function getInfo(){
   var requests = new XMLHttpRequest();
   requests.open('GET', 'https://asfernandes.com/api/corridaObstakulo/topScore.php?table=a9485', true); 
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

        for(i = 0; i < tamanho; i++){
            var userName1 = dados[i].username;
            var pontos1 = dados[i].top_score;    
            document.getElementById("nomeplayer").innerHTML = userName1 + ": " + pontos1 + " segundos";
        }

        var tamArraypointsLocal = JSON.parse(localStorage.getItem("listPoints"));
        console.log(tamArraypointsLocal);

        var tam = Object.keys(tamArraypointsLocal).length;

        var tag = document.createElement("p");
        var texto;

        for(i = 0; i < tam; i++){
            var tag = document.createElement("p");
            var texto = document.createTextNode(localStorage.getItem("username") + ": " + tamArraypointsLocal[i] + " segundos");

            tag.appendChild(texto);
            var elemento = document.getElementById("listatop");
            elemento.appendChild(tag);
        }
   }

   requests.send();
}

function goPage(){
    window.location.href = "paginainicial.html";
}

getInfo();
