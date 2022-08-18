function renderProductosCarrito() {
    let productos = obtenerProductosCarrito();
let contenido = `<p class="alert alert-danger text-center" role="alert">No se encontraron productos en el carrito</p>`;

   
if (productos.length > 0) {
    contenido = `<p class="text-end"><a href="#" class="btn btn-danger text-white" onclick="vaciarCarrito()" title="Vaciar Carrito">Vaciar Carrito <img src="imagenes/eliminar.png" width="24"></a></p>
    <table class="table">`;

   let total= 0

for (let producto of productos) {
 let precio = producto.precio * producto.cantidad;
    contenido +=  `<tr>
    <td> <img src="imagenes/${producto.imagen}" alt="${producto.nombre}" width="64"></td>
    <td class="align-middle">${producto.nombre} X ${productos.cantidad}</td>
    <td class="align-middle"><b>$${precio}</b></td>
    <td class="text-end"><a href="#" class="btn btn_violeta" onclick="eliminarCarrito(${producto.id})><img src="imagenes/eliminar.png" width="24"></a></p></td></tr>`;
    total += precio;
}

contenido += `<tr>
<td></td>
<td class="align-middle">Total a Pagar</td>
<td class="align-middle"><b>${total}</b></td>`


contenido += `</table>`;
}

document.getElementById("productos_carrito").innerHTML = contenido;
}  

actualizarBotonCarrito();
renderProductosCarrito();
