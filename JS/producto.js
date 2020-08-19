var productos = [
    {
        id:1,
        nombre: "harina",
        precioUnitario: 35,
        cantidad: 9
    },
    {
        id:2,
        nombre: "pan",
        precioUnitario: 25,
        cantidad: 120
    },
    {
        id:3,
        nombre: "papa",
        precioUnitario: 52,
        cantidad: 20
    },
    {
        id:4,
        nombre: "palta",
        precioUnitario: 55,
        cantidad: 23
    },
    {
        id:5,
        nombre: "fideos",
        precioUnitario: 85,
        cantidad: 58
    },
    {
        id:6,
        nombre: "aceite",
        precioUnitario: 350,
        cantidad: 85
    },
    {
        id:7,
        nombre: "sopa",
        precioUnitario: 86,
        cantidad: 12
    },
    {
        id:8,
        nombre: "mermelada",
        precioUnitario: 108,
        cantidad: 58
    },
    {
        id:9,
        nombre: "porotos",
        precioUnitario: 69,
        cantidad: 74
    },
    {
        id:10,
        nombre: "lentejas",
        precioUnitario: 85,
        cantidad: 14
    },
    {
        id:11,
        nombre: "mandarina",
        precioUnitario: 43,
        cantidad: 86
    },
    {
        id:12,
        nombre: "banana",
        precioUnitario: 79,
        cantidad: 111
    },
    {
        id:13,
        nombre: "leche de almendras",
        precioUnitario: 145,
        cantidad: 54
    },
    {
        id:14,
        nombre: "papel higienico",
        precioUnitario: 147,
        cantidad: 1025
    },
    {
        id:15,
        nombre: "lavandina",
        precioUnitario: 55,
        cantidad: 95
    },
    {
        id:16,
        nombre: "alcohol en gel",
        precioUnitario: 123,
        cantidad: 62
    },
    {
        id:17,
        nombre: "shampoo",
        precioUnitario: 400,
        cantidad: 41
    },
    {
        id:18,
        nombre: "arroz",
        precioUnitario: 66,
        cantidad: 100
    },
    {
        id:19,
        nombre: "harina",
        precioUnitario: 35,
        cantidad: 46
    },
    {
        id:20,
        nombre: "salsa de tomate",
        precioUnitario: 35,
        cantidad: 35
    },
];

var total = 0;

//Escribo el nombre de la empresa en la pagina
var tituloElemento = document.querySelector('h1');
tituloElemento.innerHTML = 'Supermercado Argento';

//Toma los productos del vector y los va poniendo en fila en la pagina
//creando elementos 
function crearElementoTabla(producto){
     //Nombre
     var tdNombre = document.createElement('td');
     var txtNombre = document.createTextNode(producto.nombre);
     tdNombre.appendChild(txtNombre);
    //Precio
    var tdPrecio = document.createElement('td');
    var txtPrecio = document.createTextNode(producto.precioUnitario);
    tdPrecio.appendChild(txtPrecio);   
     //Cantidad
    var tdCantidad = document.createElement('td');
    var txtCantidad = document.createElement('input');
    tdCantidad.appendChild(txtCantidad);  
    //Boton
    var tdBoton = document.createElement('td');
    var btnCompra = document.createElement('button');
    var txtBoton = document.createTextNode("Comprar");     
    
    // tdNombre.addEventListener("click", agregarCarrito);    
    btnCompra.appendChild(txtBoton);
    btnCompra.addEventListener("click", agregarCarrito);
    btnCompra.setAttribute('id', producto.id);
    btnCompra.className = "btn btn-secondary";
    tdBoton.appendChild(btnCompra);  
      //Creo el tr
    var tr = document.createElement('tr');
    tr.appendChild(tdNombre);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdCantidad);
    tr.appendChild(tdBoton);    
    var tbody = document.querySelector('#detalleLista'); 
    tbody.appendChild(tr);
}
//
function verificarCarrito(productoElegido){
    //FALTA TERMINAR
    var tabla = document.getElementById('detalleCarrito').getElementsByTagName('tr').Array;
    console.log(tabla);
    
}
function agregarCarrito(e){
    //busca al nodo hermano previo para ver la cantidad a comprar
    var input = e.target.parentNode.previousElementSibling.firstChild;
    
    var siEsta = verificarCarrito(e.target.id);
    
    
    //definimos las variables para guarda el nombre y precio   
    var elNombre ="";
    var elPU = "";
    //buscamos a traves del id del target el producto con ese id
    indice =  productos.findIndex(item => item.id == e.target.id);

    //Asignamos el nombre y precio encontrado a la variable
    elNombre = productos[indice].nombre;
    elPU = productos[indice].precioUnitario;
    elStock = productos[indice].cantidad;
    if (input.value <= elStock){
         // Definimos columna Nombre  
    var tdNombre = document.createElement('td');
    var txtNombre = document.createTextNode(elNombre);
    tdNombre.appendChild(txtNombre);
   //Precio
   var tdPrecio = document.createElement('td');
   var txtPrecio = document.createTextNode(elPU);
   tdPrecio.appendChild(txtPrecio);   
    //Cantidad
   var tdCantidad = document.createElement('td');
    var txtCantidad = document.createTextNode(input.value);
  
   tdCantidad.appendChild(txtCantidad);  
   //Boton
   var tdBoton = document.createElement('td');
   var btnCompra = document.createElement('button');
   var txtBoton = document.createTextNode("Borrar");    
    
   btnCompra.addEventListener("click", borrar);  
   btnCompra.className = "btn btn-secondary";
   btnCompra.appendChild(txtBoton);
   tdBoton.appendChild(btnCompra);  
   //Crear td de total
   var tdTotal = document.createElement('td');
   var txtTotal = document.createTextNode(input.value * elPU);
   tdTotal.appendChild(txtTotal);
     //Creo el tr
   var tr = document.createElement('tr');
   tr.appendChild(tdNombre);
    tr.appendChild(tdCantidad);
    tr.appendChild(tdPrecio);
    tr.appendChild(tdTotal);
   tr.appendChild(tdBoton);    
   //Asignar la fila a tbody de la tabla
   var tbody = document.querySelector('#detalleCarrito'); 
   tbody.appendChild(tr);
   //voy calculando total 
   total = input.value * elPU + total;
  //limpio la casilla de cantidad a comprar
  input.value ="";
 }
 else{
     texto = "No hay stock suficiente para esa cantidad";
     mensaje(texto);
     input.value ="";
 }

}
productos.forEach(item => {
    crearElementoTabla(item);
});
function calcular(){
    suma = document.querySelector("#suma");
    suma.innerHTML = total;
    
}
//defino la funcion borrar
function borrar(e){
    //buscamos el array de columnas del listado del carrito 
    var cells = Array.prototype.slice.call(document.getElementById("tablaCarro").getElementsByTagName("td"));
    //guardamos el valor de cantidad y producto encontrado en a fila antes de eliminar
    var cantidad = cells[1].innerHTML;
    var prod = cells[0].innerHTML;
    var pu = cells[2].innerHTML;

    //llama a la funcion mensaje para mostrar que se eliminara el producto 
    var texto = "Sacando el producto del carrito ->"+cantidad+" unidades de"+ prod  ;    
    //muestro mensaje
   mensaje(texto);
    //descontado del total
    total = total - cantidad * pu;     
    //Elimina la fila
    event.preventDefault();
    this.closest('tr').remove();  
    //actualiza el total mostrado
     calcular();
 }
//defino la funcion mensajes


function mensaje(mje){
    //creo un div para contener el mensaje
    const div = document.createElement('div');
    //le asigno una clase para su visualizacion
    div.className = `alerta alert alert-warning mensaje`;
    //le agrego un mensaje
    div.appendChild(document.createTextNode(mje));
    //identifico y asigno  el objeto contenenedor del div
    const contenedor = document.querySelector('.contenedor');
    //identifico y asigno el objeto para posicionar el mensaje encima del mismo
    const areaSig = document.querySelector('#card'); 
    //
    //agregar el div creado al elemento contenedor
    contenedor.insertBefore(div, areaSig);
    // Remover el mensaje de alerta
    //quitar el elemento despues de 2 segundos
    setTimeout(function() {
        document.querySelector('.alerta').remove();
    }, 2000);
    
}




