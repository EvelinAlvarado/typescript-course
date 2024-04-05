"use strict";
console.log("Hello with TYPESCRIPT using watch");
/* tsc fileName.ts */
/* tsc script.ts => para compilar archivo de ts a js */
// Modo observador : para que se actualice en tiempo real
// tsc fileName.ts -w :start compilation in watch mode
// INITIALIZATION
// tsc -init
// Modo observador de todos los archivos olo despues de inicializar:
// tsc -w
/* Despues de usar el modo observador aparecerá_
"use strict";
en los archivos js  */
// Boolean
let isBoolean = true;
if (isBoolean) {
    console.log("is boolean");
}
else {
    console.log("is not boolean");
}
// Number
let realMadrid = 11;
let milan = 11;
let messi = 1;
let messiPlays = true;
// void(vacio)= function no regresa nada
function play(team1, team2, messiPlays) {
    if (messiPlays)
        team1 += messi;
    if (team1 > team2)
        console.log("Real Madrid wins");
    if (team1 < team2)
        console.log("Milan wins");
    if (team1 === team2)
        console.log("Draw");
}
play(realMadrid, milan, messiPlays);
// Any: cualquier tipo de dato, EVITARLO!
let disney = "cats";
disney = 45;
disney = false;
// Array
let arrayNumbers = [1, 2, 3, 4, 5];
let arrayLetters = ["a", "b", "c"];
arrayLetters[0].length;
let person = {
    name: "Richard",
    technologies: ["React", "Angular", "Svelte"],
    drinks: false,
};
let person2 = {
    name: "Charles",
    technologies: ["HTML", "Cobol"],
    drinks: true,
};
let dev = {
    name: "Charles",
    technologies: ["HTML", "Cobol"],
    drinks: null,
};
/* dev2 no pertenece a Programador es otro tipo de objeto porque no tiene las caracteristcas de Programmer, tiene más */
let dev2 = {
    name: "Mary",
    technologies: ["HTML", "CSS"],
    drinks: null,
    smoke: false,
    lastName: "Smith",
};
function sendCV(dev) {
    console.log(`This CV is from ${dev.name}`);
}
sendCV(dev); /* Funciona correctamente */
sendCV(dev2); /* Funciona correctamente porque tiene dentro de sus valores a "name" */
/* Si fuese: (`This CV is from ${dev.lastName}`) no funcionaria*/
// CLASS & POO
class Movie {
    release() {
        console.log(`${this.name} has been premiere today.`);
    }
    /* Está especificando los parámetros que se deben proporcionar al crear una nueva instancia de la clase Movie. Estos parámetros son utilizados por el constructor de la clase para inicializar las propiedades del objeto. */
    constructor(name, leadingActors, supportingActors) {
        (this.name = name),
            (this.leadingActors = leadingActors),
            (this.supportingActors = supportingActors);
    }
}
// Se crea una instancia de Movie
const film = new Movie();
const movie2 = new Movie("Oppenheimer", ["Cillian Murphy", "Robert Downey Jr."], ["Emily Blunt", "Gary Oldman"]);
film.release();
console.log(movie2);
// ENCAPSULAMIENTO Y GENERICOS
class Lottery {
    constructor(name) {
        this.name = name;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `For ${this.name} the ticket is ${this.ticket}`;
    }
}
let newLottery = new Lottery("Rafa");
newLottery.setTicket("A7");
console.log(newLottery.sortear());
/* notar como cambia el tipo */
let newLottery2 = new Lottery("Lara");
newLottery2.setTicket(13);
console.log(newLottery2.sortear());
