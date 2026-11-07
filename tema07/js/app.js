/*
  Tarea 7 · DWEC · David Martín Martí
  Funciones, flechas y clases.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

function pintarLista(selector, textos) {
  const lista = document.querySelector(selector);
  lista.textContent = "";

  textos.forEach((texto) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.textContent = texto;
    lista.append(li);
  });
}


// ============================================================
// Ejercicio 1 · Precio final
// ============================================================

function calcularPrecio(base, iva = 21, descuento = 0) {
  let precioFinal = base - (base*(descuento/100));
  precioFinal += precioFinal*(iva/100);
  return precioFinal;
}

function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

function mostrarPrecio() {
  const baseCasilla = document.querySelector("#base");
  const ivaCasilla = document.querySelector("#iva");
  const descuentoCasilla = document.querySelector("#descuento");
  const error = document.querySelector("#error1");

  const baseTexto = baseCasilla.value.trim();
  const ivaValor = Number(ivaCasilla.value.trim());
  const descuentoTexto = descuentoCasilla.value.trim();

  const baseValor = Number(baseTexto);
  const descuentoValor = Number(descuentoTexto);

  if (baseTexto === "" || baseValor < 0) {
    error.classList.remove("d-none");
    error.textContent = "Introduce una base válida en la casilla.";
    console.warn("Mostrar Precio: Base inválida o casilla vacía.");
    return;
  }
  
  if (descuentoTexto !== "" && (descuentoValor < 0 || descuentoValor > 100)) {
    error.classList.remove("d-none");
    error.textContent = "Descuento fuera de límite (0-100%).";
    console.warn("Mostrar Precio: Descuento fuera de límite (0-100%).");
    return;
  }

  error.classList.add("d-none");
  let precioFinal;
  const textos = [`Precio sin IVA: ${formatearEuros(baseValor)}`];

  if (descuentoTexto === "") {
    precioFinal = calcularPrecio(baseValor,ivaValor);
  } else {
    precioFinal = calcularPrecio(baseValor, ivaValor, descuentoValor);
    textos.push(`Descuento: ${descuentoValor} %`);
  }

  textos.push(`IVA: ${ivaValor} %`, `Precio final: ${formatearEuros(precioFinal)}`);
  pintarLista("#salida1", textos);
  console.log("Mostrar Precio:", textos);
}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

function verTitulos() {
  const titulos = peliculas.map((pelicula) => pelicula.titulo);
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ver Titulos: map →", titulos);
}

function verLargas() {
  const largas = peliculas.filter((pelicula) => pelicula.duracion > 120);
  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ver Largas: filter →", largas);
}

function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ordenar Por Año: sort →", ordenadas);
}

function verDuracionTotal() {
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ver Duración Total: reduce →", minutos);
}

function buscarAntigua() {
  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);

  if (antigua === undefined) {
    document.querySelector("#mensaje2").textContent = "No hay película anterior a 1990.";
    document.querySelector("#salida2").textContent = "";
    console.warn("Buscar Antigua: Película anterior a 1990 no encontrada.");
  } else {
    pintarLista("#salida2",[comoTexto(antigua)]);
    document.querySelector("#mensaje2").textContent = "La primera película anterior a 1990.";
    console.log("Buscar Antigua: Película encontrada y mostrada.");
  }
}


// ============================================================
// Ejercicio 3 · Tu propio callback
// ============================================================

const numeros = [3, -1, 4, -1, 5, 9];
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

function transformar(lista, operacion) {
  const array = [];
  for (const elemento of lista) {
    array.push(operacion(elemento));
  }
  return array;
}

function mostrar3(nombre, resultado, conMap) {
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ver Dobles: dobles →", resultado);
}

function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ver Cuadrados: cuadrados →", resultado);
}

function verAbsolutos() {
  const resultado = transformar(numeros, Math.abs);
  mostrar3("absolutos", resultado, numeros.map(Math.abs));
  console.log("Ver Absolutos: absolutos →", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

function crearContador(paso = 1) {
  let cuenta = 0;
  return function () {
    cuenta += paso;
    return cuenta;
  };
}

const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

// El modelo
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Sumar Uno: de 1 en 1 →", valor);
}

function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Sumar Cinco: de 5 en 5 →", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

class Alumno {
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    } else {
      this.notas.push(nota);
      return true;
    }
  }

  media() {
    if (this.notas.length === 0) {
      return 0;
    } else {
      return (this.notas.reduce((total, nota) => total + nota, 0)/this.notas.length);
    }
  }

  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}

class AlumnoFCT extends Alumno {
  constructor(nombre, curso, empresa){
    super(nombre, curso);
    this.empresa = empresa;
  }

  presentarse() {
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }
}

const alumnos = [];
const alumno1 = new Alumno("Cristian Alvarez", "2.º DAW");
alumno1.anadirNota(10);
alumno1.anadirNota(9);
const alumno2 = new AlumnoFCT("David Martín","2.º DAW", "Comerline");
alumno2.anadirNota(9.5);
alumno2.anadirNota(9.35);
alumnos.push(alumno1,alumno2);

function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    const media = document.createElement("span");
    media.classList.add("badge", "me-1");
    if (alumno.notas.length === 0) {
      media.classList.add("text-bg-secondary");
      media.textContent = "Sin notas";
    } else {
      media.classList.add(alumno.media() >= 5 ? "text-bg-success" : "text-bg-danger");
      media.textContent = `Media ${alumno.media().toFixed(2)}`;
    }

    tarjeta.append(frase, media);

    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

function crearAlumno() {
  const nombreCasilla = document.querySelector("#nombre5");
  const cursoCasilla = document.querySelector("#curso5");
  const empresaCasilla = document.querySelector("#empresa5");
  const notasCasilla = document.querySelector("#notas5");
  const error = document.querySelector("#error5");

  const nombreValor = nombreCasilla.value.trim();
  const cursoValor = cursoCasilla.value.trim();
  const empresaValor = empresaCasilla.value.trim();
  const notasValor = notasCasilla.value.trim();

  if (nombreValor === "") {
    error.classList.remove("d-none");
    error.textContent = "Introduce un nombre en la casilla respectiva.";
    console.warn("Crear Alumno: Nombre no introducido.");
    return;
  }
  
  const alumno = empresaValor === "" ? new Alumno(nombreValor,cursoValor) : new AlumnoFCT(nombreValor,cursoValor,empresaValor);
  
  if (notasValor !== "") {
    const notasArray = notasValor.split(",");
    const notas = notasArray.map((texto) => Number(texto.trim()));
    const novalida = notas.some((nota) => Number.isNaN(nota) || nota > 10 || nota < 0);
    
    if(novalida){
      error.classList.remove("d-none");
      error.textContent = "Alguna nota introducida no es válida.";
      console.warn("Crear Alumno: Alguna nota introducida no es válida.");
      return;
    }

    for (const nota of notas) {
      alumno.anadirNota(nota);
    }
  }
  alumnos.push(alumno);
  error.classList.add("d-none");
  nombreCasilla.value = "";
  empresaCasilla.value = "";
  notasCasilla.value = "";
  pintarAlumnos();
  console.log("Crear Alumno: Alumno creado.");
}

pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

function diasHasta(fecha) {
  const hoy = new Date();
  hoy.setHours(0,0,0,0);
  const dias = (fecha - hoy) / (1000 * 60 * 60 * 24);
  return Math.round(dias);
}

function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;
  const salida = document.querySelector("#salida6a");

  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    console.warn("Mostrar Días: Elige una fecha.");
    return;
  }

  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);

  const fechaFormatizada = fecha.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric"});
  const dias = diasHasta(fecha);

  if (dias === 0) {
    salida.textContent = `Es hoy ${fechaFormatizada}.`;
  } else if (dias < 0) {
    salida.textContent = Math.abs(dias) === 1 ? `Fue hace un día: ${fechaFormatizada}.` : `Fue hace ${Math.abs(dias)} días: el ${fechaFormatizada}.`;
  } else {
    salida.textContent = dias === 1 ? `Falta un día: el ${fechaFormatizada}.` : `Faltan ${dias} días: será ${fechaFormatizada}.`;
  }
  console.log("Mostrar Días: Fecha mostrada.");
}

function iniciales(nombreCompleto) {
  return nombreCompleto.trim().split(" ").filter((palabra) => palabra !== "").map((palabra) => palabra[0].toUpperCase()).join("");
}

function crearUsuario(nombreCompleto) {
  return iniciales(nombreCompleto).toLowerCase() + Math.floor(Math.random()*1000).toString().padStart(3,"0");
}

function mostrarIniciales() {
  const nombreCasilla = document.querySelector("#nombre6");
  const salida = document.querySelector("#salida6b");

  const nombreValor = nombreCasilla.value.trim();

  if (nombreValor === "") {
    salida.textContent = "Introduce un nombre en la casilla.";
    console.warn("Mostrar Iniciales: Nombre no introducido.");
  } else {
    salida.textContent = `Iniciales: ${iniciales(nombreValor)} · usuario: ${crearUsuario(nombreValor)}`;
    console.log("Mostrar Iniciales: Iniciales y usuario mostrado.");
  }
}
