class Inventario{
    constructor(){
        this.inventario = new Array();
    }

    agregar(producto, code){
        let index = this.inventario.length-1;
        if(this.inventario.length < 1){
            this.inventario.push(producto);
        }else{
            for(let i=0; i<this.inventario.length; i++){
                if(code < this.inventario[i].getCodigo() && i+1<this.inventario.length){
                    if(code > this.inventario[i-1].getCodigo()){
                        this.inventario.push(producto);
                        this.posicionar(i);
                        break;
                    }
                    break;
                }else if(code > this.inventario[i].getCodigo() && i+1==this.inventario.length){
                    this.inventario.push(producto);
                }else if(code < this.inventario[i].getCodigo() && i+1==this.inventario.length){
                    this.inventario.push(producto);
                    this.posicionar(i);
                    break;
                }
            }
        }
    }

    posicionar(index){
        let aux = this.inventario[this.inventario.length-1];
        for(let i=this.inventario.length-1; i>index; i--){
            this.inventario[i] = this.inventario[i-1];
        }
        this.inventario[index] = aux;
    }

    eliminar(codigo){
        let index = this.busquedaBinaria(codigo);
        if(index != -1){
            for(let x=index; x<this.inventario.length-1; x++){
                this.inventario[index] = this.inventario[index+1];
            }
            this.inventario.pop();
        }
    }

    buscar(codigo){
        if(this.busquedaBinaria(codigo) !== -1){
            return this.inventario[this.busquedaBinaria(codigo)];
        }
    }

    busquedaBinaria(codigo){
        let aux  = 0; 
        let aux2 = this.inventario.length - 1; 
        
        while(aux <= aux2){
            let mid = Math.floor((aux+aux2)/2);
            if(this.inventario[mid].getCodigo() === codigo)
                return mid;

            else if(this.inventario[mid].getCodigo() > codigo)
                aux2 = mid -1; 

            else
                aux = mid +1;

        }

        return -1; 
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