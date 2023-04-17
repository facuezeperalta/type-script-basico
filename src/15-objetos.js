(function () {
    // creo el array de productos
    var products = [];
    var addProduct = function (data) {
        products.push(data);
    };
    addProduct({
        title: 'Logitech G815',
        createdAt: new Date(2022, 5, 4),
        stock: 5,
        size: 'M'
    });
    console.log(products);
})();
