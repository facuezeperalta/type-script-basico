(()=>{
  // creo el array de productos
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
  type Product = { //creo un tipado para un objeto que se puede re usar en demás instancias.
    title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
  }
  // creo el array de productos
  const products: Product[] = [];

  const addProduct = (data:Product) => {
    products.push(data);
  }

  addProduct({
    title: 'Logitech G815',
    createdAt: new Date(2022,5,4),
    stock: 5,
    size: 'M'
  });
  console.log(products);
})();
