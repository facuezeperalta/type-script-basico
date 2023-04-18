//datefns
import {subDays,format} from 'date-fns';

const date = new Date(1995,5,19);
const rta = subDays(date,1);
const convertedDate = format(rta,'YYYY-MM-DD');
console.log(convertedDate);


let myVar: number | string;
myVar = 5;
myVar = 'Hola';
