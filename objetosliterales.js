
//Extención en tiempo de ejecución
var objeto = {};
console.log(objeto)

objeto.nombre = "Juan";
console.log(objeto);


//Definición en declaración
var objeto2 = {nombre: "Juan"};
console.log(objeto2);

//Definición de objetos dentro de objetos
var objeto3 = {
    nombre:"Juan",
    edad: 35,
    domicilio: {
        calle: "Las Peras 234",
        pais: "Chile"
    }
}

console.log(objeto3);