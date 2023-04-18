"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var product_service_1 = require("./product.service");
(0, product_service_1.addProduct)({
    title: 'Logitech G815',
    createdAt: new Date(2022, 5, 4),
    stock: 5,
    size: 'M'
});
(0, product_service_1.addProduct)({
    title: 'Logitech G305 LigthSpeed',
    createdAt: new Date(2020, 5, 4),
    stock: 15,
    size: 'M'
});
console.log(product_service_1.products);
var total = (0, product_service_1.caclStock)();
console.log("El total de productos ".concat(total));
