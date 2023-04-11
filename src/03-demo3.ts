//se debe poner en una función anonima autoejecutada.Para evitar que choque con las variables declaradas en el otro archivo que tienen el mismo nombre.

(()=>{
  let myProductName= 'product 1';
  let productPrice = 450;

  myProductName.toLocaleLowerCase();
  productPrice.toFixed();
})();

