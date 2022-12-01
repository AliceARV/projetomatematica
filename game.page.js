player1 = localStorage.getItem("player1");
player2 = localStorage.getItem("player2");
pp1 = 0;
pp2 = 0;
//bota ; automatico pq ninguem lembra//
//alice bota ; sua sonsa!//

document.getElementById("player1").innerHTML = player1 + ": ";
document.getElementById("player2").innerHTML = player2 + ": ";

document.getElementById("player1_pontos").innerHTML = pp1;
document.getElementById("player2_pontos").innerHTML = pp2;

document.getElementById("playerpergunta").innerHTML = "Turno de pergunta: " + player1;
document.getElementById("playerresposta").innerHTML = "Turno de resposta: " + player2;

function enviar() {
    numero = document.getElementById("numero").value;
    numero2 = document.getElementById("numero2").value;
    actual_answer = parseInt(numero) * parseInt(numero2);
    
}
numeropergunta= "<h4>" + numero + "X"+ numero2 + "</h4>";
input_box= "<br> Resposta: <input type='text' id='input_check_box'>";
botaodechecar="<br><br><button class='btn btn-info' onclick='check()'>CHECAR</button>";
row = numeropergunta + input_box+ botaodechecar;

perguntador = player1;
respondedor = player2;
function check() {
    resposta = document.getElementById("input_check_box").value;

    
   
        if (respondedor == player1) {
            pp2++;
            console.log(pp2);
            document.getElementById("player2_pontos").innerHTML = pp2;
        }
        else {
            pp1++;
            console.log(pp1);
            document.getElementById("player1_pontos").innerHTML = pp1;

        }
    

    if (respondedor == player1) {
        respondedor = player2;
        perguntador = player1;
    }
    else {
        respondedor = player1;
        perguntador = player2;
    }
    document.getElementById("playerpergunta").innerHTML = "Turno de pergunta: " + perguntador;
    document.getElementById("playerresposta").innerHTML = "Turno de resposta: " + respondedor;
    document.getElementById("output").innerHTML = "";
}

