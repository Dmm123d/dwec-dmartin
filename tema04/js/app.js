/*
  Tarea 4 · DWEC · David Martín Martí
  Calculadora y bucles.

  Cómo usar esta plantilla:
  · Hay una función por botón. Cada una se ejecuta al pulsar su botón de index.html.
  · sumar() está hecha: es el modelo. Escribe las demás donde pone TODO y, cuando termines, borra el TODO.
  · Para leer las casillas y escribir el resultado usa las funciones de js/ayudas.js:
      leerNumero("numero1"), mostrar(texto, color), anadirLinea(texto), anadirBadge(texto, color), limpiarSalida()
  · Además de en la página, cada función deja su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página


// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: Falta algún número");
  } else {
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: Falta algún número");
  } else {
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: Falta algún número");
  } else {
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: Falta algún número");
  } else if (n2 == 0) {
    mostrar("Error: No se puede dividir por cero.", "danger");
    console.warn("Dividir: División por cero");
  } else {
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: Falta algún número");
  } else {
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: Falta algún número");
  } else if (n2 == 0) {
    mostrar("Error: No se puede realizar el módulo entre cero.", "danger");
    console.warn("Módulo: Módulo entre cero.");
  } else {
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("¿Cual es mayor?: Falta algún número");
  } else if (n1>n2){
    mostrar(`${n1} es mayor que ${n2}`);
  } else if (n2>n1) {
    mostrar(`${n2} es mayor que ${n1}`);
  } else {
    mostrar(`${n1} y ${n2} son iguales`);
  }
}

function parOImpar() {
  // TODO: solo con el número 1. Usa el operador % y el ternario ( condición ? "par" : "impar" ).
  // TODO: si el número tiene decimales, avisa de que no es ni par ni impar.
  const n1 = leerNumero("numero1");

  if(Number.isNaN(n1)) {
    mostrar("Escribe el número 1 antes de operar.", "danger");
    console.warn("¿Par o impar?: Falta número uno");
  } else if (!Number.isInteger(n1)) {
    mostrar(`${n1} es decimal, es decir, no es par ni impar`, "danger");
    console.warn("¿Par o impar?: Número decimal");
  } else {
    const condicion = (n1%2==0) ? "par" : "impar";
    mostrar(`${n1} es ${condicion}`);
  }
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces>MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn("Bucle For: Falta número uno");
  } else {
    for(let i=1; i<=veces; i++){
      anadirLinea(`for · repetición ${i} de ${veces}`);
    }
    anadirLinea(`Total: ${veces} ${(veces>1) ? "repeticiones" : "repetición"}`);
  }

  // TODO: si el número falta, tiene decimales o pasa de MAXIMO_REPETICIONES, muestra un error en rojo.
  // TODO: si no, repite con un for tantas veces como diga «veces». En cada vuelta:
  //         anadirLinea(`for · repetición ${i} de ${veces}`);
  //       y cuenta las vueltas en una variable contador.
  // TODO: al terminar, añade una línea con el total: «Total: 5 repeticiones» o «Total: 1 repetición».
}

function bucleWhile() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces>MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn("Bucle While: Falta número uno");
  } else {
    let contador = 1;
    while(contador <= veces) {
      anadirLinea(`while · repetición ${contador} de ${veces}`);
      contador++;
    }
    anadirLinea(`Total: ${veces} ${(veces>1) ? "repeticiones" : "repetición"}`);
  }
}

function bucleDoWhile() {
  // TODO: lo mismo que bucleFor(), con un do…while. Pruébalo con 0 y con un negativo: ¿qué pasa?
  const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn("Bucle While: Falta número uno");
  } else {
    let contador = 1;

    do {
      anadirLinea(`do...while · repetición ${contador} de ${veces}`);
      contador++;
    } while(contador <= veces);
    anadirLinea(`Total: ${veces} ${(veces>1) ? "repeticiones" : "repetición"}`);
  }
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces>MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn("Bucle For con Badges: Falta número uno");
  } else {
    for(let i=1; i<=veces; i++){
      anadirBadge(i, (i%2==0) ? "primary" : "secondary");
    }
    anadirLinea(`Total: ${veces} ${(veces>1) ? "repeticiones" : "repetición"}`);
  }
  // TODO: como bucleFor(), pero cada vuelta añade un badge con el número de la repetición:
  //         anadirBadge(i, "primary");
  // TODO: los pares, de un color y los impares, de otro. Elige el color con el operador ternario.
}

function badgesWhile() {
  // TODO: lo mismo que badgesFor(), con un while.
  const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces>MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn("Bucle While con Badges: Falta número uno");
  } else {
    let contador = 1;
    while(contador <= veces) {
      anadirBadge(contador, (contador%2==0) ? "primary" : "secondary");
      contador++;
    }
    anadirLinea(`Total: ${veces} ${(veces>1) ? "repeticiones" : "repetición"}`);
  }
}

function badgesDoWhile() {
  // TODO: lo mismo que badgesFor(), con un do…while.
  const veces = leerNumero("numero1");
  limpiarSalida();

  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces>MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn("Bucle Do...While con Badges: Falta número uno");
  } else {
    let contador = 1;
    do {
      anadirBadge(contador, (contador%2==0) ? "primary" : "secondary");
      contador++;
    } while(contador <= veces);
    anadirLinea(`Total: ${veces} ${(veces>1) ? "repeticiones" : "repetición"}`);
  }
}
