//Hola
/*
comentario de varias lines

*/

// alert("HOLA soy un arlet")

//variables

var nombre="Miguel";

// recomendada
let nombre21="nombre2";

//variables
var nombre="Miguel";
let nombre2="Javier";
let edad=28;
let estatura=1.80;
let logico=true;

//mostrar en pantalla console
console.log("Hola estoy en la consola");
console.log("Hola tengo"+edad+"anios");

//mostrar en pantalla writw
document.write("Hola estoy en la pantalla <br>");
document.write("<h2>Hola tengo "+edad+" anios<h2>");

//mostrar en pantalla getElementById
let datos=document.getElementById("informacion");
datos.innerHTML="Hola este es el contenido de innerhtml"
datos.innerHTML+="<hr><h3>Hola este es el contenido de innerhtml</h3>"
datos.innerHTML+="<hr><h3>Mido: "+estatura+" metros </h3>"

datos.innerHTML += `
    <br>
    <hr>
    <h1>
        Hola, soy contenido de innerHTML. Mi nombre es: ${nombre} 
        <br>Mi estatura es ${estatura}
    </h1>
`;

//condicion 

if(edad>=18)
    datos.innerHTML+=`
    <hr> Soy mayor de edad
`
else
datos.innerHTML+=`<hr> Soy menor de edad`

//Ciclos
for(let i=1; i<=5; i++)
{
    datos.innerHTML+=`<hr><h3>El numero es ${i} </h3>`
    
}

let i=1;
while (i<=5)
{
    datos.innerHTML+=`<hr><h3>El numero es ${i}</h3>`
    i++;
}

while (i<=5);

//Funciones 

//Funcion que no recibe parametros y no regresa valor

function suma1()
{
    let n1=2;
    let n2=3;
    suma=n1+n2
    datos.innerHTML+=`<hr><h3>El resultado de la suma es: ${suma}</h3>`;
}

suma1();

//Funcion que no recibe parametros y regresa valor
function suma2() {
    let n1 = 5;
    let n2 = 6;
    let suma = n1 + n2;
    return suma;
}

// Llamada a la función y uso del valor retornado
let resultadoSuma2 = suma2();
datos.innerHTML += `<hr><h3>El resultado de la suma2 es: ${resultadoSuma2}</h3>`;


//Funcion que si recibe parametros y no regresa valor 

function suma3(numero1,numero2)
{
    let n1=numero1;
    let n2=numero2;
    suma=n1+n2
    datos.innerHTML+=`<hr><h3>El resultado de la suma3 es: ${suma}</h3>`;
}

suma3(4,3);

//Funcion que si recibe parametros y regresa valor
function suma4(numero1, numero2) {
    let n1 = numero1;
    let n2 = numero2;
    let suma = n1 + n2;
    return suma;
}

// Llamada a la función y uso del valor retornado
let resultadoSuma4 = suma4(7, 8);
datos.innerHTML += `<hr><h3>El resultado de la suma4 es: ${resultadoSuma4}</h3>`;



//Areglos
let animales = []; 
animales[0] = "Perro";
animales[1] = "Gato";
animales[2] = "Ave";

let animales2 = ["Tigre", "Leon", "Elefante"]; 


for (let i = 0; i < animales.length; i++) {
    datos.innerHTML += `<hr><h1>El animal es ${animales[i]}</h1>`; 
}
