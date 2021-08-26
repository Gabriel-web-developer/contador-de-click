
//Envento de clicks al boton

function contar(){  
    var contador = 1;
    var boton = document.getElementById("button").onclick = function(){
    var count = document.getElementById("inner").innerHTML = contador;
        contador++; 

        if (contador == 102) {
            alert("Has logrado dar el maximo de clicks admitidos");
            return true;
        }
    }
}

contar();