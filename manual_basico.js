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

