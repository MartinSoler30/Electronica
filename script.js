// ===============================
// MOSTRAR INFORMACIÓN DEL DIODO
// ===============================

function mostrarInfo() {

    const info = document.getElementById("infoDiodo");

    if (info.style.display === "none") {

        info.style.display = "block";

    } else {

        info.style.display = "none";
    }
}

// ===============================
// CAMBIAR COLOR DEL TÍTULO
// ===============================

function cambiarColorTitulo() {

    const titulos = document.querySelectorAll("h2");

    titulos.forEach((titulo) => {

        titulo.style.color = "#ff5f1f";
    });
}

// ===============================
// EFECTO AL HACER SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.backgroundColor = "rgba(20,20,20,0.9)";
        navbar.style.backdropFilter = "blur(10px)";

    } else {

        navbar.style.backgroundColor = "rgba(89,89,89,0.2)";
    }
});

// ===============================
// MENSAJE DE BIENVENIDA
// ===============================

window.addEventListener("load", () => {

    console.log("Página de Electrónica cargada correctamente");

});

// ===============================
// EFECTO HOVER EN ARTÍCULOS
// ===============================

const articulos = document.querySelectorAll("article");

articulos.forEach((articulo) => {

    articulo.addEventListener("mouseenter", () => {

        articulo.style.transform = "scale(1.02)";
        articulo.style.transition = "0.3s ease";

    });

    articulo.addEventListener("mouseleave", () => {

        articulo.style.transform = "scale(1)";
    });

});
// ===============================
// ABRIR PANEL INTERACTIVO
// ===============================

function abrirPanel() {

    const panel = document.getElementById("panelInteractivo");

    if(panel.style.display === "none") {

        panel.style.display = "block";

    } else {

        panel.style.display = "none";
    }
}

// ===============================
// CONTROLAR BRILLO
// ===============================

function cambiarBrillo() {

    const slider = document.getElementById("sliderBrillo");

    const bombillo = document.getElementById("bombillo");

    const valor = document.getElementById("valorBrillo");

    let intensidad = slider.value;

    bombillo.style.opacity = intensidad / 100;

    bombillo.style.boxShadow =
        `0 0 ${intensidad}px yellow`;

    valor.innerHTML =
        "Brillo: " + intensidad + "%";
}