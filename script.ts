console.log("Hello with TYPESCRIPT using watch");
/*
 *Tipos de JS
 * -number
 * -string
 * -boolean
 * -null
 * -undefined
 * -object
 * -function
 *
 * Tipos de TypeScript
 * -any (evitar usarlo porque elimina el proposito de usar TS)
 * -unknown
 * -never
 * -arrays
 * -tuplas
 * -Enums
 *
 * Tipos inferidos
 */

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

// ********Boolean
let isBoolean: boolean = true;
if (isBoolean) {
  console.log("is boolean");
} else {
  console.log("is not boolean");
}

// **********Number
let realMadrid: number | null | undefined = 11;
let milan: number = 11;
let messi: number = 1;
let messiPlays: boolean = true;

//**********Function
// void(vacio)= function no regresa nada
function play(team1: number, team2: number, messiPlays: boolean): void {
  if (messiPlays) team1 += messi;
  if (team1 > team2) console.log("Real Madrid wins");
  if (team1 < team2) console.log("Milan wins");
  if (team1 === team2) console.log("Draw");
}

play(realMadrid, milan, messiPlays);

// !Any: cualquier tipo de dato, EVITARLO!
let disney: any = "cats";
disney = 45;
disney = false;

// ********Array

let arrayNumbers: number[] = [1, 2, 3, 4, 5];
let arrayLetters: string[] = ["a", "b", "c"];
let checks: boolean[] = [];
/* otra forma */
let myList: Array<string> = ["Boris", "Peluzo", "Gigio"];

/* el autocompletado sugiere métodos del tipo de dato */
arrayLetters[0].length;

// ******Tuplas
/* Son un tipode datos que no existen en JS. Una TUPLA es una variable que contiene un set de datos que se encuentran ordenados. Es de longitud fija, no se puede adicionar mas a menos que se encuentren definidos */
/* Se sugiere mantener 2 o 3 datos en la tuplas */
let tupla: [number, string] = [1, "gatito feliz"];
let tuplaConArray: [number, string[]] = [3, ["gato", "perro"]];

// *****Enums
const chica = "s";
const mediana = "m";
//PascalCase
enum Marcas {
  Gucci,
  Valentino,
  Hermes,
  Zara,
}
/* Al compilar le asigna por defecto el index desde 0, sino se quiere eso se le asigna un valor inicial */
enum Seasons {
  Primavera = 3,
  Verano,
  Otono,
  Invierno,
}
/* Tambien se le puede asignar una string, pero a todas */
enum Talla {
  Chica = "s",
  Mediana = "m",
  Grande = "l",
  ExtraGrande = "xl",
}
/* Estes enums generan un *IFEE*: Inmediated invoked function expression (ver en el archivo de JS) */
const variable1 = Talla.ExtraGrande;

/* Exaple commun */
/* Si se define con una "const" para un codigo mas optimizado, a veces es adecuado hacerlo */
const enum LoadingState {
  Idle,
  Loading,
  Success,
  Error,
}
const estado = LoadingState.Success;

// ********Objects
let personDetails = {
  name: "Richard",
  technologies: ["React", "Angular", "Svelte"],
  drinks: false,
};

console.log(personDetails);
// ? *****Tipado inferido ******
const objeto = { id: 1 };
objeto.nombre =
  "Carmen"; /* seria invalido, no se le puede adicionar porque no esta definido */

const objeto5 = { id: 4, nombre: "" };
objeto5.nombre =
  "Rosa"; /* aqui si se le podria adicionar porque esta definido */

// ? *****Tipado explicito ******
const objeto8: {
  readonly id: number; //! el uso de "readonly" es para que el valor de esa variable no se pueda cambiar
  name: string;
  lastName?: string; //! el uso de "?" significa que es opcional y no aparecera error
  talla: Talla; //? usando ENUM
} = { id: 5, name: "Federico", talla: Talla.Grande };
objeto8.id = 45; //!ERROR
objeto8.name = "Jose";

//****SETS: No repite en el console.log
let mySet: Set<string> = new Set(["Boris", "Peluzo", "Gigio"]);
console.log(mySet);
//Set(3) { 'Boris', 'Peluzo', 'Gigio' }

//*******MAPS: (clave:valor)
let myMap: Map<string, number> = new Map([
  ["Boris", 12],
  ["Peluzo", 11],
]);
myMap.set("Gigio", 10);
console.log(myMap);
// Map(3) { 'Boris' => 12, 'Peluzo' => 11, 'Gigio' => 10 }
console.log(myMap.get("Boris"));
//12

// ? *****************TYPE PERSONALIZADO
// Notar que empieza con mayuscula
type Direccion = {
  numero: number;
  calle: string;
  pais: string;
};

type Person = {
  name: string;
  technologies: string[];
  drinks: boolean;
  /* drinks?: boolean; => quiere decir que es opcional usarlo */
  /* drinks: boolean | null; => si tiene esas 2 opciones */
  direccion: Direccion;
};

let person: Person = {
  name: "Richard",
  technologies: ["React", "Angular", "Svelte"],
  drinks: false,
  direccion: {
    numero: 2,
    calle: "La Avenida",
    pais: "Portugal",
  },
};

let person2: Person = {
  name: "Charles",
  technologies: ["HTML", "Cobol"],
  drinks: true,
  direccion: {
    numero: 5,
    calle: "Jupiter",
    pais: "Suiza",
  },
};

// INTERFACES
/* Notar que es con mayuscula y no se escribe el igual */
/* Interface nos ayuda en el desarrolo, no aparece despues de compilar en JS */
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
