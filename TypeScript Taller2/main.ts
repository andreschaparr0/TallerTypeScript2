import { Serie, Canal } from "./serie.js";
import * as dataModule from './data.js';
let series = dataModule.series;

// Obtener la referencia a la tabla del DOM
let seriesTable: HTMLElement = document.getElementById("series")!;

// Llamar a la función para mostrar las series
mostrarSeries(series);

// Llamar a la función para calcular el promedio
const promedio = calcularPromedioTemporadas(series);

// Obtener el elemento del párrafo en el DOM y actualizar su contenido
const promedioElement: HTMLElement = document.getElementById("promedio")!;
promedioElement.innerText = `El promedio de temporadas es: ${promedio.toFixed(2)}`;

// Función que toma un array de series y las muestra en una tabla HTML
function mostrarSeries(seriess: Serie[]): void {
    let seriesTbody: HTMLElement = document.createElement("tbody");

    for (let serie of seriess) {
        let trElement: HTMLElement = document.createElement("tr");
        trElement.innerHTML = `
            <td><a href="#" class="serie-nombre" data-nombre="${serie.nombre}" data-descripcion="${serie.descripcion}" data-imagen="${serie.imagen}">${serie.nombre}</a></td>
            <td>${serie.canal}</td>
            <td>${serie.temporadas}</td>
        `;
        seriesTbody.appendChild(trElement);
    }

    // Agregar el cuerpo de la tabla a la tabla en el DOM
    seriesTable.appendChild(seriesTbody);

    // Agregar evento de clic a cada nombre de serie
    const serieLinks = document.querySelectorAll('.serie-nombre');
    serieLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
            const target = event.target as HTMLAnchorElement;
            const nombre = target.getAttribute('data-nombre');
            const descripcion = target.getAttribute('data-descripcion');
            const imagen = target.getAttribute('data-imagen');

            // Actualizar la imagen y descripción
            document.getElementById("serie-imagen")!.setAttribute("src", imagen!);
            document.getElementById("serie-descripcion")!.innerText = descripcion!;
        });
    });

    // Establecer la serie predeterminada al cargar
    if (seriess.length > 0) {
        const primeraSerie = seriess[0];
        document.getElementById("serie-imagen")!.setAttribute("src", primeraSerie.imagen);
        document.getElementById("serie-descripcion")!.innerText = primeraSerie.descripcion;
    }
}

// Función que calcula el promedio de temporadas
function calcularPromedioTemporadas(seriess: Serie[]): number {
    if (seriess.length === 0) return 0; // Manejar el caso de una lista vacía

    let sumaTemporadas: number = 0;

    for (let serie of seriess) {
        sumaTemporadas += serie.temporadas; // Sumar temporadas de cada serie
    }

    return sumaTemporadas / seriess.length; // Calcular y retornar el promedio
}
