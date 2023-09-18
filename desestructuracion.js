console.log("ARRAYS");
let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];
console.log("por índice:");
console.log(dias[2]);
let [v1,...je] = dias;
console.log("por desestructuración:");
console.log(v1);
console.log(je);

console.log("OBJECTS");
const persona = {
    id: 1,
    nombre: "Euripides",
    apellido: "da Silva"
};
console.log("por clave:");
console.log(persona.apellido);
console.log("por desestructuración:");
const {id,...ja} = persona;
console.log(id);
console.log(ja);

console.log("STRINGS");
let cadena = "Jesús de Nazareth";
let {length} = cadena;
console.log(length);
let {l,...resto} = cadena;
console.log(resto);