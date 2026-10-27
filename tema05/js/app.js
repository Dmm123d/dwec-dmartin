/*
  Tarea 5 · DWEC · David Martín Martí
  Manipular el DOM.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // Primer párrafo con getElementById.
  const primero = document.getElementById("primero");
  
  // Segundo párrafo con querySelector.
  const segundo = document.querySelector(".segundo");
  
  // Tercer párrafo con querySelectorAll.
  const tercero = document.querySelectorAll("#contenido p")[2];

  if (primero !== null && segundo !== null && tercero !== undefined) {
    primero.textContent = "Texto modificado por JavaScript"; // TextContent añadiendo el texto específico
    segundo.classList.add("bg-warning-subtle"); // Se añade la clase bg-warning-subtle
    tercero.classList.add("text-danger"); // Se añade la clase text-danger
    console.log("Aplicar Cambios: Cambios Aplicados."); // Se deja rastro en consola
  } else {
    // Si no hay párrafos a los que aplicar cambios, se deja rastro en consola
    console.error("Aplicar Cambios: No hay párrafos a los que aplicar cambios.");
  }
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {
  const parrafoNuevo = document.createElement("p"); // <p> creado con createElement.
  const contenido = document.querySelector("#contenido"); // Caja de contenido
  const aviso = document.getElementById("aviso2"); // Aviso de error

  aviso.classList.add("d-none"); // Ocultado de aviso
  parrafoNuevo.textContent = `Párrafo nuevo ${contenido.children.length+1}`; // Contenido del párrafo
  contenido.append(parrafoNuevo); // <p> introducido dentro de la caja de contenido
  console.log("Añadir Párrafo: Párrafo añadido."); // Console.log respectivo
}

function eliminarUltimo() {
  const contenido = document.querySelector("#contenido"); // Caja de contenido
  const ultimoHijo = contenido.lastElementChild; // Último párrafo
  const aviso = document.getElementById("aviso2"); // Aviso de error

  if (ultimoHijo === null){
    // Si el último párrafo es null, se muestra el error y un aviso en consola
    aviso.classList.remove("d-none");
    console.warn("Eliminar Último: Ya no hay más párrafos.");
  } else {
    // Si no, se elimina el párrafo y se deja rastro en consola
    ultimoHijo.remove();
    console.log("Eliminar Último: Último párrafo borrado.");
  }
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  // Lista con todos los párrafos de la caja de contenido
  const parrafos = document.querySelectorAll("#contenido p");

  // Se recorre la lista
  for (const parrafo of parrafos) {
    // Se añade el evento mouseenter con la función especificada
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });

    // Se añade el evento mouseleave con la función especificada
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });
  }
  // Se deja rastro en consola
  console.log(`Activar Resaltado: Se ha activado el resaltado en ${parrafos.length} párrafos.`);
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const nuevoTexto = document.getElementById("nuevoTexto"); // Input
  const textoLimpio = nuevoTexto.value.trim(); // Texto obtenido y limpiado con trim()
  const error = document.getElementById("error4"); // Aviso de error
  const primerParrafo = document.querySelectorAll("#contenido p")[0]; // Primer párrafo

  if (primerParrafo === undefined) {
    // Si el primer párrafo no existe, se avisa en consola
    console.warn("Cambiar Texto: No hay párrafo al que cambiar texto");
  } else if (textoLimpio === ""){
    // Si el texto está vacío, se muestra el aviso de error y aviso en consola
    error.classList.remove("d-none");
    console.warn("Cambiar Texto: No se ha introducido texto en input.");
  } else {
    // Si no, se edita el texto del primer párrafo con textContent, se quita el error y se deja rastro en consola
    primerParrafo.textContent = textoLimpio;
    error.classList.add("d-none");
    console.log("Cambiar Texto: Primer párrafo modificado.");
  }
}

function cambiarConHtml() {
  const nuevoTexto = document.getElementById("nuevoTexto"); // Input
  const textoLimpio = nuevoTexto.value.trim(); // Texto obtenido y limpiado con trim()
  const error = document.getElementById("error4"); // Aviso de error
  const primerParrafo = document.querySelectorAll("#contenido p")[0]; // Primer párrafo

  if (primerParrafo === undefined) {
    // Si el primer párrafo no existe, se avisa en consola
    console.warn("Cambiar HTML: No hay párrafo al que cambiar texto.");
  } else if (textoLimpio === ""){
    // Si el texto está vacío, se muestra el aviso de error y aviso en consola
    error.classList.remove("d-none");
    console.warn("Cambiar HTML: No se ha introducido texto en input.");
  } else {
    // Si no, se edita el texto del primer párrafo con innerHTML, se quita el error y se deja rastro en consola
    primerParrafo.innerHTML = textoLimpio;
    error.classList.add("d-none");
    console.log("Cambiar HTML: Primer párrafo modificado.");
  }
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  const tareaInput = document.getElementById("tareaInput"); // Input
  const textoLimpio = tareaInput.value.trim(); // Texto obtenido y limpiado con trim()
  const error = document.getElementById("error5"); // Aviso de error
  const listaTareas = document.getElementById("listaTareas"); // Caja de lista de tareas
  const totalTareas = document.getElementById("totalTareas"); // Contador de tareas

  if (textoLimpio === ""){
    // Si el texto está vacío, se muestra el aviso de error, editando su contenido con textContent, y aviso en consola
    error.classList.remove("d-none");
    error.textContent = "El campo está vacío.";
    console.warn("Añadir Tarea: No se ha introducido texto en input.");
  } else {
    // Si no, se crean los elementos li, input y span
    const elementoLista = document.createElement("li");
    const casillaVerificacion = document.createElement("input");
    const span = document.createElement("span");

    // Se añaden los atributos type y class al input
    casillaVerificacion.setAttribute("type","checkbox");
    casillaVerificacion.setAttribute("class","form-check-input");
    
    // Se añade atributo class a li
    elementoLista.setAttribute("class","list-group-item");

    // Se pone el texto introducido en el input al span
    span.textContent = textoLimpio;

    /*
    Se monta la estructura correcta:
      <li class="list-group-item">
        <input type="checkbox" class="form-check-input">
        <span>textoLimpio</span>
      </li>
    */
    elementoLista.append(casillaVerificacion);
    elementoLista.append(span);
    listaTareas.append(elementoLista);

    // Se oculta el aviso del error
    error.classList.add("d-none");

    // Se vacía la casilla del input
    tareaInput.value = "";

    // Se deja rastro en consola
    console.log("Añadir Tarea: Tarea añadida.");
  }
  // Se actualiza el contador de las tareas según children.length
  totalTareas.textContent = listaTareas.children.length;
}

function borrarCompletadas() {
  const casillasMarcadas = document.querySelectorAll("#listaTareas input:checked"); // Lista de casillas marcadas
  const error = document.getElementById("error5"); // Aviso de error
  const listaTareas = document.getElementById("listaTareas"); // Caja de lista de tareas
  const totalTareas = document.getElementById("totalTareas"); // Contador de tareas

  if (casillasMarcadas.length === 0){
    // Si la lista de casillas marcadas está vacío, se muestra el aviso de error,
    // editando su contenido con textContent, y aviso en consola
    error.classList.remove("d-none");
    error.textContent = "Ninguna casilla seleccionada.";
    console.warn("Borrar Completadas: No se han seleccionado tareas.");
  } else {
    // Se recorre la lista de casillas marcadas
    for (const casilla of casillasMarcadas) {
      casilla.parentElement.remove(); // Se eliminan
    }
    error.classList.add("d-none"); // Se oculta el aviso de error
    console.log("Borrar Completadas: Tareas borradas."); // Se deja rastro en consola
  }

  // Se actualiza el contador de las tareas según children.length
  totalTareas.textContent = listaTareas.children.length;
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // Ancho y alto de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  // Datos introducidos con textContent
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`; // Ventana

  // Bloque if que comprueba el ancho de la ventana y se edita #datoPunto según la cantidad de px.
  if (ancho >= 1400) {
    document.querySelector("#datoPunto").textContent = "xxl";
  } else if (ancho >= 1200) {
    document.querySelector("#datoPunto").textContent = "xl";
  } else if (ancho >= 992) {
    document.querySelector("#datoPunto").textContent = "lg";
  } else if (ancho >= 768) {
    document.querySelector("#datoPunto").textContent = "md";
  } else if (ancho >= 576) {
    document.querySelector("#datoPunto").textContent = "sm";
  } else {
    document.querySelector("#datoPunto").textContent = "xs";
  }

  // Ancho y alto de la pantalla
  const anchoPantalla = screen.width;
  const alturaPantalla = screen.height;

  // Datos introducidos con textContent
  document.querySelector("#datoPantalla").textContent = `${anchoPantalla} × ${alturaPantalla} px`; // Pantalla
  document.querySelector("#datoUrl").textContent = `${location.href}`; // URL
  document.querySelector("#datoIdioma").textContent = `${navigator.language}`; // Idioma
  
  // Se deja rastro en consola
  console.log("Datos Ventana: Datos mostrados.");
}
