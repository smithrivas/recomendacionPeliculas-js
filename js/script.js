let edad = document.getElementById("edad");
let recomendacion = document.getElementById("recomendacion");
let recomendacion2 = document.getElementById("recomendacion2");
let recomendacion3 = document.getElementById("recomendacion3");
let tituloRecomendación = document.getElementById("tituloRecomendación");

function reiniciar() {
  recomendacion.textContent = "";
  recomendacion2.textContent = "";
  recomendacion3.textContent = "";
  tituloRecomendación.textContent = "";
  edad.value = "";
}

function filtro(genero) {
  if (edad.value < 1 || edad.value == "") {
    tituloRecomendación.textContent = "";
    alert("Por favor ingresa tu edad.");
    return;
  }

  switch (genero) {
    case "comedia":
      recomendacionTitulo();
      comedia();
      break;
    case "crimen":
      crimen();
      break;
    case "drama":
      drama();
      break;
    case "musical":
      musical();
      break;
  }
}

function recomendacionTitulo() {
  tituloRecomendación.textContent = "Peliculas recomendadas";
}

function comedia() {
  if (edad.value < 13) {
    recomendacion.textContent = "Back to the future (ATP)";
  } else if (edad.value >= 13 && edad.value < 16) {
    recomendacion.textContent = "Back to the future (ATP)";
    recomendacion2.textContent = "The truman show (+13)";
  } else {
    recomendacion.textContent = "Back to the future (ATP)";
    recomendacion2.textContent = "The truman show (+13)";
    recomendacion3.textContent = "The wolf of wall street (+16)";
  }
}

function crimen() {
  if (edad.value < 13) {
    recomendacion.textContent = "No hay peliculas para la edad seleccionada :(";
  } else if (edad.value >= 13 && edad.value < 16) {
    recomendacion.textContent = "";
    recomendacion2.textContent = "El secreto de sus ojos (+13)";
  } else {
    recomendacion2.textContent = "El secreto de sus ojos (+13)";
    recomendacion3.textContent = "The Godfather (+16)";
  }
}

function drama() {
  if (edad.value < 13) {
    recomendacion.textContent = "Casablanca (ATP)";
  } else if (edad.value >= 13 && edad.value < 16) {
    recomendacion.textContent = "Casablanca (ATP)";
    recomendacion2.textContent = "The Shawshank Redemption (+13)";
  } else {
    recomendacion.textContent = "Casablanca (ATP)";
    recomendacion2.textContent = "The Shawshank Redemption (+13)";
    recomendacion3.textContent = "Taxi Driver (+16)";
  }
}

function musical() {
  if (edad.value < 13) {
    recomendacion.textContent = "La La Land (ATP)";
  } else if (edad.value >= 13 && edad.value < 16) {
    recomendacion.textContent = "La La Land (ATP)";
    recomendacion2.textContent = "Los Miserables (+13)";
  } else {
    recomendacion.textContent = "La La Land (ATP)";
    recomendacion2.textContent = "Los Miserables (+13)";
    recomendacion3.textContent = "The Rocky Horror Picture Show (+16)";
  }
}
