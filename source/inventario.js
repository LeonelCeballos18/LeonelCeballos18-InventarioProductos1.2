class Inventario{
    constructor(){
        this.inventario = new Array();
    }

    agregar(producto, code){
        let index = 0;
        if(this.inventario.length < 1){
            this.inventario.push(producto);
            console.log(code);
        }else{
            for(let i = 0; i<this.inventario.length; i++){
                if(code > this.inventario[i].getCodigo()){
                    if(i < this.inventario.length-1){
                        if(code < this.inventario[i+1].getCodigo()){ // recorrer
                            this.inventario.push(producto);
                            this.posicionar(i);
                            break;
                        }
                    }else{
                        this.inventario.push(producto); //funciona bien
                        break;
                    }
                }else{
                    index = i;
                    this.inventario.push(producto); //recorrer
                    this.posicionar(index);
                    break;
                }
            }
        }
    }

    posicionar(index){
        let aux = this.inventario[this.inventario.length-1];
        for(let i=this.inventario.length-1; i>=index+1; i--){
            this.inventario[i] = this.inventario[i-1];
        }
        this.inventario[index+1] = aux;
    }

    eliminar(codigo){
        if(this.inventario.length>0){
            for(let i=0; i<this.inventario.length; i++){
                if(codigo == this.inventario[i].getCodigo()){
                    for(let x=i; x<this.inventario.length-1; x++){
                        this.inventario[i] = this.inventario[i+1];
                    }
                    this.inventario.pop();
                }
            }
        }else{
            this.inventario.pop();
        }
    }

    buscar(codigo){
        for(let i=0; i<this.inventario.length-1; i++){
            if(codigo == this.inventario[i].getCodigo()){
                //Regresar objeto
                return `Producto: ${this.inventario[i].getNombre()}, Cantidad: ${this.inventario[i].getCantidad()}, Precio: ${this.inventario[i].getPrecio()}$`;
            }
        }
        return "Producto no encontrado..";
    }

    listar(){
        let lista = "";
        this.inventario.forEach((inv, i) => {
            lista += `${this.inventario[i].getCodigo()}-. Producto: ${this.inventario[i].getNombre()}, Cantidad: ${this.inventario[i].getCantidad()},Precio: ${this.inventario[i].getPrecio()}$ <br>`;
        });
        return lista;
    }

    listadoInverso(){
        let lista = "";
        for(let i=this.inventario.length-1; i>=0; i--){
            lista += `${this.inventario[i].getCodigo()}-. Producto: ${this.inventario[i].getNombre()}, Cantidad: ${this.inventario[i].getCantidad()},Precio: ${this.inventario[i].getPrecio()}$/ <br>`;
        }
        return lista;
    }
}