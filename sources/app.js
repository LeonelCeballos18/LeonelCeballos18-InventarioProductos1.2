let inventory = new Inventario();

//agregar producto

const btnAgregar = document.getElementById('add');
btnAgregar.addEventListener('click', ()=>{
    let code = document.getElementById('codigo').value;
    let name = document.getElementById('nombre').value;
    let amount = document.getElementById('cantidad').value;
    let price = document.getElementById('costo').value;
    let product = new Producto(code, name, amount, price);
    inventory.agregar(product, code);
    alert("Producto agregado");
})

const btnEliminar = document.getElementById('delete');
btnEliminar.addEventListener('click', ()=>{
    let code = document.getElementById('eliminacion').value;
    inventory.eliminar(code);
    alert("Producto eliminado");
})

const btnBuscar = document.getElementById('search');
btnBuscar.addEventListener('click', ()=>{
    let code = document.getElementById('busqueda').value;
    let busqueda = inventory.buscar(code);
    if(busqueda !== null) {
		document.getElementById('resB').innerHTML = busqueda.info();
	} else {
		document.getElementById('resB').innerHTML = "<p>Producto no encontrado.</p>";
	}
})

const btnListar = document.getElementById('listar');
btnListar.addEventListener('click', ()=>{
    document.getElementById('resLis').innerHTML +=  inventory.listar();
})

const btnListarInvertido = document.getElementById('listarIn');
btnListarInvertido.addEventListener('click', ()=>{
    document.getElementById('resLisIn').innerHTML +=  inventory.listadoInverso();
})