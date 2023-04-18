import {Product , Sizes} from './product.model'

export const products: Product[] = [];

export let myName:(string | null) = null;

`const rta =1 +'1'`;
let myProductPrice = 100;

let mixed:(number | boolean) [];

export const addProduct = (data:Product) => {
  products.push(data);
}

export const caclStock = ():number => {
  let total  = 0;
  products.forEach((item) =>{
    total += item.stock;
  } );
  return total;
}
