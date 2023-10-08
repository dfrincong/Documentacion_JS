// 1. A través del siguiente taller, construir un menú en una función alert que gestione las siguientes opciones de menú referentes al manejo de los arrays, objetos, funciones y otras operaciones en JavaScript entre dichos temas.

const menu = ()=>{
    let objeto = {};
    let array = [];
    let arrayDeObjetos = [];
    while (true) {
        alert(
            `
            MENU
            1.  Lectura de datos
            2.  Crear objeto
            3.  Mostrar objeto
            4.  Crear array
            5.  Mostrar array
            6.  Eliminar primer elemento del array
            7.  Eliminar último elemento del array
            8.  Eliminar cualquier elemento del array
            9.  Agregar elemento al comienzo del array
            10. Agregar elemento al final del array
            11. Crear array con objetos
            12. Iterar array con objetos con for
            13. Iterar array con objetos con forEach
            14. Iterar array con objetos con map y crear copia
            15. Eliminar elemento de un objeto dentro del array con objetos
            16. Salir
            `
        );
        let opcion = Number(prompt("ingrese una opción: "));
        if (opcion == 1) {
            console.log("no entendí que era leer datos");
        } else if (opcion == 2) {
            let n = Number(prompt("ingrese el número de items a ingresar en el objeto"));
            for (let i = 0; i < n; i++) {
                let llave = prompt("ingrese la llave");
                let valor = prompt("ingrese el valor");
                objeto[llave] = valor;
            };
        } else if (opcion == 3) {
            console.log(objeto);
        } else if (opcion == 4) {
            let n = Number(prompt("ingrese el número de items a ingresar en el array"));
            for (let i = 0; i < n; i++) {
                let valor = prompt("ingrese el valor");
                array.splice(array.length, 0, valor);
            };
        } else if (opcion == 5) {
            console.log(array);
        } else if (opcion == 6) {
            let eliPrimero = array.shift();
            console.log("se eliminó el primer elemento");
        } else if (opcion == 7) {
            let eliUltimo = array.pop();
            console.log("se eliminó el último elemento");
        } else if (opcion == 8) {
            let n = Number(prompt("ingrese la posicion del elemento a eliminar"));
            let eliElemento = array.splice((n-1), 1);
            console.log(`se eliminó el elemento ${n}`);
        } else if (opcion == 9) {
            let n = (prompt("ingrese el elemento a crear"));
            let agrPrimero = array.unshift(n);
            console.log("se agrega elemento al inicio del array");
        } else if (opcion == 10) {
            let n = (prompt("ingrese el elemento a crear"));
            let agrPrimero = array.push(n);
            console.log("se agrega elemento al final del array")
        } else if (opcion == 11) {
            const n = Number(prompt("ingrese el número de objetos a crear"));
            for (let i = 0; i < n; i++) {
                const objetoSecudario = {};
                const items = Number(prompt("ingrese el número de items a ingresar en el objeto"));
                for (let i = 0; i < items; i++) {
                    let llave = prompt("ingrese la llave");
                    let valor = prompt("ingrese el valor");
                    objetoSecudario[llave] = valor;
                };
                arrayDeObjetos.push(objetoSecudario);
            }
            console.log(arrayDeObjetos);
        } else if (opcion == 12) {
            for (let i = 0; i < arrayDeObjetos.length; i++) {
                const elemento = arrayDeObjetos[i];
                console.log(elemento);
            }
        } else if (opcion == 13) {
            arrayDeObjetos.forEach((elemento)=>{
                console.log(elemento);
            })
        } else if (opcion == 14) {
            arrayDeObjetos.map((elemento)=>{
                console.log(elemento);
            })
        } else if (opcion == 15) {
            let n = Number(prompt("ingrese la posicion del objeto de donde eliminara"));
            let llave = prompt("ingrese la llave a eliminar");
            const dic = arrayDeObjetos[n-1];
            const eliminar = delete dic[llave];
            console.log(`se eliminó el elemento ${llave} del objeto ${n}`);
            console.log(arrayDeObjetos);
        } else if (opcion == 16) {
            console.log("saliendo");
            break
        } else {
            console.log("ingrese una opción valida");
        }
    };
};
menu();