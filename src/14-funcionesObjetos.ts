(()=>{
  const login = (email: string, password: number) => {
    console.log(email, password);
  };
  login('facundoperaltaezequiel@gmail.com',5155616);// esto es con parametros
  type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';
  //ahora con objetos
  const loginV2 = (data: {
email:string,
password:string
  }) =>{
    console.log(data.email, data.password);

  };
loginV2({
  email: 'facundoperaltaezequiel@gmail.com',
  password: 'Hola123'
});

// otro objeto mas grande
//array de productos.
const products: any[] = [];

const addProduct = (data:{
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}) => {
  products.push(data);
}

addProduct({
  title: 'Samsung s23 Ultra',
  createdAt: new Date (1995,19,5),
  stock: 5,
});

console.log(products);
})();



