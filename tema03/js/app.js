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

  console.log("edad =", edad, "→", typeof edad);
  console.log("nombre =", nombre, "→", typeof nombre);
  console.log("bool =", bool, "→", typeof bool);
  console.log("nulo =", nulo, "→", typeof nulo);
  console.log("noDefinido =", noDefinido, "→", typeof noDefinido);
  console.log("bigEntero =", bigEntero, "→", typeof bigEntero);

  noDefinido = "noDefinido";
  console.log("Variable noDefinido actualizada:");
  console.log("noDefinido =", noDefinido, "→", typeof noDefinido);

  // TODO: declara una variable de cada tipo que falta: string, boolean, null, undefined y bigint (como 10n).
  //       const si no va a cambiar; let para al menos una a la que des valor más tarde.
  // TODO: muestra en la consola el valor y el typeof de cada una, como en el ejemplo.
  // TODO: da valor a tu variable let y vuelve a mostrar su typeof.
}


// Ejercicio 2 · Conversiones explícitas
// Escribe el comentario «espero …» ANTES de ejecutar. Si fallas, no lo cambies: márcalo en la tabla de la página.
function ejercicio2() {
  console.log("--- Ejercicio 2 · Conversiones explícitas ---");

  // Ejemplo: una conversión, tu predicción y el resultado con su tipo
  const a = String(123);   // espero [tu predicción]
  console.log("String(123) →", a, typeof a);

  // TODO: el resto de conversiones obligatorias, cada una con su «espero …»:
  //       Number("123"), Number("12abc"), Number(""), Number(true),
  //       Boolean(0), Boolean("texto") y Boolean("").
  // TODO: muestra en la consola el resultado y el typeof de cada una.
}


// Ejercicio 3 · Coerción y comparaciones
function ejercicio3() {
  console.log("--- Ejercicio 3 · Coerción y comparaciones ---");

  // Ejemplo: una expresión que mezcla tipos
  console.log('"5" - 2 →', "5" - 2);   // espero [tu predicción]

  // TODO: cinco expresiones más que mezclen tipos (al menos dos inventadas por ti), cada una con su «espero …».

  // Ejemplo: la misma pareja comparada con == y con ===
  console.log('5 == "5" →', 5 == "5");     // espero [tu predicción]
  console.log('5 === "5" →', 5 === "5");   // espero [tu predicción]

  // TODO: haz lo mismo con 0 y false, y con null y undefined.
}


// Ejercicio 4 · Tu ficha con plantillas de cadena
function ejercicio4() {
  console.log("--- Ejercicio 4 · Tu ficha con plantillas de cadena ---");

  // Tus datos, con const
  const nombre = "[Tu nombre]";
  // TODO: ciclo, curso y una afición, también con const.

  // Un dato que cambia, con let
  // TODO: por ejemplo, las horas que has estudiado esta semana. Después súmale algo con +=.

  // La ficha con plantilla de cadena: backticks (`) y ${ }
  const ficha = `Soy ${nombre}.`;
  // TODO: completa la ficha con todos tus datos y muéstrala con alert() y en la consola.

  // TODO: escribe la misma ficha concatenando con + en una constante fichaConMas y muéstrala en la consola.
  // TODO: compara las dos con === y muestra el resultado en la consola: tiene que salir true.

  // Recuerda: el error de dar otro valor a una const se provoca en la consola del navegador, no aquí.
}
