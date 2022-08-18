

    const productos = [
        {id:1, nombre:"Monitor Gaming",  descripcion:"Monitor de 144hz, 24 pulgadas, ultra hd, 4k", imagen:"monitor.png", categoria:1, precio:35000},
        {id:2, nombre:"Procesador amd", descripcion:"Ryzen 5 5600 4.2 Ghz AM4 ", imagen:"procesador.png", categoria:2, precio:38000},
        {id:3, nombre:"RAM HYPERX",  descripcion:" Memoria 16GB DDR4 3200", imagen:"ram.png", categoria:3, precio:15000},
        {id:4, nombre:"GRAFICA MSI",  descripcion:"MSI GEFORCE RTX 3090 VENTUS", imagen:"grafica.png", categoria:4, precio:340000},
        {id:5, nombre:"Silla Gaming", descripcion:"Silla soul, reclinable, almohadones, apoya brazos", imagen:"sillasoul.png", categoria:5, precio:65000},
        {id:6, nombre:"Gabinete",  descripcion:"Gabinete mediano, rgb", imagen:"gabinete.png", categoria:6, precio:25000},
        {id:7, nombre:"Fuente EVGA", descripcion:"Fuente 500w plus white", imagen:"fuente.png", categoria:7, precio:13000},
        {id:8, nombre:"Placa madre", descripcion:"placa asus tuf gaming, a520-m plus", imagen:"mother.png", categoria:8, precio:15000},
        {id:9, nombre:"Combo Perifericos", descripcion:"Mouse gaming ryzer, aurculares gaming ryzer 7.1, teclado mecanico ryzer", imagen:"peri.png", categoria:9, precio:33000},
        {id:10, nombre:"Monitor Tuf Gaming",  descripcion:"Monitor de 144hz, 24 pulgadas, ultra hd, 4k", imagen:"monitor2.png", categoria:1, precio:60000},
        {id:11, nombre:"Monitor ASUS Gaming",  descripcion:"Monitor de 240hz, 24 pulgadas, ultra hd, 4k", imagen:"monitor3.png", categoria:1, precio:75000},
        {id:12, nombre:"RAM XLR8",  descripcion:" Memoria 16GB DDR4 2400", imagen:"ram3.png", categoria:3, precio:11000},
        {id:13, nombre:"RAM CORSAIR",  descripcion:" Memoria 32GB DDR4 3200", imagen:"ram2.png", categoria:3, precio:27000},
        {id:14, nombre:"GRAFICA GIGABYTE",  descripcion:"GEFORCE GTX 1660 ", imagen:"grafica3.png", categoria:4, precio:84000},
        {id:15, nombre:"GRAFICA EVGA",  descripcion:"GEFORCE RTX 3090", imagen:"grafica2.png", categoria:4, precio:320000},
        {id:16, nombre:"Gabinete Gaming",  descripcion:"Gabinete grande, rgb", imagen:"gabinete2.png", categoria:6, precio:42000},
        {id:17, nombre:"Gabinete Gaming X",  descripcion:"Gabinete chico, rgb", imagen:"gabinete3.png", categoria:6, precio:25000},
        {id:18, nombre:"Fuente Corsair", descripcion:"450w plus white", imagen:"fuente2.png", categoria:7, precio:23000},
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