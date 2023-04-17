(()=>{
/*   let myNumber : number;
  let myString : string; */
  let myNull: null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null; //Angular cuando evalua componentes dinámicos y hasta que no carga el template no cambia de valor, y empieza por defecto en null.


  let myString: string | undefined = undefined;


  myString = 'facundo ezequiel peralta';

/*   function saludar (name:string){
    let hello = 'Hola ';
    if(name){
      hello += name;
    }else{
      hello += 'nobody';
    }
    console.log(hello);
  } */

  function hiv2 (name: string | null){
    let hello = 'Hola, lo paso a mayúsculas:  ';
    hello += name?.toUpperCase() || 'nobody';
    console.log(hello);
  }

  hiv2('ezequiel');
  hiv2(null);
})();
