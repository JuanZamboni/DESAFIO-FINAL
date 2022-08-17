
const productos = [
    {id:1, nombre:"Monitor Gaming",  descripcion:"Monitor de 144hz, 24 pulgadas, ultra hd, 4k", imagen:"monitor.png", precio:35000},
    {id:2, nombre:"Procesador amd", descripcion:"Ryzen 5 5600 4.2 Ghz AM4 ", imagen:"procesador.png", precio:38000},
    {id:3, nombre:"RAM HYPERX",  descripcion:" Memoria 16GB DDR4 3200", imagen:"ram.png", precio:15000},
    {id:4, nombre:"GRAFICA MSI",  descripcion:"MSI GEFORCE RTX 3090 VENTUS", imagen:"grafica.png", precio:340000},
    {id:5, nombre:"Silla Gaming", descripcion:"Silla soul, reclinable, almohadones, apoya brazos", imagen:"sillasoul.png", precio:65000},
    {id:6, nombre:"Gabinete",  descripcion:"Gabinete mediano, rgb", imagen:"gabinete.png", precio:25000},
    {id:7, nombre:"Fuente EVGA", descripcion:"Fuente 500w plus white", imagen:"fuente.png", precio:13000},
    {id:8, nombre:"Placa madre", descripcion:"placa asus tuf gaming, a520-m plus", imagen:"mother.png", precio:15000},
    {id:9, nombre:"Combo Perifericos", descripcion:"Mouse gaming ryzer, aurculares gaming ryzer 7.1, teclado mecanico ryzer", imagen:"peri.png", precio:33000}
    
];

function obtenerProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];

}
function guardarProductosLS(productos) {
   localStorage.setItem("productos", JSON.stringify(productos));

}
function buscarProducto(id) {
    let productos = obtenerProductosLS();
    return productos.find(x => x.id == id);
}