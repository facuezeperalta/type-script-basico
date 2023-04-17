(function () {
    var login = function (email, password) {
        console.log(email, password);
    };
    login('facundoperaltaezequiel@gmail.com', 5155616); // esto es con parametros
    //ahora con objetos
    var loginV2 = function (data) {
        console.log(data.email, data.password);
    };
    loginV2({
        email: 'facundoperaltaezequiel@gmail.com',
        password: 'Hola123'
    });
    // otro objeto mas grande
    //array de productos.
    var products = [];
    var addProduct = function (data) {
        products.push(data);
    };
    addProduct({
        title: 'Samsung s23 Ultra',
        createdAt: new Date(1995, 19, 5),
        stock: 5,
    });
    console.log(products);
})();
