import {addProduct,caclStock,products} from './product.service';

addProduct({
  title: 'Logitech G815',
  createdAt: new Date(2022,5,4),
  stock: 5,
  size: 'M'
});

addProduct({
  title: 'Logitech G305 LigthSpeed',
  createdAt: new Date(2020,5,4),
  stock: 15,
  size: 'M'
});

console.log(products);
const total = caclStock();
console.log(`El total de productos ${total}`);
