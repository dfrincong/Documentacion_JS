// 1. Construir el algoritmo para un programa que ingrese tres notas de un alumno, si el promedio es menor o igual a 3.9 mostrar un mensaje "Estudie“, de lo contrario un mensaje que diga "becado"

// console.log("1");
// const x = Number(prompt("ingrese la nota 1 del alumno:"));
// const y = Number(prompt("ingrese la nota 2 del alumno:"));
// const z = Number(prompt("ingrese la nota 3 del alumno:"));
// let sumar = x + y + z;
// console.log(sumar);
// let elementos = 3;
// if ((sumar / elementos) <= 3.9) {
//     console.log("Estudie");
// } else {
//     console.log("Becado");
// };

// 2. Dado un número indicar si es par o impar y si es mayor de 10.

// console.log("2");
// const n = Number(prompt("ingrese un número:"));
// if (n%2==0) {
//     console.log("es par");
// } else {
//     console.log("es impar");   
// }
// if (n>10) {
//     console.log("es mayor de 10");
// } else {
//     console.log("no es mayor de 10");
// }

// 3. Construir el algoritmo para determinar el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.

// console.log("3");
// const resistencia = Number(prompt("ingrese la resistencia:"));
// const iCorriente = Number(prompt("ingrese la intensidad de la corriente:"));
// let voltaje = resistencia * iCorriente;
// console.log("voltaje = ",voltaje, "V");

// 4. Construir el algoritmo que solicite el nombre y edad de 3 personas y determine el nombre de la persona con mayor edad.

// console.log("4");
// const nombres = [];
// const edades = [];
// for (let i = 0; i < 3; i++) {
//     let nombre = prompt("ingrese su nombre: ");
//     let edad = Number(prompt("ingrese su edad: "));
//     nombres.push(nombre);
//     edades.push(edad);
// }
// if (edades[0] > edades[1] && edades[0] > edades[2]) {
//     console.log(nombres[0], "es el mayor");
// } else if (edades[1] > edades[0] && edades[1] > edades[2]){
//     console.log(nombres[1], "es el mayor");
// } else if (edades[2] > edades[0] && edades[2] > edades[1]){
//     console.log(nombres[2], "es el mayor");
// }

// 5. Construir el algoritmo que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario, informar el producto y la división del primero respecto al segundo.

// console.log("5");
// const numeros = [];
// for (let i = 0; i < 2; i++) {
//     let numero = Number(prompt("ingrese un número: "));
//     numeros.push(numero);
// }
// if (numeros[0] > numeros[1]) {
//     console.log("la suma de los numeros es: ", numeros[0] + numeros[1]);
//     console.log("la diferencia de los numeros es: ", numeros[0] - numeros[1]);
// } else if (numeros[0] < numeros[1]){
//     console.log("la multiplicación de los numeros es: ", numeros[0] * numeros[1]);
//     console.log("la división de los numeros es: ", numeros[0] / numeros[1]);
// } else {
//     console.log("son iguales");
// }

// 6. Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y la nota definitiva y halle al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantos mujeres.

// console.log("6");
// const cantidad = Number(prompt("ingrese la cantidad de estudiantes: "));
// const estudiantes = [];
// let maximo = - Infinity;
// let minimo = Infinity;
// let femenino = 0;
// let masculino = 0;
// for (let i = 0; i < cantidad; i++) {
//     let estudiante = new Object();
//     estudiante.nombre = prompt("ingrese su nombre: ");
//     estudiante.sexo = prompt("ingrese el sexo: ");
//     estudiante.nota = Number(prompt("ingrese la nota definitiva: "));
//     estudiantes.push(estudiante);
// };
// console.log(estudiantes);
// for (const estudiante of estudiantes) {
//     if (estudiante.nota > maximo) {
//         maximo = estudiante.nota;
//     };
//     if (estudiante.nota < minimo) {
//         minimo = estudiante.nota;
//     };
//     if (estudiante.sexo == "f") {
//         femenino += 1;
//     };
//     if (estudiante.sexo == "m") {
//         masculino += 1;
//     };
// };
// for (const estudiante of estudiantes) {
//     if (estudiante.nota == maximo) {
//         console.log(`${estudiante.nota} es la maxima nota`);
//     };
//     if (estudiante.nota == minimo) {
//         console.log(`${estudiante.nota} es la minima nota`);
//     };
// };
// console.log(`hay ${femenino} mujeres`);
// console.log(`hay ${masculino} hombres`);

// 7. Programa que pida el ingreso del nombre y precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador en su factura.

// console.log("7");
// const nombreArticulo = prompt("ingrese nombre articulo:");
// const precio = Number(prompt("ingrese precio:"));
// const cantidad = Number(prompt("ingrese cantidad:"));
// let pagoFinal = precio * cantidad;
// console.log(`el artículo ${nombreArticulo} le cuesta ${pagoFinal}`);

// 8. Programa que Ingrese por teclado:
// a. el valor del lado de un cuadrado para mostrar por pantalla el perímetro del mismo.
// b. la base y la altura de un rectángulo para mostrar el área del mismo.

// console.log("8");
// const lado = Number(prompt("ingrese largo de lado del cuadrado:"));
// const base = Number(prompt("ingrese base de rectangulo:"));
// const altura = Number(prompt("ingrese altura del rectangulo:"));
// console.log(`el perimetro del cuadrado es ${lado*4}`);
// console.log(`el area del rectángulo es ${base*altura}`);

// 9. N atletas han pasado a finales en salto triple en los juegos olímpicos femenino de 2022. Diseñe un programa que pida por teclado los nombres de cada atleta finalista y a su vez, sus marcas del salto en metros. Informar el nombre de la atleta campeona que se quede con la medalla de oro y si rompió récord, reportar el pago que será de 500 millones. El récord esta en 15,50 metros.

// console.log("9");
// const nAtletas = Number(prompt("ingrese el número de atletas"));
// const atletas = {};
// let maximo = - Infinity;
// const pago = "500 millones";
// const record = 15.50;
// for (let i = 0; i < nAtletas; i++) {
//     let nombre = prompt("ingrese su nombre: ");
//     let salto = Number(prompt("ingrese su salto: "));
//     atletas[nombre] = salto;
// };
// console.log(atletas);
// for (const atleta in atletas) {
//     if (atletas[atleta] > maximo) {
//         maximo = atletas[atleta];
//     };
// };
// for (const atleta in atletas) {
//     if (atletas[atleta] == maximo) {
//         console.log(`${atleta} ha sido la campeona y recibira ${pago}`);
//         if (atletas[atleta] > record) {
//             console.log(`${atleta} ha impuesto un nuevo record`);
//         };
//     };
// };

// 10. Desarrolle un programa cíclico que capture un dato numérico cada vez, y los vaya acumulando. El programa se detiene cuando el usuario digita un cero. El programa debe mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR VALOR Y MENOR VALOR.

// console.log("10");
// let numero = Number(prompt("ingrese un número"));
// const acumulando = [];
// let cont = 0;
// while (numero !== 0) {
//     acumulando.push(numero);
//     numero = Number(prompt("ingrese un número"));
// };
// for (const num of acumulando) {
//     cont = cont + num;
// };
// console.log("sumatoria de los números", cont);
// console.log("promedio de los números", cont/acumulando.length);
// console.log("cantidad de  números", acumulando.length);
// console.log("valor maximo entre los números", Math.max(...acumulando));
// console.log("valor minimo entre los números", Math.min(...acumulando));
// console.log(acumulando);