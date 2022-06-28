var edad=18
if (edad==18) {
    console.log("puedes votar")
} else if (edad>18) {
    console.log("puedes votar")
}else{
    console.log("eres menor de edad")
}
// otro tipo de if
var a=1
var re=a===1?"si soy un uno":"no soy un uno"//este es el otro if
console.log(re)

var pi="piedra";
var pa="papel";
var ti="tijera"

function ganador(yo, compu){
    if (yo == "tijera"  && compu == "papel") 
    {
        console.log("Ganaste tu");
    }
    else if (yo == "Piedra"  && compu == "tijeras") 
    {
        console.log("Ganaste tu");
    }
    else if (yo == "papel"  && compu == "piedra") 
    {
        console.log("Ganaste tu");
    }
    else if (yo == compu ) 
    {
        console.log("empate");
    }
    else {
        console.log("Perdiste")
    }
}
// llamamos al metodo para pasarle parametros
ganador("papel", "tijera");