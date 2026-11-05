/*
  Tarea 6 · DWEC · David Martín Martí
  Objetos y arrays.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}

// Función para crear un elemento con un contenido específico (textContent)
function crearElemento(elementoCrear, contenido) {
  const elemento = document.createElement(elementoCrear);
  elemento.textContent = contenido;
  return elemento;
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

// Objeto estudiante con sus atributos y función presentarse()
const estudiante = {
  nombre: "David",
  apellidos: "Martín Martí",
  edad: 25,
  curso: "2.º DAW",
  presentarse: function () {
    return `Soy ${this.nombre} ${this.apellidos}, tengo ${this.edad} años y estudio ${this.curso}.`;
  }
};

// Función para ver la ficha de estudiante
function verFicha() {
  // Obtengo la caja de salida y vacío su contenido
  const salida1 = document.getElementById("salida1");
  salida1.textContent = "";

  // El array de las claves del objeto
  const claves = ["nombre","apellidos","edad","curso"];

  // Creo la lista y especifico su clase de Bootstrap
  const lista = document.createElement("ul");
  lista.setAttribute("class","list-group");

  // Recorro el array de claves
  claves.forEach(function (clave) {
    // Creo el elemento de lista, su contenido, su clase de Bootstrap y por último, meto el elemento en el ul
    const elementoLista = crearElemento("li",`${clave.charAt(0).toUpperCase() + clave.slice(1)}: ${estudiante[clave]}`);
    elementoLista.classList.add("list-group-item");
    lista.append(elementoLista);
  });

  // Creo el párrafo con la función de presentarse
  const parrafo = crearElemento("p",estudiante.presentarse());
  parrafo.classList.add("mt-2","mx-auto");

  // Meto el ul y el p en la caja de salida1
  salida1.append(lista);
  salida1.append(parrafo);

  // Rastro en consola
  console.log(estudiante);
}

// Función para sumar edad al estudiante
function cumplirAnios() {
  // Sumo uno a la edad, actualizo ficha y dejo rastro en consola
  estudiante.edad += 1;
  verFicha();
  console.log(`Cumplir Años: ${estudiante.edad} recién cumplidos.`);
}

// Función para quitar el curso del objeto
function quitarCurso() {
  // Borro el curso del objeto, actualizo la ficha y dejo rastro en consola
  delete estudiante.curso;
  verFicha();
  console.log("Quitar Curso: Curso borrado.");
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

// Array de colores
const colores = ["rojo", "verde", "azul"];

// Función para mostrar los colores en la lista del card
function mostrarColores() {
  // Obtengo la caja de lista y vacío su contenido
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";

  // Recorro el array de colores
  colores.forEach(function (color) {
    // Creo un elemento de lista con el color como contenido, su clase de Bootstrap y lo meto en la lista
    const elementoLista = crearElemento("li",color);
    elementoLista.classList.add("list-group-item");
    lista.append(elementoLista);
  });

  // Actualizo el contador de colores
  document.querySelector("#totalColores").textContent = colores.length;
}

// Función para mostrar un mensaje en la caja de #aviso2
function avisar2(mensaje) {
  // Obtengo la caja de aviso2, modifico su contenido, y quito la clase d-none
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

// Función para añadir un color
function anadirColor() {
  // Obtengo lo escrito en el input y lo limpio con trim()
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  // Si la casilla está vacía
  if (color === "") {
    // Muestro error en aviso2 y console.warn
    avisar2("Escribe un color antes de pulsar «Añadir».");
    console.warn("Añadir Color: Escribe color antes de pulsar «Añadir».");
  } else {
    // Si no, meto el color al array con push, vacío la casilla
    colores.push(color);
    casilla.value = "";

    // Oculto el aviso
    document.querySelector("#aviso2").classList.add("d-none");

    // Actualizo la lista y dejo rastro en consola
    mostrarColores();
    console.log("Añadir Color: push →", comoTexto(colores));
  }
}

// Función para quitar el último color
function quitarUltimo() {
  // Si el array de colores está vacío
  if (colores.length === 0) {
    // Muestro mensaje de aviso y console.warn
    avisar2("La lista está vacía.");
    console.warn("Quitar Último: La lista está vacía.");
  } else {
    // Si no, saco el color con pop()
    const ultimo = colores.pop();
    
    // Oculto mensaje de aviso
    document.querySelector("#aviso2").classList.add("d-none");

    // Actualizo la lista y dejo rastro en consola
    mostrarColores();
    console.log(`Quitar Último: Ha salido el color ${ultimo}.`);
  }
}

// Función para quitar el primer color
function quitarPrimero() {
  // Si el array de colores está vacío
  if (colores.length === 0) {
    // Muestro mensaje de aviso y console.warn
    avisar2("La lista está vacía.");
    console.warn("Quitar Primero: La lista está vacía.");
  } else {
    // Si no, saco el color con shift()
    const primero = colores.shift();

    // Oculto el mensaje de aviso
    document.querySelector("#aviso2").classList.add("d-none");

    // Actualizo la lista y dejo rastro en consola
    mostrarColores();
    console.log(`Quitar Primero: Ha salido el color ${primero}.`);
  }
}

mostrarColores();


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Array de objetos
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Función para pintar la tabla de productos
function pintarProductos(lista) {
  // Vacío el contenido de #tablaProductos
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  // Recorro el array lista
  lista.forEach(function (producto) {
    // Se hace la estructura de la tabla
    // Se crea el tr o fila
    const fila = document.createElement("tr");

    // Se crea el td para el nombre del producto
    const nombre = crearElemento("td", producto.nombre);

    // Se crea el td para la categoría del producto
    const categoria = crearElemento("td", producto.categoria);

    // Se crea el td para el precio del producto
    const precio = crearElemento("td", producto.precio.toFixed(2) + " €");
    precio.classList.add("text-end");

    // Se meten los tds al tr, y el tr a #tablaProductos
    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
  // Dejo rastro en consola
  console.log("Pintar Productos: Tabla de productos creada.");
}

// Función para mostrar la tabla y un mensaje
function mostrarProductos() {
  // Se pinta la tabla
  pintarProductos(productos);

  // Se muestra mensaje con el número de productos
  document.querySelector("#mensaje3").textContent = `Hay ${productos.length} productos.`;
  
  // Dejo rastro en consola
  console.log("Mostrar Productos: Productos mostrados.");
}

// Función para ordenar la tabla por precio, de más barato a más caro
function ordenarPorPrecio() {
  // Se crea una copia de productos con sort()
  const copia = [...productos].sort(function(a, b) {
    return a.precio - b.precio;
  });
  
  // Se actualiza la tabla con la copia
  pintarProductos(copia);
  
  // Se muestra un mensaje informativo del orden, y dejo rastro en consola.
  document.querySelector("#mensaje3").textContent = "Está ordenado de más barato a más caro.";
  console.log("Ordenar Por Precio: Precio ordenado de barato a caro.");
}

// Función para filtrar los productos de la tabla a más de 50€
function filtrarCaros() {
  // Se crea una copia de productos con filter()
  const copia = [...productos].filter(function (producto) {
    // Especifico que el atributo precio debe ser mayor de 50
    return producto.precio > 50;
  });

  // Se actualiza la tabla con la copia
  pintarProductos(copia);

  // Se muestra un mensaje informativo sobre cuantos productos se muestran con el filtro, y dejo rastro en consola
  document.querySelector("#mensaje3").textContent = `Hay ${copia.length} productos con el filtro de 50€.`;
  console.log(`Filtrar Caros: Hay ${copia.length} productos con el filtro de 50€.`);
}

// Función para buscar un producto y mostrarlo en la tabla
function buscarProducto() {
  // Obtengo el producto del input
  const casilla = document.querySelector("#buscarProducto");
  const productoNombre = casilla.value.trim().toLowerCase();

  // Si la casilla está vacía
  if (productoNombre === "") {
    // Muestro un mensaje de aviso y console.warn
    document.querySelector("#mensaje3").textContent = "Debe introducir un producto para buscar.";
    console.warn("Buscar Productos: ");
  } else {
    // Si no, se obtiene el producto con find()
    const encontrado = [...productos].find(function (producto) {
      // Se busca con includes()
      return producto.nombre.toLowerCase().includes(productoNombre);
    });

    // Si es undefined
    if (encontrado === undefined) {
      // Se muestra vacía la tabla
      pintarProductos([]);

      // Se muestra un mensaje de aviso y console.warn
      document.querySelector("#mensaje3").textContent = "El producto buscado no existe.";
      console.warn("Buscar Producto: Producto buscado no existe.");
    } else {
      // Si no, se muestra un mensaje de producto encontrado
      document.querySelector("#mensaje3").textContent = "Producto encontrado.";

      // Se actualiza la tabla con el producto encontrado y dejo rastro en consola
      pintarProductos([encontrado]);
      console.log("Buscar Producto: Producto encontrado.");
    }
  }
}

mostrarProductos();


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

// Objeto de alumno con nombre, array de notas, y funciones anadirNota() y media()
const alumno = {
  nombre: "David Martín Martí",
  notas: [],
  // Función para añadir una nota
  anadirNota: function (nota) {
    // Si la nota es NaN o no válida
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      // Devuelve false
      return false;
    } else {
      // Si no, mete la nota en el array de notas y devuelve true
      this.notas.push(nota);
      return true;
    }
  },
  // Función para calcular la media del array de notas
  media: function () {
    // Si el array está vacío
    if (this.notas.length === 0){
      // Devuelve 0
      return 0;
    } else {
      // Si no, calcula la media con reduce y dividiendo entre la cantidad de notas en el array
      const media = (this.notas.reduce(function (total, nota) {
        return total + nota;
      }, 0)) / this.notas.length;
      // Y devuelve la media
      return media;
    }
  }
};

// Función para mostrar las notas con los badges
function mostrarNotas() {
  // Vacío el contenedor de notas
  const notasCaja = document.getElementById("notas");
  notasCaja.textContent = "";
  
  // Recorro el array de notas del alumno
  alumno.notas.forEach(function (nota) {
    // Creo el span con la clase de badge
    const badge = document.createElement("span");
    badge.setAttribute("class","badge");
    
    // Si la nota es suspensa
    if (nota < 5) {
      // El badge es color danger
      badge.classList.add("text-bg-danger");
    } else if (nota >= 5) {
      // Si la nota es aprobada, success
      badge.classList.add("text-bg-success");
    }
    
    // Pongo margin al badge, nota como contenido y lo añado a el contenedor de las notas
    badge.classList.add("me-1");
    badge.textContent = nota;
    notasCaja.append(badge);
  });

  // Mensaje de la media
  const media = document.getElementById("media");

  // Si el array de notas está vacío
  if (alumno.notas.length === 0) {
    // El mensaje específica que no hay notas
    media.textContent = "Todavía no hay notas.";

    // Dejo rastro en consola
    console.log("Mostrar Notas: No hay notas.")
  } else {
    // Si no, muestra el número de notas y su media calculada con 2 decimales
    media.textContent = `Media de ${alumno.notas.length} notas: ${alumno.media().toFixed(2)}`;
    
    // Dejo rastro en consola
    console.log("Mostrar Notas: Notas y su media mostradas.");
  }
}

// Función para añadir notas
function anadirNota() {
  // Se obtiene la nota de la casilla, y el mensaje de error
  const notaCasilla = document.getElementById("nota");
  const error = document.getElementById("error4");
  const notaValor = notaCasilla.value.trim();

  // Si la casilla está vacía
  if (notaValor === "") {
    // Muestro el mensaje de error y console.warn
    error.textContent = "Introduzca una nota válida en la casilla.";
    error.classList.remove("d-none");
    console.warn("Añadir Nota: Casilla vacía.");
    
    // Se sale de la función
    return;
  }

  // Se formatiza con Number() la nota de la casilla, y se añade con anadirNota()
  const nota = Number(notaValor);
  const valida = alumno.anadirNota(nota);

  // Si no es válida la nota
  if (valida === false) {
    // Muestro el mensaje de error y console.warn
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    console.warn(`Añadir Nota: Nota ${notaValor} no válida.`);
  } else {
    // Si no, oculto el mensaje de error
    error.textContent = "";
    error.classList.add("d-none");

    // Vacío la casilla del input, actualizo el card de notas
    notaCasilla.value = "";
    mostrarNotas();
    
    // Dejo rastro en consola
    console.log(`Añadir Nota: Nota ${nota} guardada.`);
  }
}

// Función para borrar las notas
function borrarNotas() {
  // Vacío el array de notas, actualizo el card de notas y dejo rastro en consola
  alumno.notas.length = 0;
  mostrarNotas();
  console.log("Borrar Notas: Notas borradas y actualizadas.");
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

// Array de números
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Función para ver los dobles del array números
function verDobles() {
  // Vacío la salida
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  // Creo el array de dobles con map()
  const dobles = numeros.map(function (n) {
    // Especifíco el criterio para que sean dobles
    return n * 2;
  });

  // Creo dos párrafos, uno para el array de dobles y otro para el de números
  const parrafoDobles = crearElemento("p",`map → ${comoTexto(dobles)}`);
  const parrafoNumeros = crearElemento("p",`numeros → ${comoTexto(numeros)}`);

  // Meto ambos párrafos al contenedor de salida, y dejo rastro en consola
  salida.append(parrafoDobles,parrafoNumeros);
  console.log(`Ver Dobles: map → ${comoTexto(dobles)}`);
}

// Función para ver los números pares del array números
function verPares() {
  // Vacío la salida
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  // Creo el array de pares con filter
  const pares = numeros.filter(function (n) {
    // Filtro el resultado según sean pares
    return n % 2 === 0;
  });

  // Creo dos párrafos, uno para el array de pares y otro para el de números
  const parrafoPares = crearElemento("p",`filter → ${comoTexto(pares)}`);
  const parrafoNumeros = crearElemento("p",`numeros → ${comoTexto(numeros)}`);

  // Meto ambos párrafos en el contenedor de salida, y dejo rastro en consola
  salida.append(parrafoPares,parrafoNumeros);
  console.log(`Ver Pares: filter → ${comoTexto(pares)}`);
}

// Función para ver la suma de todos los números del array números
function verSuma() {
  // Vacío la salida
  const salida = document.querySelector("#salida5");
  salida.textContent = "";

  // Sumo todo el array con reduce()
  // Suma el total con cada número, siendo el total inicial 0
  const suma = numeros.reduce(function (total,n) {
    return total + n;
  }, 0);

  // Creo dos párrafos, uno para el resultado de reduce y otro para el array de números
  const parrafoSuma = crearElemento("p",`reduce → ${suma}`);
  const parrafoNumeros = crearElemento("p",`numeros → ${comoTexto(numeros)}`);

  // Meto ambos párrafos en el contenedor de salida y dejo rastro en consola
  salida.append(parrafoSuma,parrafoNumeros);
  console.log(`Ver Suma: reduce → ${suma}`);
}

// Función para mostrar un resultados de filter, map y reduce a la vez.
// Calcula pares con filter, los duplica con map, y suma todo con reduce. 
function verCadena() {
  // Vacío la salida
  const salida = document.getElementById("salida5");
  salida.textContent = "";

  // Calcula los pares con filter
  const pares = numeros.filter(function (n) {
    return n % 2 === 0;
  });

  // Calcula el dobles de los números pares con map
  const dobles = pares.map(function (n) {
    return n * 2;
  });

  // Calcula la suma de los dobles con reduce
  const suma = dobles.reduce(function (total,n) {
    return total + n;
  }, 0);

  // Creo una lista para mostrar el resultado
  const listaNumerada = document.createElement("ol");

  // Creo tres li, uno para cada método usado.
  const paresLista = crearElemento("li",`filter → ${comoTexto(pares)}`);
  const doblesLista = crearElemento("li",`map → ${comoTexto(dobles)}`);
  const sumaLista = crearElemento("li",`reduce → ${suma}`);

  // Meto los li en el ol, y el ol en el contenedor de salida
  listaNumerada.append(paresLista,doblesLista,sumaLista);
  salida.append(listaNumerada);

  // Dejo rastro en consola
  console.log("Ver Cadena: Las tres cadenas seguidas mostradas.");
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

// Array original de ciudades, que usaremos para restaurar la copia
const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];

// Copia del array de ciudades, que usaremos para trabajar con él
let ciudades = [...ciudadesOriginal];

// Función para mostrar las ciudades con badges
function mostrarCiudades() {
  // Vacío el contenedor de ciudades
  const ciudadesCaja = document.querySelector("#ciudades");
  ciudadesCaja.textContent = "";

  // Recorro el array de ciudades, con los párametros de valor y su índice
  ciudades.forEach(function (ciudad, pos) {
    // Por cada ciudad, creo un badge y lo añado al contenedor de ciudades
    const badge = crearElemento("span",`${pos} · ${ciudad}`);
    badge.classList.add("badge","text-dark","bg-white","border","m-1");
    ciudadesCaja.append(badge);
  });
}

// Función para ver resultados con el método slice(2,5)
function verSlice() {
  // Creo el array usando slice() en ciudades
  const arraySlice = ciudades.slice(2,5);

  // Vacío la salida
  const salida = document.querySelector("#salida6");
  salida.textContent = "";

  // Creo dos párrafos, uno para mostrar lo que devuelve el método, y otro para mostrar si la longitud del array ciudades ha cambiado
  const parrafo1 = crearElemento("p",`slice(2,5) devuelve ${comoTexto(arraySlice)}`);
  const parrafo2 = crearElemento("p",`ciudades ahora tiene ${ciudades.length} elementos: no ha cambiado`);
  parrafo1.classList.add("my-1");

  // Meto ambos párrafos al contenedor de salida
  salida.append(parrafo1,parrafo2);

  // Dejo rastro en consola
  console.log("Ver Slice: slice(2,5) realizado y mostrado.");
}

// Función para ver resultados con el método splice(2,2)
function hacerSplice() {
  // Vacío la salida
  const salida = document.querySelector("#salida6");
  salida.textContent = "";

  // Si el array ciudades tiene menos de 3 elementos
  if (ciudades.length < 3) {
    // Muestro un mensaje de aviso y un console.warn
    salida.textContent = "Quedan menos de 3 ciudades, es necesario restaurar.";
    console.warn("Hacer Splice: Quedan menos de 3 ciudades.");
  } else {
    // Creo el array usando splice(2,2) en ciudades
    const arraySplice = ciudades.splice(2,2);

    // Creo dos párrafos, uno para mostrar lo que devuelve el método, y otro para mostrar si la longitud del array ciudades ha cambiado
    const parrafo1 = crearElemento("p",`splice(2,2) devuelve ${comoTexto(arraySplice)}`);
    const parrafo2 = crearElemento("p",`ciudades ahora tiene ${ciudades.length} elementos: sí ha cambiado`);
    parrafo1.classList.add("my-1");

    // Meto ambos párrafos al contenedor de salida
    salida.append(parrafo1, parrafo2);

    // Actualizo el contenedor de ciudades y dejo rastro en consola
    mostrarCiudades();
    console.log("Hacer Splice: splice(2,2) en array ciudades realizado y mostrado.");
  }
}

// Función para restaurar el array ciudades con el array ciudadesOriginal
function restaurarCiudades() {
  // Copio el contenido de ciudadesOriginal en ciudades
  ciudades = [...ciudadesOriginal];

  // Actualizo el contenedor de ciudades
  mostrarCiudades();

  // Muestro un mensaje informativo y dejo rastro en consola
  document.querySelector("#salida6").textContent = "Ciudades restauradas.";
  console.log("Restaurar Ciudades: Array de ciudades restaurado.");
}

// Función para buscar ciudades con el input
// Mostrando si están en el array, y cuál es su posición
function buscarCiudad() {
  // Obtengo la ciudad de la casilla
  const casilla = document.querySelector("#buscarCiudad");
  const textoCiudad = casilla.value.trim();

  // Vacío la salida
  const salida = document.querySelector("#salida6");
  salida.textContent = "";

  // Si la casilla está vacía
  if (textoCiudad === "") {
    // Muestro un mensaje de aviso y console.warn
    salida.textContent = "Debe introducir una ciudad en la casilla.";
    console.warn("Buscar Ciudad: Debe introducir una ciudad en la casilla.");
  } else {
    // Si no, se verifica si la ciudad está en el array, y su posición
    const incluido = ciudades.includes(textoCiudad);
    const indice = ciudades.indexOf(textoCiudad);

    // Creo dos párrafos, uno para mostrar el resultado de includes(), y otro para el de indexOf()
    const parrafo1 = crearElemento("p",`includes() devuelve ${incluido}`);
    const parrafo2 = crearElemento("p",`indexOf() devuelve ${indice}`);
    parrafo1.classList.add("my-1");

    // Meto ambos párrafos al contenedor de salida, y dejo rastro en consola
    salida.append(parrafo1,parrafo2);
    console.log(`Buscar Ciudad: ${textoCiudad} → includes ${incluido}, indexOf ${indice}.`);
  }
}

mostrarCiudades();