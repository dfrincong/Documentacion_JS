// 1. Construir un objeto literal "campus" que gestione la info(PROPIEDADES) de Campus, trainers, campers, niveles, tecnologías, teams y roadMap
// 1.1. De campus administrar los datos de contacto de las sedes en Bucaramanga, Bogotá, Medellín y México
// 1.2. De los trainers y campers, su nombre, sus teléfonos, teams (horarios de las teams=> día, hora y salones (nro y piso), y el email, y de los campers también horarios de inglés y ser.
// 1.3. De los campers, también gestionar su nivel actual, como su barrio y medio de transporte
// 1.4. De los niveles, su pre requisito, a que tecnología pertenece, si es electiva u obligatoria
// 1.5. De la roadmap , Nro de créditos, año, Nro de asignaturas

console.log("1.");
const campuslands = {
    campus: {
        bucaramanga: 6074567832,
        bogota: 6014672318,
        medellin: 6042415806,
        mexico: 5255582170,
    },
    trainers: {
        miguel: {
            telefono: 312456789,
            teams: [1, 2, 3],
            horariosTeams: {dia: ["lunes", "martes", "miercoles", "jueves", "viernes"], hora: "10:00", salones: "sputnik"},
            email: "miguel@campuslands.com",
        }
    },
    campers: {
        daniel: {
            telefono: 3194586234,
            teams: 2,
            horariosSkills: {dia: ["lunes", "martes", "miercoles", "jueves", "viernes"], hora: "10:00", salones: "sputnik"},
            horariosIngles: {dia: ["lunes", "martes", "miercoles", "jueves", "viernes"], hora: "08:45", salones: "auditorio"},
            horariosSer: {dia: ["lunes", "martes", "miercoles", "jueves", "viernes"], hora: "07:45", salones: "auditorio"},
            email: "139162742+dfrincong@users.noreply.github.com",
            nivel: "junior",
            barrio: "mutis",
            transporte: "carro",
        }
    },
    niveles: {},
    roadMap: {},
};
console.log(campuslands);

// 2. Consultas: Usando Destructuring,
// 2.1 De los trainers, reportar si la asignatura (tecnología) es remota o presencial y de los campers el nombre de salón.
// 2.2 El teléfono de la sede de Medellín y la dirección de la sede de Bucaramanga
// 2.3 Del ultimo dia de la semana que dicta clase el trainer

console.log("2.");
const {campers, campus, trainers} = campuslands;
const {daniel} = campers;
const {horariosSkills} = daniel;
const {salones} = horariosSkills;
const {medellin} = campus;
const {miguel} = trainers;
const {horariosTeams} = miguel;
const {dia} = horariosTeams;
console.log(`el camper pertenece a ${salones}`);
console.log(`el teléfono de la sede  Medellín es ${medellin}`);
console.log(`el último día que dicta clase un trainer es ${dia[4]}`);

// 3. Consultas: Usando sintaxis de punto.
// 3.1 Horari de las clases del ser.
// 3.2 Agregar mas objetos con mas objetos anidados de manera libre (por lo menos 7)

console.log("3.");
console.log(`el horario de la clase del ser es a las ${campuslands.campers.daniel.horariosSer.hora}`);
let fundamentos = campuslands.niveles["fundamentos"] = {};
let prerrequisito = fundamentos["prerrequisito"] = "ninguno";
let tecnologia = fundamentos["tecnologia"] = "python";
let estado = fundamentos["estado"] = "obligatoria";

let frontend = campuslands.niveles["frontend"] = {};
let prerrequisito2 = frontend["prerrequisito"] = "fundamentos";
let tecnologia2 = frontend["tecnologia"] = [];
let html = tecnologia2[0] = "html";
let css = tecnologia2[1] = "css";
let estado2 = frontend["estado"] = "obligatoria";

console.log(campuslands);