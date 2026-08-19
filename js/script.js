const botones = document.querySelectorAll(".servicio-boton");

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    const contenido = this.nextElementSibling;

    contenido.classList.toggle("abierto");
  });
}

const resenas = [
  {
    texto: "Excelente atención.",
    autor: "Cliente de Gomería Bella Unión",
    estrellas: 5,
  },
  {
    texto: "Atención rápida y precio acorde al servicio prestado.",
    autor: "Cliente de Gomería Bella Unión",
    estrellas: 5,
  },
  {
    texto: "Muy buena atención. Rápido y amable.",
    autor: "Cliente de Gomería Bella Unión",
    estrellas: 5,
  },
  {
    texto: "Excelente atención, rápido y con servicio a domicilio.",
    autor: "Cliente de Gomería Bella Unión",
    estrellas: 5,
  },
];

let resenaActual = 0;

const texto = document.getElementById("resena-texto");
const autor = document.getElementById("resena-autor");
const estrellas = document.getElementById("resena-estrellas");
const contenedorResena = document.getElementById("resena-contenedor");

function mostrarResena() {
  texto.textContent = resenas[resenaActual].texto;
  autor.textContent = resenas[resenaActual].autor;
  estrellas.textContent = "★".repeat(resenas[resenaActual].estrellas);

  contenedorResena.classList.remove("cambiando");
  void contenedorResena.offsetWidth;
  contenedorResena.classList.add("cambiando");
}

const siguiente = document.getElementById("resena-siguiente");
siguiente.addEventListener("click", function () {
  resenaActual++;
  if (resenaActual === resenas.length) {
    resenaActual = 0;
  }
  mostrarResena();
});

mostrarResena();

const anterior = document.getElementById("resena-anterior");
anterior.addEventListener("click", function () {
  resenaActual--;
  if (resenaActual < 0) {
    resenaActual = resenas.length - 1;
  }
  mostrarResena();
});

setInterval(function () {
  resenaActual++;
  if (resenaActual === resenas.length) {
    resenaActual = 0;
  }
  mostrarResena();
}, 3000);
