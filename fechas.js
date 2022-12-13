/*Crea un archivo llamado fechas.js que contenga las siguientes líneas

- La fecha de hoy

- La fecha de tu nacimiento

- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

- Una variable que contenga el día de tu nacimiento

- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

- Una variable que contenga el año de tu nacimiento (con 4 dígitos)*/

const hoy= new Date();
console.log(hoy);

const nacimiento=new Date(1985,2,11)
console.log(nacimiento);

const verifica = hoy>nacimiento;
console.log(verifica);

const dia_nacimiento=nacimiento.getDay()
console.log(dia_nacimiento);

const mes_nacimiento=nacimiento.getMonth()
console.log(mes_nacimiento);

const anyo_nacimiento=nacimiento.getFullYear()
console.log(anyo_nacimiento);

