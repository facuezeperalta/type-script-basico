
//definición de tipos
export type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export type Product = { //creo un tipado para un objeto que se puede re usar en demás instancias.
  title: string,
createdAt: Date,
stock: number,
size?: Sizes
}

//Uso la palabra export para indicar que es exportable y se pueden llamar desde otros archivos
