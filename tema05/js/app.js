/*
  Tarea 5 · DWEC · [Tu nombre y apellidos]
  Manipular el DOM.

  Cómo usar esta plantilla:
  · Desde este tema, el JavaScript escribe en la página: selecciona elementos y cambia su texto, sus clases...
  · Hay una función por botón. Escribe tu código donde pone TODO y, cuando termines, borra el TODO.
  · app.js se carga en el <head> con defer: cuando se ejecuta, el HTML ya está leído.
  · Selecciona con document.querySelector() / querySelectorAll() (o getElementById).
  · Texto con textContent; aspecto con classList y las clases de Bootstrap (no con style).
  · Cada función deja también su rastro en la consola con console.log().
  · let y const, nunca var. Compara siempre con ===. Comillas rectas.
*/

console.log("app.js cargado");


// ============================================================
// Ejercicio 1 · Selectores y modificación
// Un selector distinto para cada párrafo
// ============================================================

function aplicarCambios() {
  // El modelo: el primer párrafo, por su id
  const primero = document.getElementById("primero");
  primero.textContent = "Texto modificado por JavaScript";

  const segundo = document.querySelector(".segundo");
  segundo.classList.add("bg-warning-subtle");

  const tercero = document.querySelectorAll("#contenido p")[2];
  tercero.classList.add("text-danger");

  console.log("Aplicar Cambios: Cambios Aplicados.");
}


// ============================================================
// Ejercicio 2 · Crear y eliminar nodos
// ============================================================

function anadirParrafo() {

  const parrafoNuevo = document.createElement("p");
  const contenido = document.querySelector("#contenido");
  parrafoNuevo.textContent = `Añadir Párrafo: Párrafo nuevo ${contenido.children.length}.`;
  contenido.append(parrafoNuevo);
  // TODO: crea un <p> con document.createElement().
  // TODO: dale el texto «Párrafo nuevo N», donde N es el número de párrafos que habrá en #contenido
  //       (pista: document.querySelector("#contenido").children.length).
  // TODO: cuélgalo al final de #contenido con append().
}

function eliminarUltimo() {
  const contenido = document.querySelector("#contenido");
  const ultimoHijo = contenido.lastElementChild;
  const aviso = document.getElementById("aviso2");

  if (ultimoHijo === null){
    aviso.classList.remove("d-none");
    console.warn("Eliminar Último: Ya no hay más párrafos.");
  } else {
    ultimoHijo.remove();
    console.log("Eliminar Último: Último párrafo borrado.");
  }
  // TODO: busca el último párrafo de #contenido (lastElementChild).
  // TODO: si es null (ya no queda ninguno), muestra el aviso #aviso2 quitándole la clase "d-none".
  //       Si no, bórralo con remove().
}


// ============================================================
// Ejercicio 3 · Resaltar al pasar el ratón
// ============================================================

function activarResaltado() {
  const parrafos = document.querySelectorAll("#contenido p");

  for (const parrafo of parrafos) {
    // addEventListener("mouseenter", ...) ejecuta la función cuando el ratón entra en el párrafo.
    // Los eventos los veremos a fondo en el tema 9: de momento, copia este modelo.
    parrafo.addEventListener("mouseenter", function () {
      parrafo.classList.add("bg-body-secondary");
    });
    parrafo.addEventListener("mouseleave", function () {
      parrafo.classList.remove("bg-body-secondary");
    });

    // TODO: lo mismo con "mouseleave" (cuando el ratón sale) para quitar la clase.
  }

  console.log(`Activar Resaltado: Se ha activado el resaltado en ${parrafos.length} párrafos.`);

  // TODO: un console.log() que diga en cuántos párrafos se ha activado (parrafos.length).
}


// ============================================================
// Ejercicio 4 · Cambiar el primer párrafo
// ============================================================

function cambiarTexto() {
  const nuevoTexto = document.getElementById("nuevoTexto");
  const textoLimpio = nuevoTexto.value.trim();
  const error = getElementById("error4");
  const primerParrafo = querySelectorAll("#contenido p")[0];
  if (textoLimpio === ""){
    error.classList.remove("d-none");
    console.warn("Cambiar Texto: No se ha introducido texto en input.");
  } else {
    primerParrafo.textContent = textoLimpio;
    error.classList.add("d-none");
    console.log("Cambiar Texto: Primer párrafo modificado.");
  }
  // TODO: lee lo escrito en #nuevoTexto con value y quítale los espacios de los extremos con trim().
  // TODO: si está vacío, muestra el error #error4 (quítale "d-none") y no cambies nada.
  // TODO: si no, pon ese texto en el primer párrafo de #contenido con textContent y oculta el error.
}

function cambiarConHtml() {
  const nuevoTexto = document.getElementById("nuevoTexto");
  const textoLimpio = nuevoTexto.value.trim();
  const error = getElementById("error4");
  const primerParrafo = querySelectorAll("#contenido p")[0];
  if (textoLimpio === ""){
    error.classList.remove("d-none");
    console.warn("Cambiar HTML: No se ha introducido texto en input.");
  } else {
    primerParrafo.innerHTML = textoLimpio;
    error.classList.add("d-none");
    console.log("Cambiar HTML: Primer párrafo modificado.");
  }
  // TODO: lo mismo que cambiarTexto(), pero con innerHTML.
  //       Prueba las dos con <b>hola</b> y explica en el README qué diferencia ves y por qué es peligroso.
}


// ============================================================
// Ejercicio 5 · Lista de tareas
// ============================================================

function anadirTarea() {
  const tareaInput = document.getElementById("tareaInput");
  const textoLimpio = tareaInput.value.trim();
  const error = document.getElementById("error5");
  const listaTareas = document.getElementById("listaTareas");
  const totalTareas = document.getElementById("totalTareas");
  if (textoLimpio === ""){
    error.classList.remove("d-none");
    console.warn("Añadir Tarea: No se ha introducido texto en input.");
  } else {
    const elementoLista = document.createElement("li");
    const casillaVerificacion = document.createElement("input");
    const span = document.createElement("span");
    casillaVerificacion.setAttribute("type","checkbox");
    casillaVerificacion.setAttribute("class","form-check-input");
    casillaVerificacion.value = "";
    elementoLista.setAttribute("class","list-group-item");
    span.textContent = textoLimpio;
    elementoLista.append(casillaVerificacion);
    elementoLista.append(span);
    listaTareas.append(elementoLista);
    error.classList.add("d-none");
    console.log();
  }

  totalTareas.textContent = listaTareas.children.length;

  // TODO: lee el texto de #tareaInput (value + trim). Si está vacío, muestra un mensaje en #error5.
  // TODO: si no, crea un <li class="list-group-item"> con dos elementos dentro:
  //         · un <input> de tipo "checkbox" con la clase "form-check-input",
  //         · un <span> con el texto de la tarea (textContent).
  //       Cuelga el <li> de #listaTareas y vacía la casilla (value = "").
  // TODO: actualiza #totalTareas con el número de <li> que hay en la lista.
}

function borrarCompletadas() {
  const casillasMarcadas = document.querySelectorAll("#listaTareas input:checked");
  const error = document.getElementById("error5");
  const listaTareas = document.getElementById("listaTareas");
  const totalTareas = document.getElementById("totalTareas");
  if (casillasMarcadas === null){
    error.classList.remove("d-none");
  } else {
    for (const casilla of casillasMarcadas) {
      casilla.parentElement.remove();
    }
    error.classList.add("d-none");
  }

  totalTareas.textContent = listaTareas.children.length;
  // TODO: selecciona las casillas marcadas: document.querySelectorAll("#listaTareas input:checked").
  // TODO: si no hay ninguna, avisa en #error5. Si hay, recórrelas con for…of y borra el <li> de cada una
  //       (el <li> es el padre de la casilla: parentElement).
  // TODO: actualiza #totalTareas.
}


// ============================================================
// Ejercicio 6 · Datos de la ventana (BOM)
// ============================================================

function verDatosVentana() {
  // El modelo: el tamaño de la ventana
  const ancho = window.innerWidth;
  const alto = window.innerHeight;
  document.querySelector("#datoVentana").textContent = `${ancho} × ${alto} px`;

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

  const anchoPantalla = screen.width;
  const alturaPantalla = screen.height;
  document.querySelector("#datoPantalla").textContent = `${anchoPantalla} × ${alturaPantalla} px`;
  document.querySelector("#datoUrl").textContent = `${location.href}`;
  document.querySelector("#datoIdioma").textContent = `${navigator.language}`;

  // TODO: con if / else if, el punto de corte de Bootstrap según el ancho: xs (< 576), sm (≥ 576), md (≥ 768),
  //       lg (≥ 992), xl (≥ 1200) y xxl (≥ 1400). Escríbelo en #datoPunto.
  // TODO: el tamaño de la pantalla (screen.width y screen.height) en #datoPantalla.
  // TODO: la URL (location.href) en #datoUrl y el idioma del navegador (navigator.language) en #datoIdioma.
}
