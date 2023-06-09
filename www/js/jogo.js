const player = document.querySelector(".player"),
    heroBoy = document.querySelector(".playerBoy"),
    loose = document.querySelector(".loose"),
    tempo = document.querySelector(".tempo"),
    obstacle = document.querySelector(".obstacle");    

let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

loose.style.display = "none";
tempo.style.display = "none";

var pontos = new Array();

escolhePersonagem();

function escolhePersonagem(){
  var numPers = parseInt(localStorage.getItem("personagem"));
  
  
  if (numPers == 1){
      document.getElementById("player").src = "img/players/man1.gif";
  } else if(numPers == 2){
      document.getElementById("player").src = "img/players/women1.gif";
  }else if(numPers == 3){
      document.getElementById("player").src = "img/players/women2.gif";
  }
}


function jump(){
    start(); 
    loose.style.display = "none";
    if (player.classList != "animate"){
        player.classList.add("animate");
        obstacle.style.animation = " move linear 1.5s infinite ";
        obstacle.style.display = "";
    }
    

    setTimeout(function(){
        player.classList.remove("animate");
    }, 300)
}

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
      jump();
    }
}



// Verificar se o player bateu nos obstaculos

let aliveState = setInterval(function(){
    var points = parseInt(localStorage.getItem("points"));
    var bestRecord = parseInt(localStorage.getItem("bestRecord"));
    let playerTop =  parseInt(window.getComputedStyle(player).getPropertyValue("top"));

    let obstacleLeft =  parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if (obstacleLeft < 45 && obstacleLeft > 20 && playerTop >= 310){
        obstacle.style.animation = 'none';

        pontos.push(parseInt(minute + second));
        console.log(pontos);

        localStorage.setItem("listPoints", JSON.stringify(pontos));
        localStorage.setItem("points", parseInt(minute + second));

        if(!localStorage.getItem("bestRecord"))
            localStorage.setItem("bestRecord", 0);

        console.log(JSON.parse(localStorage.getItem("points")));
        document.getElementById("pontos").innerHTML = "Fez: " + localStorage.getItem("points") + "s";
        loose.style.display = "block";

        if (bestRecord < points){
            sendBestScore();
            localStorage.setItem("bestRecord", points);
        } 
        document.getElementById("recorde").innerHTML = "Melhor Record: " + localStorage.getItem("bestRecord") + "s";

        pause();
        reset();
    }

}, 10)


function sendBestScore(){
  var bestScore = localStorage.getItem("bestRecord");
  var nomePlayer = localStorage.getItem("username");

  var requests = new XMLHttpRequest();
  var envio = 'https://asfernandes.com/api/corridaObstakulo/registTopScore.php?table=a9485&user=' + nomePlayer + "&" + bestScore;
  requests.open('GET', envio , true); 

  requests.onload = function(){
    var dados = JSON.parse(this.response);
    if(requests.status >= 200 && requests.status < 400){
        console.log(dados);
        console.log("sucesso");
    } else{
         console.log("Um erro aconteceu na requisição");
    }
  }
  requests.send();
}



function start() {
    pause();
    cron = setInterval(() => { timer(); }, 10);
  }
  
  function pause() {
    clearInterval(cron);
  }
  
  function reset() {
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    document.getElementById('hour').innerText = ':00';
    document.getElementById('minute').innerText = ':00';
    document.getElementById('second').innerText = ':00';
    document.getElementById('millisecond').innerText = '00';
  }


 function timer() {
    if ((millisecond += 10) == 1000) {
      millisecond = 0;
      second++;
    }
    if (second == 60) {
      second = 0;
      minute++;
    }
    if (minute == 60) {
      minute = 0;
      hour++;
    }
    document.getElementById('hour').innerText = returnData(hour);
    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
    document.getElementById('millisecond').innerText = returnData(millisecond);
  }
  
  function returnData(input) {
    return input > 10 ? input : `0${input}`
  }

function goJogo(){
  window.location.href = "jogo.html";
}
 

function goPage(){
  window.location.href = "paginainicial.html";
}