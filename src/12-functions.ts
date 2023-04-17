(()=>{
    type Sizes = 'S' | 'M' | 'L' | 'XL' | 'XXL';

    function createProductToJason(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes,
        ){
            return {
                title,
                createdAt,
                stock,
                size
            }
        }
        const product1 = createProductToJason('iPad',new Date(),50,'M');
        console.log(product1);
        console.log(product1.title);

    const createProductToJasonV2 = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes //Al poner el simbolo de interrogación se asume que sino se carga el size va a ir como undefined por defecto
    ) =>{
        return {
            title,
            createdAt,
            stock,
            size
        }
    }



})();
