export var Canal;
(function (Canal) {
    Canal["AMC"] = "AMC";
    Canal["NETFLIX"] = "Netflix";
    Canal["HBO"] = "HBO";
    Canal["CBS"] = "CBS";
    Canal["BBC"] = "BBC";
    Canal["CARACOL"] = "Caracol";
    Canal["RCN"] = "RCN";
})(Canal || (Canal = {}));
var Serie = /** @class */ (function () {
    function Serie(nombre, descripcion, imagen, canal, temporadas, link) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.canal = canal;
        this.temporadas = temporadas;
        this.link = link;
    }
    return Serie;
}());
export { Serie };
