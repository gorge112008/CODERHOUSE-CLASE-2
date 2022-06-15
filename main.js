/*si (condicion) entonces { algo }**************************************************************/

//operador de comparacion
//Asignacion =
//Comparacion == (valores) / === (valores y tipo de dato)

/*if (true){
    console.log("Este bloque se va a ejecutar");
}
console.log("Este es un bloque posterior");

//NUMEROS:********************************************

let numero=16;
if (numero == 16){
    console.log("Este bloque se va a ejecutar");
}
if (numero === "16"){
    console.log("Este bloque no se va a ejecutar");
}
if (numero == 15){
    console.log("Este bloque no se va a ejecutar");
}
console.log("Este es un bloque posterior");

//COLORES:********************************************

let color = prompt("Ingreso el color");
if (color="Verde") {
    console.log ("El color que elegiste es verde");
}else{
    console.log ("El color que elegiste NO es Verde "+ " es: " + color);

}

//USUARIOS:******************************************

let user = prompt("ingresa tu usuario");
if (user == ""){
    console.log("Campo requerido");
}else {
    let pass = prompt("ingresa tu password")
    if (pass=="") {
        console.log("Campo requerido");
    } else {
        console.log("Bienvenido/a " + user);
    }
}*/

//PRECIOS:******************************************

/*let numeroIngresado=prompt("Ingresa un precio");

if (numeroIngresado < 30) {
    console.log( "El precio ingresado es menor que 30")
} else if (numeroIngresado < 75) {
    console.log( "El precio ingresado es menor que 75")
} else if (numeroIngresado < 100){
    console.log("El precio ingresado es menor que 100");
}else {
    console.log ("El precio ingresado supera el presupuesto");
}

//VARIABLES BOOLEANAS:*******************************

let valorNumerico = 34;
let esValido = valorNumerico > 128;
console.log(esValido);
if (esValido) {
    console.log ("La variable esValido es verdadera");
} else {
    console.log ("La variable esValido es falsa");
}



//COMPARACIONES DE IGUALDAD O DESIGUALDAD "==" "!=":***********

let nombreIngresado = prompt("Ingresar nombre");
let apellidoIngresado = prompt ("Ingresar apellido");

if (nombreIngresado != "" && apellidoIngresado != "") {
    alert("Nombre: "+ nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
    alert ("Error: Ingresar nombre y apellido");
}


//COMPARACIONES CON CONDICION "||":***********

let nombreIngresado = prompt("Ingresar nombre");

let PrimerComparacion=nombreIngresado == "Jorge";
let SegundaComparacion=nombreIngresado == "JORGE";
let valorNumerico = 24;
let esValido = valorNumerico > 18;


if(PrimerComparacion  || SegundaComparacion || esValido ){
    console.log("Bienvenida Jorge que bueno verte");
}else{
    console.log ("Hola "+ nombreIngresado + " mucho gusto");
}


//COMPARACIONES CON CONDICIONES COMBINADAS:***********

let nombreIngresado   = prompt("Ingresar nombre");

if(
    nombreIngresado !="" &&
     (nombreIngresado == "Jorge" || nombreIngresado =="JOR")){
    alert("Bienvenida Jorge que bueno verte"); 
}else{
    alert("Hola" + nombreIngresado + " mucho gusto");
}
*/

//COMPARACIONES CON UN LOGIN:***********

let usuario="Jorge"
let password = 1234

let user= prompt("Ingresa tu usuario")
let pass= prompt("Ingresa tu contraseña")

if(user == usuario && pass==password) {
    console.log("Bienvenido: " + user);
}else {
        /* UN EJEMPLO DE MALA PRACTICA PARA LOGIN
        if (user != usuario) {
            console.log ("Usuario incorrecto");
        }
        if (user != password) {
            console.log ("Password incorrecto");
        }
        ES UNA BUENA PRACTICA COLOCAR ALGO GENERICO PARA LA SEGURIDAD */
        console.log ("Campos incorrectos");
}