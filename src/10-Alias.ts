(()=>{
type UserId =  string | number | boolean; //Pascal case. creamos un alias type para crear nuestro propio tipo de variable.



let userId: string | number; //
//literal types
//creamos un conjunto acotado de opciones.
//Se usa para preveinir errores de incosistencia en el codigo.

type sizes = 'S' | 'M' | 'L' | 'L'| 'XL';
let shirtSize: sizes; //esta sintaxis solo me deja colocar los valores declarados en el conjunto.

shirtSize = 'M';
shirtSize = 'L';
shirtSize = 'XL';
function yourSizeOfTshirt (userSize: sizes){
console.log(`Tu medida de remera es:${userSize}`);


}
})();
