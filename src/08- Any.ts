(()=>{
  let myDinamicVar : any; // se usa para poder asignar CUALQUIER valor, seria como volver a JS.

  myDinamicVar = 'Hola';
  const rta = (myDinamicVar as string).toLowerCase(); //fuerzo a que sea String, mediante un casteo.

  myDinamicVar = 1212;
  const rta2 = (<number>myDinamicVar).toFixed();//segunda forma de hacer cast de una variable.



})();
