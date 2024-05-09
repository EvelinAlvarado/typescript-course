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
let isBoolean: boolean = true;
if (isBoolean) {
  console.log("is boolean");
} else {
  console.log("is not boolean");
}

// Number
let realMadrid: number | null | undefined = 11;
let milan: number = 11;
let messi: number = 1;
let messiPlays: boolean = true;

// void(vacio)= function no regresa nada
function play(team1: number, team2: number, messiPlays: boolean): void {
  if (messiPlays) team1 += messi;
  if (team1 > team2) console.log("Real Madrid wins");
  if (team1 < team2) console.log("Milan wins");
  if (team1 === team2) console.log("Draw");
}

play(realMadrid, milan, messiPlays);

// Any: cualquier tipo de dato, EVITARLO!

let disney: any = "cats";
disney = 45;
disney = false;

// Array

let arrayNumbers: number[] = [1, 2, 3, 4, 5];
let arrayLetters: string[] = ["a", "b", "c"];
let myList: Array<string> = ["Boris", "Peluzo", "Gigio"];

arrayLetters[0].length;

// Objects

/* let person = {
  name: "Richard",
  technologies: ["React", "Angular", "Svelte"],
  drinks: false,
};

console.log(person); */

//SETS: No repite en el console.log
let mySet: Set<string> = new Set(["Boris", "Peluzo", "Gigio"]);
console.log(mySet);
//Set(3) { 'Boris', 'Peluzo', 'Gigio' }

//MAPS: (clave:valor)
let myMap: Map<string, number> = new Map([
  ["Boris", 12],
  ["Peluzo", 11],
]);
myMap.set("Gigio", 10);
console.log(myMap);
// Map(3) { 'Boris' => 12, 'Peluzo' => 11, 'Gigio' => 10 }
console.log(myMap.get("Boris"));
//12

// TYPE PERSONALIZADO
// Notar que empieza con mayuscula
type Person = {
  name: string;
  technologies: string[];
  drinks: boolean;
  /* drinks?: boolean; => quiere decir que es opcional usarlo */
  /* drinks: boolean | null; => si tiene esas 2 opciones */
};

let person: Person = {
  name: "Richard",
  technologies: ["React", "Angular", "Svelte"],
  drinks: false,
};

let person2: Person = {
  name: "Charles",
  technologies: ["HTML", "Cobol"],
  drinks: true,
};

// INTERFACES
/* Notar que es con mayuscula y no se escribe el igual */
interface Programmer {
  name: string;
  technologies: string[];
  drinks?: boolean | null;
}

let dev: Programmer = {
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

function sendCV(dev: Programmer) {
  console.log(`This CV is from ${dev.name}`);
}

sendCV(dev); /* Funciona correctamente */
sendCV(
  dev2
); /* Funciona correctamente porque tiene dentro de sus valores a "name" */

/* Si fuese: (`This CV is from ${dev.lastName}`) no funcionaria*/

// CLASS & POO

class Movie {
  /* Estas líneas indican qué propiedades tendrá un objeto de la clase Movie. */
  name?: string; /* Pide ser inicializado, o se inicializaa o se pone ? */
  leadingActors?: string[];
  supportingActors?: string[];
  release() {
    console.log(`${this.name} has been premiere today.`);
  }

  /* Está especificando los parámetros que se deben proporcionar al crear una nueva instancia de la clase Movie. Estos parámetros son utilizados por el constructor de la clase para inicializar las propiedades del objeto. */
  constructor(
    name: string,
    leadingActors: string[],
    supportingActors: string[]
  ) {
    (this.name = name),
      (this.leadingActors = leadingActors),
      (this.supportingActors = supportingActors);
  }
}

// Se crea una instancia de Movie
const film = new Movie();

const movie2 = new Movie(
  "Oppenheimer",
  ["Cillian Murphy", "Robert Downey Jr."],
  ["Emily Blunt", "Gary Oldman"]
);

film.release();
console.log(movie2);

// ENCAPSULAMIENTO Y GENERICOS

class Lottery<T> {
  private ticket?: T;

  constructor(private name: string) {}

  setTicket(ticket: T) {
    this.ticket = ticket;
  }

  getTicket() {
    return this.ticket;
  }

  public sortear(): string {
    return `For ${this.name} the ticket is ${this.ticket}`;
  }
}

let newLottery = new Lottery<string>("Rafa");
newLottery.setTicket("A7");
console.log(newLottery.sortear());

/* notar como cambia el tipo */
let newLottery2 = new Lottery<number>("Lara");
newLottery2.setTicket(13);
console.log(newLottery2.sortear());
