// 1.
// a. Declarar variables llamadas 'continente', 'país', 'Departamento', 'ciudad', 'barrio' y 'dirección', y asigne sus valores de cantidad de habitantes, de acuerdo con su contexto real en su propio país.
// b. Registre sus valores en la consola.
let pais = 50000000;
console.log(`1. En Colombia hay ${pais} de habitantes aproximadamente`);

// 2.
// a. Declare una variable llamada 'esTercerMundista' y establezca su valor de acuerdo con su país. La variable debe contener un valor booleano. También declarar una variable 'idioma', pero no le asigne ningún valor todavía.
// b. Registrar los valores de 'esTercerMundista', 'continente', 'país' e 'idioma'
let esTercerMundista = true;
let idioma;
console.log(`2. {pais: ${pais}, esTercerMundista: ${esTercerMundista}, idioma: ${idioma}}`);
// 3.
// a. Establezca el valor de 'idioma' en el idioma que se habla donde vive.
// b. Piense en qué variables deberían ser variables constantes (¿qué valores nunca cambian y cuáles podrían cambiar?). Luego, cambia estas variables a const.
// c. observe lo que sucede.
idioma = "español";
console.log("3. cambiar idioma de let a const genera conflictos por la naturaleza de const");
// 4.
// a. Si su país se dividiera por la mitad, y cada mitad contendría la mitad de la población, Entonces, ¿cuántas personas vivirían en cada mitad?
// b. Aumente la población de su país en 1M y registre el resultado en la consola
// c. Finlandia tiene una población de 6 millones. ¿Tu país tiene más gente que ¿Finlandia?
// d. La población promedio de un país es de 33 millones de personas. ¿Tu país tiene menos gente que el país promedio?
// e. Basado en las variables que creó, cree una nueva variable 'descripción' que contiene una cadena con este formato: 'Colombia' está en América, y Bucaramanga que está en el departamento de Santander tiene un barrio llamado el prado y sus 3000 personas hablan inglés.
let descripcion ="'Colombia' está en América, y Bucaramanga que está en el departamento de Santander tiene un barrio llamado el prado y sus 3000 personas hablan inglés.";
console.log(`4. {a: vivirian ${pais/2} de personas, b: pais aumentado es = ${pais+1000000}}, c: ${pais>6000000 ? true:false}, d: ${pais<33000000 ? true:false}. e: ${descripcion}}`);
// 5. Repita el ejercicio usando Template strings
// Métodos en cadenas
// Cree 10 variables de tipo cadena donde almacene valores string en Ingles y aplique cada una de los siguientes métodos de cadena
// 1. length
// 2. includes()
// 3. back ticks o templatre strings
// 4. trimStart()
// 5. trimEnd()
// 6. replace
// 7. slice
// 8. split
// 9. ToUpperCase
// 10. ToLowerCase
let cadena = " Sugar and Salt ";
console.log(`5. {1: ${cadena.length}, 2: ${cadena.includes("z")}, 3: null, 4: ${cadena.trimStart()}, 5: ${cadena.trimEnd()}, 6: ${cadena.replace("Salt", "coffee")}, 7: ${cadena.slice(8,12)}, 8: ${cadena.split(" ")}, 9: ${cadena.toUpperCase()}, 10: ${cadena.toLowerCase()}`);