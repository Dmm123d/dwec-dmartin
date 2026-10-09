/*
  Tarea 3 · DWEC · David Martín Martí
  Variables, tipos y conversiones.

  Cómo usar esta plantilla:
  · Hay una función por ejercicio. Cada una se ejecuta al pulsar su botón «Ejecutar» de index.html.
  · Escribe tu código DENTRO de cada función, donde pone TODO. Cuando lo hagas, borra el TODO.
  · Solo console.log() y alert(): el JavaScript no escribe nada dentro de la página.
  · let y const, nunca var. Comillas rectas (" o ').
*/

console.log("app.js cargado: pulsa «Ejecutar» en cada ejercicio");


// Ejercicio 1 · Variables y typeof
function ejercicio1() {
  console.log("--- Ejercicio 1 · Variables y typeof ---");

  // Ejemplo: una variable y su typeof en la consola
  const edad = 20;   // number
  const nombre = "David";   // string
  const bool = true;    // boolean
  const nulo = null;    // null
  let noDefinido;   // undefined
  const bigEntero = 10n;    // bigint

  // Console.log de cada variable y su typeof
  console.log("edad =", edad, "→", typeof edad);
  console.log("nombre =", nombre, "→", typeof nombre);
  console.log("bool =", bool, "→", typeof bool);
  console.log("nulo =", nulo, "→", typeof nulo);
  console.log("noDefinido =", noDefinido, "→", typeof noDefinido);
  console.log("bigEntero =", bigEntero, "→", typeof bigEntero);
}


// Ejercicio 2 · Conversiones explícitas
// Escribe el comentario «espero …» ANTES de ejecutar. Si fallas, no lo cambies: márcalo en la tabla de la página.
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  // Ejemplo: una conversión, tu predicción y el resultado con su tipo
  const a = String(123);   // espero "123" string
  const b = Number("123");   // espero 123 number
  const c = Number("12abc");   // espero 12 number
  const d = Number("");   // espero 0 number
  const e = Number(true);   // espero 1 number
  const f = Boolean(0);   // espero false boolean
  const g = Boolean("texto");   // espero true boolean
  const h = Boolean("");   // espero false boolean

  // Console.log correspondiente a cada variable
  console.log("String(123) →", a, typeof a);
  console.log("Number(\"123\") →", b, typeof b);
  console.log("Number(\"12abc\") →", c, typeof c);
  console.log("Number(\"\") →", d, typeof d);
  console.log("Number(true) →", e, typeof e);
  console.log("Boolean(0) →", f, typeof f);
  console.log("String(\"texto\") →", g, typeof g);
  console.log("Boolean(\"\") →", h, typeof h);
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2);   // espero 3

  // Console.log de las operaciones y sus resultados
  console.log('"5" + 2 →', "5" + 2);   // espero "52"
  console.log('0 == "" →', 0 == "");   // espero true
  console.log('null == undefined →', null == undefined);   // espero false
  console.log('true == "true" →', true == "true");   // espero true
  console.log('NaN === "abc" →', NaN === "abc");   // espero false

  // Console.log de operaciones con == y ===
  console.log('5 == "5" →', 5 == "5");     // espero true
  console.log('5 === "5" →', 5 === "5");   // espero false
  console.log('0 == false →', 0 == false);     // espero true
  console.log('0 === false →', 0 === false);   // espero false
  console.log('null == undefined →', null == undefined);     // espero false
  console.log('null === undefined →', null === undefined);   // espero false
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Constantes declaradas
  const nombre = "David Martín Martí";
  const ciclo = "Desarrollo de Aplicaciones Web";
  const curso = "2ºCurso";
  const aficion = "jugar videojuegos";

  // Un dato que cambia, con let
  let horasEstudiadas = 0;
  horasEstudiadas += 5;

  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = `Soy ${nombre} del ${curso} de ${ciclo} y mi afición es ${aficion}. He estudiado esta semana ${horasEstudiadas} horas`;
  
  // Ficha mostrada con alert y console.log
  alert(ficha);
  console.log(ficha);

  // Misma ficha pero concatenada con +
  const fichaConcatenada = "Soy " + nombre + " del " + curso + " de " + ciclo + " y mi afición es " + aficion + ". He estudiado esta semana " + horasEstudiadas + " horas";
  
  // Ficha Concatenada mostrada con alert y console.log
  alert(fichaConcatenada);
  console.log(fichaConcatenada);

  // Comparación de ambas fichas con ===
  console.log("ficha === fichaConcatenada →", ficha === fichaConcatenada);
}
