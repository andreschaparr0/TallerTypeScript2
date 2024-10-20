import * as dataModule from './data.js';
var series = dataModule.series;
// Obtener la referencia a la tabla del DOM
var seriesTable = document.getElementById("series");
// Llamar a la función para mostrar las series
mostrarSeries(series);
// Llamar a la función para calcular el promedio
var promedio = calcularPromedioTemporadas(series);
// Obtener el elemento del párrafo en el DOM y actualizar su contenido
var promedioElement = document.getElementById("promedio");
promedioElement.innerText = "El promedio de temporadas es: ".concat(promedio.toFixed(2));
// Función que toma un array de series y las muestra en una tabla HTML
function mostrarSeries(seriess) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, seriess_1 = seriess; _i < seriess_1.length; _i++) {
        var serie = seriess_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "\n            <td><a href=\"#\" class=\"serie-nombre\" data-nombre=\"".concat(serie.nombre, "\" data-descripcion=\"").concat(serie.descripcion, "\" data-imagen=\"").concat(serie.imagen, "\">").concat(serie.nombre, "</a></td>\n            <td>").concat(serie.canal, "</td>\n            <td>").concat(serie.temporadas, "</td>\n        ");
        seriesTbody.appendChild(trElement);
    }
    // Agregar el cuerpo de la tabla a la tabla en el DOM
    seriesTable.appendChild(seriesTbody);
    // Agregar evento de clic a cada nombre de serie
    var serieLinks = document.querySelectorAll('.serie-nombre');
    serieLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            var target = event.target;
            var nombre = target.getAttribute('data-nombre');
            var descripcion = target.getAttribute('data-descripcion');
            var imagen = target.getAttribute('data-imagen');
            // Actualizar la imagen y descripción
            document.getElementById("serie-imagen").setAttribute("src", imagen);
            document.getElementById("serie-descripcion").innerText = descripcion;
        });
    });
    // Establecer la serie predeterminada al cargar
    if (seriess.length > 0) {
        var primeraSerie = seriess[0];
        document.getElementById("serie-imagen").setAttribute("src", primeraSerie.imagen);
        document.getElementById("serie-descripcion").innerText = primeraSerie.descripcion;
    }
}
// Función que calcula el promedio de temporadas
function calcularPromedioTemporadas(seriess) {
    if (seriess.length === 0)
        return 0; // Manejar el caso de una lista vacía
    var sumaTemporadas = 0;
    for (var _i = 0, seriess_2 = seriess; _i < seriess_2.length; _i++) {
        var serie = seriess_2[_i];
        sumaTemporadas += serie.temporadas; // Sumar temporadas de cada serie
    }
    return sumaTemporadas / seriess.length; // Calcular y retornar el promedio
}
