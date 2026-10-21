console.log("app.js cargado");

const MAXIMO_REPETICIONES = 20;   // para que un bucle no llene la página

// ============================================================
// Ejercicio 1 · Calculadora
// ============================================================

// El modelo: lee los dos números, comprueba que están y opera
function sumar() {
  // Se leen los números de los inputs con la función leerNumero()
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  // Se comprueba que se han rellenado los inputs, y que son números
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Sumar: Falta algún número");
  } else { // Si no hay error, se realiza la operación, se muestra en el resultado y en la consola.
    const resultado = n1 + n2;
    mostrar(`${n1} + ${n2} = ${resultado}`);
    console.log(`Sumar: ${n1} + ${n2} = ${resultado}`);
  }
}

function restar() {
  // Se leen los números de los inputs con la función leerNumero()
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  // Se comprueba que se han rellenado los inputs, y que son números
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Restar: Falta algún número");
  } else { // Si no hay error, se realiza la operación, se muestra en el resultado y en la consola.
    const resultado = n1 - n2;
    mostrar(`${n1} - ${n2} = ${resultado}`);
    console.log(`Restar: ${n1} - ${n2} = ${resultado}`);
  }
}

function multiplicar() {
  // Se leen los números de los inputs con la función leerNumero()
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  // Se comprueba que se han rellenado los inputs, y que son números
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Multiplicar: Falta algún número");
  } else { // Si no hay error, se realiza la operación, se muestra en el resultado y en la consola.
    const resultado = n1 * n2;
    mostrar(`${n1} * ${n2} = ${resultado}`);
    console.log(`Multiplicar: ${n1} * ${n2} = ${resultado}`);
  }
}

function dividir() {
  // Se leen los números de los inputs con la función leerNumero()
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  // Se comprueba que se han rellenado los inputs, y que son números
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Dividir: Falta algún número");
  } else if (n2 === 0) { // Si el divisor es 0, se muestra un error en resultado y consola
    mostrar("Error: No se puede dividir por cero.", "danger");
    console.warn("Dividir: División por cero");
  } else { // Si no hay error, se realiza la operación, se muestra en el resultado y en la consola.
    const resultado = n1 / n2;
    mostrar(`${n1} / ${n2} = ${resultado}`);
    console.log(`Dividir: ${n1} / ${n2} = ${resultado}`);
  }
}

function potencia() {
  // Se leen los números de los inputs con la función leerNumero()
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  // Se comprueba que se han rellenado los inputs, y que son números
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Potencia: Falta algún número");
  } else { // Si no hay error, se realiza la operación, se muestra en el resultado y en la consola.
    const resultado = n1 ** n2;
    mostrar(`${n1} ** ${n2} = ${resultado}`);
    console.log(`Potencia: ${n1} ** ${n2} = ${resultado}`);
  }
}

function modulo() {
  // Se leen los números de los inputs con la función leerNumero()
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  // Se comprueba que se han rellenado los inputs, y que son números
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("Módulo: Falta algún número");
  } else if (n2 === 0) { // Si el divisor es 0, se muestra un error en resultado y consola
    mostrar("Error: No se puede realizar el módulo entre cero.", "danger");
    console.warn("Módulo: Módulo entre cero.");
  } else { // Si no hay error, se realiza la operación, se muestra en el resultado y en la consola.
    const resultado = n1 % n2;
    mostrar(`${n1} % ${n2} = ${resultado}`);
    console.log(`Módulo: ${n1} % ${n2} = ${resultado}`);
  }
}


// ============================================================
// Ejercicio 2 · Comparaciones
// ============================================================

function cualEsMayor() {
  // Se leen los números de los inputs con la función leerNumero()
  const n1 = leerNumero("numero1");
  const n2 = leerNumero("numero2");

  // Todo hecho con if else comprobando cada caso posible y control de errores
  // Se comprueba que se han rellenado los inputs, y que son números
  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    mostrar("Escribe los dos números antes de operar.", "danger");
    console.warn("¿Cuál es mayor?: Falta algún número");
  } else if (n1>n2){ // Si n1 es mayor estricto que n2
    mostrar(`${n1} es mayor que ${n2}`);
    console.log(`¿Cuál es mayor?: ${n1} es mayor que ${n2}`);
  } else if (n2>n1) { // Si n2 es mayor estricto que n1
    mostrar(`${n2} es mayor que ${n1}`);
    console.log(`¿Cuál es mayor?: ${n2} es mayor que ${n1}`);
  } else { // Como caso sobrante, n1 y n2 son iguales
    mostrar(`${n1} y ${n2} son iguales`);
    console.log(`¿Cuál es mayor?: ${n1} y ${n2} son iguales`);
  }
}

function parOImpar() {
  // Se lee el número uno del input con la función leerNumero()
  const n1 = leerNumero("numero1");

  // Se hace control de errores con if else, de si es número y si es decimal
  // Se comprueba que se ha rellenado el input, y que es un número
  if(Number.isNaN(n1)) {
    mostrar("Escribe el número 1 antes de operar.", "danger");
    console.warn("¿Par o impar?: Falta número uno");
  } else if (!Number.isInteger(n1)) { // Si el número es decimal, se especifica lo que es, y que no es ni par ni impar
    mostrar(`${n1} es decimal, es decir, no es par ni impar`, "danger");
    console.warn("¿Par o impar?: Número decimal");
  } else {
    const condicion = (n1%2===0) ? "par" : "impar"; // Operación ternaria y % para saber si es par o impar
    mostrar(`${n1} es ${condicion}`);
    console.log(`¿Par o impar?: ${n1} es ${condicion}`);
  }
}


// ============================================================
// Ejercicio 3 · Bucles con texto
// El número 1 dice cuántas veces se repite cada bucle
// ============================================================

function bucleFor() {
  // Se lee el número uno del input con la función leerNumero()
  const veces = leerNumero("numero1");
  limpiarSalida();

  // Comprobación de si falta número, si tiene decimales o si se pasa del máximo de repeticiones combinadas con ||
  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn(`Bucle for: Valor ${veces} no válido`);
  } else { // Si no, se hace bucle for con anadirLinea() y línea de total
    for(let i=1; i<=veces; i++){
      anadirLinea(`for · repetición ${i} de ${veces}`);
    }
    const total = `Total: ${veces} ${(veces!==1) ? "repeticiones" : "repetición"}`; // Total con ternario para comprobar si es singular o plural
    anadirLinea(total);  
    console.log(`Bucle for · ${total}`);
  }
}

function bucleWhile() {
  // Se lee el número uno del input con la función leerNumero()
  const veces = leerNumero("numero1");
  limpiarSalida();

  // Comprobación de si falta número, si tiene decimales o si se pasa del máximo de repeticiones combinadas con ||
  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn(`Bucle while: Valor ${veces} no válido`);
  } else { // Si no, se hace bucle while con anadirLinea() y línea de total
    let contador = 1;
    while(contador <= veces) {
      anadirLinea(`while · repetición ${contador} de ${veces}`);
      contador++;
    }
    const total = `Total: ${veces} ${(veces!==1) ? "repeticiones" : "repetición"}`; // Total con ternario para comprobar si es singular o plural
    anadirLinea(total);  
    console.log(`Bucle while · ${total}`);
  }
}

function bucleDoWhile() {
  // Se lee el número uno del input con la función leerNumero()
  const veces = leerNumero("numero1");
  limpiarSalida();

  // Comprobación de si falta número, si tiene decimales o si se pasa del máximo de repeticiones combinadas con ||
  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn(`Bucle do...while: Valor ${veces} no válido`);
  } else { // Si no, se hace bucle do...while con anadirLinea() y línea de total
    let contador = 1;

    do {
      anadirLinea(`do...while · repetición ${contador} de ${veces}`);
      contador++;
    } while(contador <= veces);
    const total = `Total: ${veces} ${(veces!==1) ? "repeticiones" : "repetición"}`; // Total con ternario para comprobar si es singular o plural
    anadirLinea(total);  
    console.log(`Bucle do...while · ${total}`);
  }
}


// ============================================================
// Ejercicio 4 · Bucles con badges
// ============================================================

function badgesFor() {
  // Se lee el número uno del input con la función leerNumero()
  const veces = leerNumero("numero1");
  limpiarSalida();

  // Comprobación de si falta número, si tiene decimales o si se pasa del máximo de repeticiones combinadas con ||
  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn(`Badges for: Valor ${veces} no válido`);
  } else { // Si no, se hace bucle for con anadirBadge() y línea de total
    for(let i=1; i<=veces; i++){
      anadirBadge(i, (i%2===0) ? "success" : "secondary"); // Color escogido con ternario
    }
    const total = `Total: ${veces} ${(veces!==1) ? "repeticiones" : "repetición"}`; // Total con ternario para comprobar si es singular o plural
    anadirLinea(total);  
    console.log(`Badges for · ${total}`);
  }
}

function badgesWhile() {
  // Se lee el número uno del input con la función leerNumero()
  const veces = leerNumero("numero1");
  limpiarSalida();

  // Comprobación de si falta número, si tiene decimales o si se pasa del máximo de repeticiones combinadas con ||
  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn(`Badges while: Valor ${veces} no válido`);
  } else { // Si no, se hace bucle while con anadirBadge() y línea de total
    let contador = 1;
    while(contador <= veces) {
      anadirBadge(contador, (contador%2===0) ? "success" : "secondary"); // Color escogido con ternario
      contador++;
    }
    const total = `Total: ${veces} ${(veces!==1) ? "repeticiones" : "repetición"}`; // Total con ternario para comprobar si es singular o plural
    anadirLinea(total);  
    console.log(`Badges while · ${total}`);
  }
}

function badgesDoWhile() {
  // Se lee el número uno del input con la función leerNumero()
  const veces = leerNumero("numero1");
  limpiarSalida();

  // Comprobación de si falta número, si tiene decimales o si se pasa del máximo de repeticiones combinadas con ||
  if(Number.isNaN(veces) || !Number.isInteger(veces) || veces > MAXIMO_REPETICIONES) {
    mostrar("Error: El número uno falta, es decimal o se pasa del máximo de repeticiones (20).", "danger");
    console.warn(`Badges do...while: Valor ${veces} no válido`);
  } else { // Si no, se hace bucle do...while con anadirBadge() y línea de total
    let contador = 1;
    do {
      anadirBadge(contador, (contador%2===0) ? "success" : "secondary"); // Color escogido con ternario
      contador++;
    } while(contador <= veces);
    const total = `Total: ${veces} ${(veces!==1) ? "repeticiones" : "repetición"}`; // Total con ternario para comprobar si es singular o plural
    anadirLinea(total);  
    console.log(`Badges do...while · ${total}`);
  }
}
