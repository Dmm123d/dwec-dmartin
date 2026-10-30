/*
  Tarea 6 · DWEC · David Martín Martí
  Objetos y arrays.

  Cómo usar esta plantilla:
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · Ya tienes hechas, como modelo, comoTexto(), pintarProductos() y el ejercicio 2 casi entero:
    léelas antes de empezar, porque el resto se hace igual.
  · Los resultados se pintan en la página como en el tema 5: createElement, textContent, classList y append.
    Antes de volver a pintar una lista, vacíala con textContent = "".
  · Las funciones se escriben con function, también las que pasas a forEach, sort, map, filter o reduce.
    Las funciones flecha las veremos en el tema 7: en esta tarea, no las uses.
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: un array como texto, por ejemplo [1, 2, 3]
// (ya está hecha: úsala cuando quieras enseñar un array)
// ============================================================

function comoTexto(lista) {
  return "[" + lista.join(", ") + "]";
}


// ============================================================
// Ejercicio 1 · Ficha de estudiante
// ============================================================

// TODO: completa el objeto literal con tus datos: nombre, apellidos, edad y curso.
// TODO: añádele el método presentarse(), que devuelve una frase con this.nombre, this.apellidos, this.edad y this.curso.
//       Por ejemplo: «Soy [nombre] [apellidos], tengo [edad] años y estudio [curso].»
const estudiante = {
  nombre: "David",
  apellidos: "Martín Martí",
  edad: 25,
  curso: "2ºDAW",
  presentarse: function () {
    return `Soy ${this.nombre} ${this.apellidos}, tengo ${this.edad} años y estudio ${this.curso}`;
  }
};

function verFicha() {
  const salida1 = document.getElementById("salida1");
  salida1.textContent = "";

  const claves = ["nombre","apellidos","edad","curso"];

  const lista = document.createElement("ul");
  lista.setAttribute("class","list-group");

  claves.forEach(function (clave) {
    const elementoLista = document.createElement("li");
    elementoLista.setAttribute("class","list-group-item");
    elementoLista.textContent = `${clave.charAt(0).toUpperCase() + clave.slice(1)}: ${estudiante[clave]}`;
    lista.append(elementoLista);
  });

  const parrafo = document.createElement("p");
  parrafo.setAttribute("class","mt-2 mx-auto");
  parrafo.textContent = estudiante.presentarse();
  lista.append(parrafo);
  salida1.append(lista);

  console.log(estudiante);

  // TODO: vacía #salida1 (textContent = "").
  // TODO: crea un <ul class="list-group"> con un <li class="list-group-item"> por propiedad: «nombre: ...», «edad: ...».
  //       Pista: guarda las claves en un array, ["nombre", "apellidos", "edad", "curso"], recórrelo con forEach
  //       y lee cada valor con corchetes: estudiante[clave].
  // TODO: debajo, un <p> con la frase de estudiante.presentarse().
  // TODO: console.log() del objeto entero.
}

function cumplirAnios() {
  estudiante.edad += 1;
  verFicha();
  console.log(`Cumplir Años: ${estudiante.edad} recien cumplidos.`);
  // TODO: suma 1 a la edad del estudiante y vuelve a pintar la ficha (llama a verFicha()).
}

function quitarCurso() {
  delete estudiante.curso;
  verFicha();
  console.log("Quitar Curso: Curso borrado.");
  // TODO: borra la propiedad curso con delete y vuelve a pintar la ficha.
  //       Fíjate en lo que sale ahora en el curso y explícalo en el README.
}


// ============================================================
// Ejercicio 2 · Colores
// mostrarColores() y anadirColor() ya están hechas: son el modelo
// ============================================================

const colores = ["rojo", "verde", "azul"];

function mostrarColores() {
  const lista = document.querySelector("#listaColores");
  lista.textContent = "";   // vaciamos la lista antes de volver a pintarla

  colores.forEach(function (color) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = color;
    lista.append(li);
  });

  document.querySelector("#totalColores").textContent = colores.length;
}

function avisar2(mensaje) {
  const aviso = document.querySelector("#aviso2");
  aviso.textContent = mensaje;
  aviso.classList.remove("d-none");
}

function anadirColor() {
  const casilla = document.querySelector("#color");
  const color = casilla.value.trim();

  if (color === "") {
    avisar2("Escribe un color antes de pulsar «Añadir».");
    console.warn("Añadir Color: Escribe color antes de pulsar «Añadir».");
    return;
  }

  colores.push(color);   // push añade al final
  casilla.value = "";
  document.querySelector("#aviso2").classList.add("d-none");
  mostrarColores();
  console.log("Añadir Color: push →", comoTexto(colores));
}

function quitarUltimo() {
  if (colores.length === 0) {
    avisar2("La lista está vacía.");
    console.warn("Quitar Último: La lista está vacía.");
  } else {
    const ultimo = colores.pop();
    document.querySelector("#aviso2").classList.add("d-none");
    mostrarColores();
    console.log(`Quitar Último: Ha salido el color ${ultimo}.`);
  }
  // TODO: si la lista está vacía, avisa con avisar2() y no hagas nada más.
  // TODO: si no, saca el último con pop(), vuelve a pintar la lista y di en la consola qué color ha salido.
}

function quitarPrimero() {
  if (colores.length === 0) {
    avisar2("La lista está vacía.");
    console.warn("Quitar Primero: La lista está vacía.");
  } else {
    const primero = colores.shift();
    document.querySelector("#aviso2").classList.add("d-none");
    mostrarColores();
    console.log(`Quitar Primero: Ha salido el color ${primero}.`);
  }
  // TODO: lo mismo que quitarUltimo(), pero sacando el primero con shift().
}

mostrarColores();   // pinta los tres colores de partida nada más cargar


// ============================================================
// Ejercicio 3 · Catálogo de productos
// ============================================================

// Puedes cambiar los productos por otros, pero deja al menos seis, con estas tres propiedades
const productos = [
  { nombre: "Teclado mecánico", precio: 79.9, categoria: "Periféricos" },
  { nombre: "Ratón inalámbrico", precio: 24.5, categoria: "Periféricos" },
  { nombre: "Monitor 27 pulgadas", precio: 189, categoria: "Pantallas" },
  { nombre: "Alfombrilla XL", precio: 12, categoria: "Accesorios" },
  { nombre: "Webcam HD", precio: 49.99, categoria: "Vídeo" },
  { nombre: "Auriculares con micro", precio: 59, categoria: "Audio" }
];

// Ya está hecha: pinta en la tabla la lista de productos que le pases
function pintarProductos(lista) {
  const cuerpo = document.querySelector("#tablaProductos");
  cuerpo.textContent = "";

  lista.forEach(function (producto) {
    const fila = document.createElement("tr");

    const nombre = document.createElement("td");
    nombre.textContent = producto.nombre;

    const categoria = document.createElement("td");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("td");
    precio.classList.add("text-end");
    precio.textContent = producto.precio.toFixed(2) + " €";

    fila.append(nombre, categoria, precio);
    cuerpo.append(fila);
  });
  console.log("Pintar Productos: Tabla de productos creada.");
}

function mostrarProductos() {
  pintarProductos(productos);
  document.querySelector("#mensaje3").textContent = `Hay ${productos.length} productos.`;
  console.log("Mostrar Productos: Productos mostrados.");
  // TODO: pinta todos los productos con pintarProductos() y escribe en #mensaje3 cuántos hay.
}

function ordenarPorPrecio() {
  const copia = [...productos].sort(function(a, b) {
    return a.precio - b.precio;
  });
  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Está ordenado de más barato a más caro.";
  console.log("Ordenar Por Precio: Precio ordenado de barato a caro.");
  // TODO: haz una copia del array con [...productos] y ordénala con sort() de más barato a más caro.
  //       sort necesita una función de comparación: function (a, b) { return ... }.
  //       ¿Por qué una copia? Explícalo en el README.
  // TODO: pinta la copia y escribe en #mensaje3 cómo están ordenados.
}

function filtrarCaros() {
  const copia = [...productos].filter(function (producto) {
    return producto.precio >= 50;
  });
  pintarProductos(copia);
  document.querySelector("#mensaje3").textContent = "Está filtrado mostrando los mayores de 50€.";
  console.log("Filtrar Caros: Productos filtrados a más de 50€.");
  // TODO: con filter(), los productos de más de 50 €. Píntalos y escribe en #mensaje3 cuántos son.
}

function buscarProducto() {
  const casilla = document.querySelector("#buscarProducto");
  const productoNombre = casilla.value.trim().toLowerCase();

  if (producto === "") {
    document.querySelector("#mensaje3").textContent = "Debe introducir un producto para buscar.";
  } else {
    const encontrado = [...productos].find(function (producto) {
      return producto.nombre.includes(productoNombre);
    });
    if (encontrado === undefined) {
      document.querySelector("#mensaje3").textContent = "El producto buscado no existe.";
      console.warn("Buscar Producto: Producto buscado no existe.");
    } else {
      pintarProductos(encontrado);
      console.log("Buscar Producto: Producto encontrado.");
    }
  }
  // TODO: lee #buscarProducto (value, trim y toLowerCase). Si está vacío, avisa en #mensaje3.
  // TODO: con find(), el primer producto cuyo nombre en minúsculas contenga ese texto (includes).
  // TODO: find devuelve undefined si no encuentra nada: en ese caso, dilo en #mensaje3 y vacía la tabla.
  //       Si lo encuentra, píntalo solo a él: pintarProductos([encontrado]).
}

mostrarProductos();   // la tabla completa nada más cargar


// ============================================================
// Ejercicio 4 · Notas
// ============================================================

const alumno = {
  nombre: "David Martín Martí",
  notas: [],
  anadirNota: function (nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    } else {
      this.notas.push(nota);
      return true;
    }
  },
  media: function () {
    if (this.notas.length === 0){
      return 0;
    } else {
      const media = (this.notas.reduce(function (total, nota) {
        return total + nota;
      }, 0)) / this.notas.length;
      return media;
    }
  }
  // TODO: método anadirNota(nota): si la nota no es un número (Number.isNaN) o no está entre 0 y 10, devuelve false;
  //       si es válida, la añade a this.notas con push y devuelve true.
  // TODO: método media(): si no hay notas devuelve 0; si hay, la suma (con reduce) dividida entre el número de notas.
  //       Recuerda la coma entre una propiedad y la siguiente.
};

function mostrarNotas() {
  const notasCaja = document.getElementById("notas");
  notasCaja.textContent = "";
  alumno.notas.forEach(function (nota) {
    const badge = document.createElement("span");
    badge.setAttribute("class","badge");
    if (nota < 5) {
      badge.classList.add("text-bg-danger");
    } else if (nota >= 5) {
      badge.classList.add("text-bg-success");
    }
    badge.textContent = nota;
    notasCaja.append(badge);
  });

  const media = document.getElementById("media");
  if (alumno.media() === 0) {
    media.textContent = "Todavía no hay notas.";
  } else {
    media.textContent = `Media de ${alumno.notas.length} notas: ${alumno.media().toFixed(2)}`;
  }
  console.log("Mostrar Notas: Notas y su media mostradas.");
  // TODO: vacía #notas y pon un badge (<span class="badge">) por nota: verde (text-bg-success) si es de 5 o más,
  //       rojo (text-bg-danger) si no.
  // TODO: en #media, «Media de N notas: X» con dos decimales (toFixed(2)), o «Todavía no hay notas.».
}

function anadirNota() {
  const notaCasilla = document.getElementById("nota");
  const error = document.getElementById("error4");

  const notaValor = notaCasilla.value.trim();

  if (notaValor === "") {
    error.textContent = "Introduzca una nota entre 0 y 10.";
    error.classList.remove("d-none");
    console.warn("Añadir Nota: Casilla vacía.");
    return;
  }

  const nota = Number(notaValor);
  const valida = alumno.anadirNota(nota);

  if (valida === false) {
    error.textContent = "La nota debe ser un número entre 0 y 10.";
    error.classList.remove("d-none");
    console.log(`Añadir Nota: Nota ${notaValor} no válida.`);
    return;
  }
  error.textContent = "";
  error.classList.add("d-none");
  notaCasilla.value = "";
  console.log(`Añadir Nota: Nota ${nota} guardada.`);
  mostrarNotas();
  // TODO: si #nota está vacía, muestra un error en #error4 (quítale "d-none").
  //       Ojo: Number("") vale 0, así que esta comprobación va antes de convertir.
  // TODO: convierte el valor con Number() y llama a alumno.anadirNota(). Si devuelve false, muestra el error.
  // TODO: si ha ido bien, oculta el error, vacía la casilla y llama a mostrarNotas().
}

function borrarNotas() {
  alumno.notas.length = 0;
  mostrarNotas();
  // TODO: deja alumno.notas vacío y vuelve a pintar.
}

mostrarNotas();


// ============================================================
// Ejercicio 5 · map, filter y reduce
// ============================================================

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function verDobles() {
  const dobles = numeros.map(function (n) {
    return n * 2;
  });
  document.querySelector("#salida5").textContent = `map → ${comoTexto(dobles)}`;
  console.log(`map → ${comoTexto(dobles)}`);
  // TODO: con map(), un array nuevo con el doble de cada número.
  // TODO: escribe en #salida5 el resultado y, debajo, numeros (para que se vea que no ha cambiado).
}

function verPares() {
  const pares = numeros.filter(function (n) {
    return n % 2 === 0;
  });
  document.querySelector("#salida5").textContent = `filter → ${comoTexto(pares)}`;
  console.log(`filter → ${comoTexto(pares)}`);
  // TODO: con filter(), los números pares (n % 2 === 0). Escríbelos en #salida5 como en verDobles().
}

function verSuma() {
  const suma = numeros.reduce(function (total,n) {
    return total + n;
  }, 0);
  document.querySelector("#salida5").textContent = `reduce → ${suma}`;
  console.log(`filter → ${comoTexto(pares)}`);
  // TODO: con reduce(), la suma de todos los números (empieza en 0). Escríbela en #salida5.
}

function verCadena() {
  const salida = document.getElementById("salida5");
  const pares = numeros.filter(function (n) {
    return n % 2 === 0;
  });
  const dobles = pares.map(function (n) {
    return n * 2;
  });
  const suma = dobles.reduce(function (total,n) {
    return total + n;
  }, 0);
  salida.innerHTML = `filter → ${comoTexto(pares)}<br>map → ${comoTexto(dobles)}<br>reduce → ${suma}`;
  // TODO: los tres seguidos: los pares, después sus dobles y al final la suma de esos dobles.
  //       Escribe en #salida5 una línea por paso.
}


// ============================================================
// Ejercicio 6 · Ciudades
// ============================================================

const ciudadesOriginal = ["Granada", "Sevilla", "Málaga", "Córdoba", "Jaén", "Almería", "Cádiz", "Huelva"];
let ciudades = [...ciudadesOriginal];   // una copia: splice cambia ciudades y así podemos restaurarla

function mostrarCiudades() {
  const ciudadesCaja = document.querySelector("#ciudades");
  ciudadesCaja.textContent = "";
  ciudades.forEach(function (ciudad, pos) {
    const badge = document.createElement("span");
    badge.classList.add("badge","text-dark","bg-white","border","m-1");
    badge.textContent = `${pos} · ${ciudad}`;
    ciudadesCaja.append(badge);
  });
  // TODO: vacía #ciudades y pon un badge por ciudad con su posición: «0 · Granada», «1 · Sevilla»...
  //       Pista: forEach le pasa a tu función dos datos: function (ciudad, posicion) { ... }.
}

function verSlice() {
  const arraySlice = ciudades.slice(2,5);
  const salida = document.querySelector("#salida6");
  salida.innerHTML = `slice(2,5) devuelve ${comoTexto(arraySlice)}<br>ciudades ahora tiene ${ciudades.length} elementos: no ha cambiado`;
  // TODO: guarda ciudades.slice(2, 5) y escribe en #salida6 qué devuelve y cuántas ciudades siguen en el array.
}

function hacerSplice() {
  const arraySplice = ciudades.splice(2,2);
  const salida = document.querySelector("#salida6");

  if (ciudades.length < 3) {
    salida.textContent = "Quedan menos de 3 ciudades, es necesario restaurar.";
  } else {
    salida.innerHTML = `splice(2,2) devuelve ${comoTexto(arraySplice)}<br>ciudades ahora tiene ${ciudades.length} elementos: sí ha cambiado`;
    mostrarCiudades();
  }
  // TODO: si quedan menos de 3 ciudades, avisa en #salida6 de que hay que restaurar y no hagas nada más.
  // TODO: si no, ciudades.splice(2, 2): escribe en #salida6 qué devuelve y cuántas quedan, y vuelve a pintar.
}

function restaurarCiudades() {
  ciudades = [...ciudadesOriginal];
  mostrarCiudades();
  // TODO: vuelve a copiar ciudadesOriginal en ciudades y pinta.
}

function buscarCiudad() {
  const buscarCiudad = document.querySelector("#buscarCiudad");
  const salida = document.querySelector("#salida6");
  const textoCiudad = buscarCiudad.value.trim();

  if (textoCiudad === "" || ciudades.indexOf(textoCiudad) === -1) {
    salida.textContent = "Debe introducir una ciudad existente en la casilla.";
  } else {
    const incluido = ciudades.includes(textoCiudad);
    const indice = ciudades.indexOf(textoCiudad);
    salida.innerHTML = `includes() devuelve ${incluido}<br>indexOf() devuelve ${indice}`;
  }
  // TODO: lee #buscarCiudad (value y trim). Si está vacío, avisa.
  // TODO: escribe en #salida6 lo que dan includes() e indexOf() con ese nombre. Si no está, indexOf da -1.
}

mostrarCiudades();
