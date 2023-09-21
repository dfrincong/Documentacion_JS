/* let coffees = ["French Roast", "Colombian", "Kona"];
console.log(coffees);

let myList = ["home", , "school", ];
console.log(myList[1]); */

// Strings
let cadena = "métodos de los strings";
console.log(cadena);
console.log(cadena.length); // cuenta caracteres
console.log(cadena.includes("z")); // ¿incluye?
console.log(cadena.startsWith("m")); // ¿empieza?
console.log(cadena.endsWith("m")); // ¿termina?
console.log(cadena.replace("los strings", "las cadenas")); // reemplace por
console.log(cadena.slice(8, 22)); // extrae  y devuelve una nueva cadena
console.log(cadena.substring(8, 22)); // subconjunto
console.log(cadena.repeat(2)); // número de copias
console.log('mi ' + 'cadena'); // concatena

// operador ternario
let edad = 19;
const estado = (edad >= 18) ? "adulto" : "joven";
console.log(estado);

// objeto Math
console.log(Math.PI); // PI
console.log(Math.round(2.5)); // redondeo
console.log(Math.sqrt(169)); // raíz cuadrada
console.log(Math.pow(3, 4)); // potencia
console.log(Math.min(1,3,5,7,9,-8,2));
console.log(Math.max(1,3,5,7,9,-8,2));
console.log(Math.random()); // aleatorio

// switch, case
let k = 8;
switch (k) {
    case 5:
        console.log("El número es cinco");
        break;
    case 8:
        console.log("El número es ocho");
        break;
    case 10:
        console.log("El número es diez");
        break;
    default:
        console.log("El número es " + mivariable);
};

// datos dinámicos
console.log(`k es igual a ${k}`);


// do while
let jonas = 1
do {
    console.log(`3 ** ${jonas} = `, 3 ** jonas);
    jonas ++;
} while (jonas <= 5);

// forEach, .map (para recorrer)
const informacion = ['Zona Franca', 'Campus', 'GBP', 'Bucaramanga'];
informacion.forEach((element, index) => {
    console.log(`${index}: ${element}`);
});

const lenguajes = ['python', 'java', 'php', 'c', 'c++', 'pascal'];
const nuevoArreglo = lenguajes.map((lenguaje, indice) => {
    return lenguaje.toUpperCase();
});
console.log(nuevoArreglo);

// DOM
console.log("DOM");
console.log(document.body);  // llama al html

const elementos = document.getElementsByClassName("titulo"); // llama la clase
console.log("getElementsByClassName,", elementos);
let elementoModified = elementos[0].textContent.toLocaleUpperCase();
console.log(elementoModified);

const identi = document.getElementById('uno'); // lama el id
console.log("getElementById,", identi);

const elementoPorEtiqueta = document.querySelector('p');  // selecciona elemento, clase o id (solo el primero)
const elementoPorClase = document.querySelector('.titulo');
console.log("querySelector,", `Por etiqueta: ${elementoPorEtiqueta.textContent}`);
console.log(`Por clase: ${elementoPorClase.textContent}`);

const seleccionAll = document.querySelectorAll(".titulo"); // selecciona todos los que encuentre
seleccionAll.forEach(elemento => console.log("querySelectorAll", elemento));

document.querySelector("h1").style.color = "red"; // style desde js

/*  generar html con javascript:
    document.createElement("etiqueta")
    document.insertBefore(elementoInsertar,dondeInsertar) en el DOM
    document.appendChild(elementoInsertar) en el código */

// localStorage

// Objeto a guardar
const mascota = {
    nombre: 'Tony',
    edad: '2 años',
    }
console.log(1, mascota);
//Guardamos la información y convertimos a string el objeto
localStorage.setItem('mascota', JSON.stringify(mascota));
//Obtenemos el objeto del local storage y lo guardamos
let mascotaGuardada = localStorage.getItem('mascota');
console.log(2, mascotaGuardada);
//Convertimos la información a un objeto nuevamente
mascotaGuardada = JSON.parse(mascotaGuardada);
console.log(3, mascotaGuardada);
//Imprimir información
console.log(4, `Nombre: ${mascotaGuardada.nombre}`);
console.log(5, `Edad: ${mascotaGuardada.edad}`);
//Eliminamos la información guardada
localStorage.removeItem('mascota');

// importar datos
import { nombres } from "./desestructuracion.js";
import textico from "./desestructuracion.js";

nombres("Guerrero"); //normal
console.log(textico);  //por defecto

// objetos literales
console.log(mascota);
console.log({
    mascota  //objeto dentro de otro objeto con el mismo nombre
});

// spread
const mascotaNueva = {...mascota}; // clona el objeto
console.log("nueva", mascotaNueva);

// promesas
const aprobar = false;
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (aprobar) {
            resolve();
        } else {
            reject();
        }
    }, 1500);
});

promesa
    .then(() => console.log("se cumplió"))
    .catch(() => console.log("no se cumplió"))
    .finally(() => console.log("se acabó"));

// fetch API
fetch("./style.css") //Petición a la URL o ruta
    .then((respuesta) => respuesta.text()) //convertir a texto
    .then((data) => console.log(data)) //imprimir si todo sale bien
    .catch(() => console.log("Error al traer la informacíon"))
    .finally(() => console.log("Petición finalizada"));
