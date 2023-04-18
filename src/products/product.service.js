"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.caclStock = exports.addProduct = exports.products = void 0;
exports.products = [];
var addProduct = function (data) {
    exports.products.push(data);
};
exports.addProduct = addProduct;
var caclStock = function () {
    var total = 0;
    exports.products.forEach(function (item) {
        total += item.stock;
    });
    return total;
};
exports.caclStock = caclStock;
