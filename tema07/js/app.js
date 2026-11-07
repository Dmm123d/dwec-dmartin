/*
  Tarea 7 · DWEC · David Martín Martí
  Funciones, flechas y clases.
*/

console.log("app.js cargado");


// ============================================================
// Ayuda: pinta una lista de textos en un <ul class="list-group">
// (ya está hecha, y su forEach ya lleva una flecha: es el modelo)
// ============================================================

// Pinta cada texto del array como un <li> dentro de la lista indicada
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

// Devuelve el precio final: primero resta el descuento y después suma el IVA
function calcularPrecio(base, iva = 21, descuento = 0) {
  // Precio tras restar el descuento
  let precioFinal = base - (base*(descuento/100));
  // Se suma el IVA sobre el precio con descuento
  precioFinal += precioFinal*(iva/100);
  return precioFinal;
}

// Devuelve la cantidad con dos decimales y el símbolo del euro
function formatearEuros(cantidad) {
  return cantidad.toFixed(2) + " €";
}

// Botón «Calcular»: lee el formulario, valida y pinta el desglose del precio
function mostrarPrecio() {
  // Casillas del formulario y párrafo de error
  const baseCasilla = document.querySelector("#base");
  const ivaCasilla = document.querySelector("#iva");
  const descuentoCasilla = document.querySelector("#descuento");
  const error = document.querySelector("#error1");

  // Texto de cada casilla, sin espacios en los extremos
  const baseTexto = baseCasilla.value.trim();
  const ivaValor = Number(ivaCasilla.value.trim());
  const descuentoTexto = descuentoCasilla.value.trim();

  // Base y descuento convertidos a número
  const baseValor = Number(baseTexto);
  const descuentoValor = Number(descuentoTexto);

  // Base vacía o negativa: error y se sale
  if (baseTexto === "" || baseValor < 0) {
    error.classList.remove("d-none");
    error.textContent = "Introduce una base válida en la casilla.";
    console.warn("Mostrar Precio: Base inválida o casilla vacía.");
    return;
  }
  
  // Descuento escrito pero fuera de 0-100: error y se sale
  if (descuentoTexto !== "" && (descuentoValor < 0 || descuentoValor > 100)) {
    error.classList.remove("d-none");
    error.textContent = "Descuento fuera de límite (0-100%).";
    console.warn("Mostrar Precio: Descuento fuera de límite (0-100%).");
    return;
  }

  // Datos correctos: se oculta el error
  error.classList.add("d-none");
  // Precio final y líneas del desglose
  let precioFinal;
  const textos = [`Precio sin IVA: ${formatearEuros(baseValor)}`];

  // Sin descuento se llama sin el tercer argumento (se usa el de por defecto)
  if (descuentoTexto === "") {
    precioFinal = calcularPrecio(baseValor,ivaValor);
  } else {
    precioFinal = calcularPrecio(baseValor, ivaValor, descuentoValor);
    textos.push(`Descuento: ${descuentoValor} %`);
  }

  // Se añaden el IVA y el precio final, y se pinta la lista
  textos.push(`IVA: ${ivaValor} %`, `Precio final: ${formatearEuros(precioFinal)}`);
  pintarLista("#salida1", textos);
  console.log("Mostrar Precio:", textos);
}


// ============================================================
// Ejercicio 2 · Películas: de function a flecha
// ============================================================

// Array de películas: cada objeto tiene título, año y duración en minutos
const peliculas = [
  { titulo: "El laberinto del fauno", anio: 2006, duracion: 118 },
  { titulo: "Coco", anio: 2017, duracion: 105 },
  { titulo: "Interstellar", anio: 2014, duracion: 169 },
  { titulo: "Regreso al futuro", anio: 1985, duracion: 116 },
  { titulo: "Parásitos", anio: 2019, duracion: 132 },
  { titulo: "Toy Story", anio: 1995, duracion: 81 }
];

// Devuelve una película como texto: «Coco (2017) · 105 min»
function comoTexto(pelicula) {
  return `${pelicula.titulo} (${pelicula.anio}) · ${pelicula.duracion} min`;
}

// Botón: muestra solo los títulos (map)
function verTitulos() {
  const titulos = peliculas.map((pelicula) => pelicula.titulo);
  pintarLista("#salida2", titulos);
  document.querySelector("#mensaje2").textContent = `${titulos.length} títulos.`;
  console.log("Ver Titulos: map →", titulos);
}

// Botón: muestra las películas de más de 2 horas (filter)
function verLargas() {
  const largas = peliculas.filter((pelicula) => pelicula.duracion > 120);
  pintarLista("#salida2", largas.map(comoTexto));   // comoTexto ya es una función: se pasa sin paréntesis
  document.querySelector("#mensaje2").textContent = `${largas.length} películas duran más de 2 horas.`;
  console.log("Ver Largas: filter →", largas);
}

// Botón: ordena por año una copia del array, sin cambiar el original (sort)
function ordenarPorAnio() {
  const ordenadas = [...peliculas].sort((a, b) => a.anio - b.anio);
  pintarLista("#salida2", ordenadas.map(comoTexto));
  document.querySelector("#mensaje2").textContent = "De la más antigua a la más reciente.";
  console.log("Ordenar Por Año: sort →", ordenadas);
}

// Botón: suma la duración de todas las películas (reduce)
function verDuracionTotal() {
  const minutos = peliculas.reduce((total, pelicula) => total + pelicula.duracion, 0);
  pintarLista("#salida2", [`${minutos} minutos de películas`]);
  document.querySelector("#mensaje2").textContent = "La suma de las seis duraciones.";
  console.log("Ver Duración Total: reduce →", minutos);
}

// Botón: busca la primera película anterior a 1990 (find)
function buscarAntigua() {
  const antigua = peliculas.find((pelicula) => pelicula.anio < 1990);

  // find devuelve undefined si no encuentra ninguna
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

// Array de números con el que se prueban las operaciones
const numeros = [3, -1, 4, -1, 5, 9];
// Se muestra el array en la página
document.querySelector("#numeros3").textContent = `const numeros = [${numeros.join(", ")}];`;

// Hace lo mismo que map: aplica la operación a cada elemento y devuelve un array nuevo
function transformar(lista, operacion) {
  // Array nuevo con los resultados
  const array = [];
  for (const elemento of lista) {
    array.push(operacion(elemento));
  }
  return array;
}

// Pinta en #salida3 el resultado de transformar, el de map y el array original
function mostrar3(nombre, resultado, conMap) {
  // Se vacía la salida antes de pintar
  const salida = document.querySelector("#salida3");
  salida.textContent = "";
  // Las tres líneas que se van a mostrar
  const lineas = [
    `${nombre} → [${resultado.join(", ")}]`,
    `con map → [${conMap.join(", ")}]`,
    `numeros → [${numeros.join(", ")}] (no cambia)`
  ];
  // Cada línea se pinta en un <p>
  lineas.forEach((linea) => {
    const p = document.createElement("p");
    p.classList.add("mb-1");
    p.textContent = linea;
    salida.append(p);
  });
}

// Botón: el doble de cada número
function verDobles() {
  const resultado = transformar(numeros, (n) => n * 2);
  mostrar3("dobles", resultado, numeros.map((n) => n * 2));
  console.log("Ver Dobles: dobles →", resultado);
}

// Botón: el cuadrado de cada número
function verCuadrados() {
  const resultado = transformar(numeros, (n) => n ** 2);
  mostrar3("cuadrados", resultado, numeros.map((n) => n ** 2));
  console.log("Ver Cuadrados: cuadrados →", resultado);
}

// Botón: el valor absoluto de cada número (Math.abs se pasa sin paréntesis)
function verAbsolutos() {
  const resultado = transformar(numeros, Math.abs);
  mostrar3("absolutos", resultado, numeros.map(Math.abs));
  console.log("Ver Absolutos: absolutos →", resultado);
}


// ============================================================
// Ejercicio 4 · Dos contadores con closure
// ============================================================

// Crea un contador: devuelve una función que suma paso a cuenta cada vez que se llama
function crearContador(paso = 1) {
  // cuenta es privada: solo la ve la función que se devuelve (closure)
  let cuenta = 0;
  return function () {
    cuenta += paso;
    return cuenta;
  };
}

// Dos contadores independientes: uno de 1 en 1 y otro de 5 en 5
const contarDeUno = crearContador();
const contarDeCinco = crearContador(5);

// El modelo
// Botón «+1»: suma uno y lo muestra
function sumarUno() {
  const valor = contarDeUno();
  document.querySelector("#cuenta1").textContent = valor;
  console.log("Sumar Uno: de 1 en 1 →", valor);
}

// Botón «+5»: suma cinco y lo muestra
function sumarCinco() {
  const valor = contarDeCinco();
  document.querySelector("#cuenta5").textContent = valor;
  console.log("Sumar Cinco: de 5 en 5 →", valor);
}


// ============================================================
// Ejercicio 5 · Clases
// ============================================================

// Clase Alumno: nombre, curso y lista de notas
class Alumno {
  // Guarda los datos del alumno; empieza sin notas
  constructor(nombre, curso) {
    this.nombre = nombre;
    this.curso = curso;
    this.notas = [];
  }

  // Añade la nota si es un número entre 0 y 10 y devuelve true; si no, devuelve false
  anadirNota(nota) {
    if (Number.isNaN(nota) || nota < 0 || nota > 10) {
      return false;
    } else {
      this.notas.push(nota);
      return true;
    }
  }

  // Devuelve la media de las notas, o 0 si no tiene
  media() {
    if (this.notas.length === 0) {
      return 0;
    } else {
      return (this.notas.reduce((total, nota) => total + nota, 0)/this.notas.length);
    }
  }

  // Devuelve la frase de presentación: «Nombre, de Curso»
  presentarse() {
    return `${this.nombre}, de ${this.curso}`;
  }
}

// Clase AlumnoFCT: hereda de Alumno y añade la empresa de prácticas
class AlumnoFCT extends Alumno {
  // Llama primero al constructor de Alumno y después guarda la empresa
  constructor(nombre, curso, empresa){
    super(nombre, curso);
    this.empresa = empresa;
  }

  // Reutiliza la frase de Alumno y añade la empresa
  presentarse() {
    return `${super.presentarse()}, en prácticas en ${this.empresa}`;
  }
}

// Array con todos los alumnos que se pintan en la página
const alumnos = [];
// Alumnos de partida: uno normal y uno en prácticas, con dos notas cada uno
const alumno1 = new Alumno("Cristian Alvarez", "2.º DAW");
alumno1.anadirNota(10);
alumno1.anadirNota(9);
const alumno2 = new AlumnoFCT("David Martín","2.º DAW", "Comerline");
alumno2.anadirNota(9.5);
alumno2.anadirNota(9.35);
alumnos.push(alumno1,alumno2);

// Pinta una tarjeta por alumno y actualiza el total
function pintarAlumnos() {
  const contenedor = document.querySelector("#listaAlumnos");
  contenedor.textContent = "";

  alumnos.forEach((alumno) => {
    // Columna y tarjeta de cada alumno
    const columna = document.createElement("div");
    columna.classList.add("col-12", "col-md-6", "col-xl-4");

    const tarjeta = document.createElement("div");
    tarjeta.classList.add("border", "rounded", "p-2", "h-100");

    // Frase de presentación del alumno
    const frase = document.createElement("p");
    frase.classList.add("mb-1");
    frase.textContent = alumno.presentarse();

    // Etiqueta con la media: gris sin notas, verde si aprueba, roja si suspende
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

    // Si es alumno en prácticas, se añade la etiqueta «FCT»
    if (alumno instanceof AlumnoFCT) {
      const fct = document.createElement("span");
      fct.classList.add("badge", "text-bg-info");
      fct.textContent = "FCT";
      tarjeta.append(fct);
    }

    columna.append(tarjeta);
    contenedor.append(columna);
  });

  // Número total de alumnos
  document.querySelector("#totalAlumnos").textContent = alumnos.length;
}

// Botón «Crear»: lee el formulario, valida y añade un alumno nuevo
function crearAlumno() {
  // Casillas del formulario y párrafo de error
  const nombreCasilla = document.querySelector("#nombre5");
  const cursoCasilla = document.querySelector("#curso5");
  const empresaCasilla = document.querySelector("#empresa5");
  const notasCasilla = document.querySelector("#notas5");
  const error = document.querySelector("#error5");

  // Texto de cada casilla, sin espacios en los extremos
  const nombreValor = nombreCasilla.value.trim();
  const cursoValor = cursoCasilla.value.trim();
  const empresaValor = empresaCasilla.value.trim();
  const notasValor = notasCasilla.value.trim();

  // Nombre vacío: error y se sale
  if (nombreValor === "") {
    error.classList.remove("d-none");
    error.textContent = "Introduce un nombre en la casilla respectiva.";
    console.warn("Crear Alumno: Nombre no introducido.");
    return;
  }
  
  // Sin empresa se crea un Alumno; con empresa, un AlumnoFCT
  const alumno = empresaValor === "" ? new Alumno(nombreValor,cursoValor) : new AlumnoFCT(nombreValor,cursoValor,empresaValor);
  
  // Si hay notas: se separan por comas, se convierten a número y se validan
  if (notasValor !== "") {
    const notasArray = notasValor.split(",");
    const notas = notasArray.map((texto) => Number(texto.trim()));
    const novalida = notas.some((nota) => Number.isNaN(nota) || nota > 10 || nota < 0);
    
    // Alguna nota no válida: error y no se crea el alumno
    if(novalida){
      error.classList.remove("d-none");
      error.textContent = "Alguna nota introducida no es válida.";
      console.warn("Crear Alumno: Alguna nota introducida no es válida.");
      return;
    }

    // Todas válidas: se añaden al alumno
    for (const nota of notas) {
      alumno.anadirNota(nota);
    }
  }
  // Se guarda el alumno, se oculta el error, se vacían las casillas y se pinta la lista
  alumnos.push(alumno);
  error.classList.add("d-none");
  nombreCasilla.value = "";
  empresaCasilla.value = "";
  notasCasilla.value = "";
  pintarAlumnos();
  console.log("Crear Alumno: Alumno creado.");
}

// Se pintan los alumnos de partida al cargar la página
pintarAlumnos();


// ============================================================
// Ejercicio 6 · Fechas y textos
// ============================================================

// Devuelve los días que faltan desde hoy hasta la fecha (negativo si ya pasó)
function diasHasta(fecha) {
  // Hoy a medianoche, para contar solo días completos
  const hoy = new Date();
  hoy.setHours(0,0,0,0);
  // Diferencia en milisegundos pasada a días
  const dias = (fecha - hoy) / (1000 * 60 * 60 * 24);
  // Se redondea por el cambio de hora
  return Math.round(dias);
}

// Botón «Calcular»: muestra cuántos días faltan o pasaron y el nombre de la fecha
function mostrarDias() {
  const valor = document.querySelector("#fecha6").value;
  const salida = document.querySelector("#salida6a");

  // Sin fecha elegida: aviso y se sale
  if (valor === "") {
    salida.textContent = "Elige una fecha.";
    console.warn("Mostrar Días: Elige una fecha.");
    return;
  }

  // De "2026-12-25" a un Date (el mes va de 0 a 11, por eso mes - 1)
  const [anio, mes, dia] = valor.split("-").map(Number);
  const fecha = new Date(anio, mes - 1, dia);

  // Fecha en español: «viernes, 25 de diciembre de 2026»
  const fechaFormatizada = fecha.toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long", year: "numeric"});
  const dias = diasHasta(fecha);

  // Mensaje según sea hoy, una fecha pasada o una futura
  if (dias === 0) {
    salida.textContent = `Es hoy ${fechaFormatizada}.`;
  } else if (dias < 0) {
    salida.textContent = Math.abs(dias) === 1 ? `Fue hace un día: ${fechaFormatizada}.` : `Fue hace ${Math.abs(dias)} días: el ${fechaFormatizada}.`;
  } else {
    salida.textContent = dias === 1 ? `Falta un día: el ${fechaFormatizada}.` : `Faltan ${dias} días: será ${fechaFormatizada}.`;
  }
  console.log("Mostrar Días: Fecha mostrada.");
}

// Devuelve las iniciales en mayúsculas, ignorando los espacios dobles
function iniciales(nombreCompleto) {
  return nombreCompleto.trim().split(" ").filter((palabra) => palabra !== "").map((palabra) => palabra[0].toUpperCase()).join("");
}

// Devuelve las iniciales en minúsculas y tres cifras al azar (de 000 a 999)
function crearUsuario(nombreCompleto) {
  return iniciales(nombreCompleto).toLowerCase() + Math.floor(Math.random()*1000).toString().padStart(3,"0");
}

// Botón: muestra las iniciales y el usuario del nombre escrito
function mostrarIniciales() {
  const nombreCasilla = document.querySelector("#nombre6");
  const salida = document.querySelector("#salida6b");

  const nombreValor = nombreCasilla.value.trim();

  // Nombre vacío: aviso; si no, se muestran iniciales y usuario
  if (nombreValor === "") {
    salida.textContent = "Introduce un nombre en la casilla.";
    console.warn("Mostrar Iniciales: Nombre no introducido.");
  } else {
    salida.textContent = `Iniciales: ${iniciales(nombreValor)} · usuario: ${crearUsuario(nombreValor)}`;
    console.log("Mostrar Iniciales: Iniciales y usuario mostrado.");
  }
}
