/* ============================================================================================ */
/*                                         FECHAS                                               */
/* ============================================================================================ */



// Date Object

// Las fechas son Objetos

// Formato MM/DD/AAAA

// const diaHoy = new Date('January 25 1985');
const diaHoy = new Date();

let valor;

valor = diaHoy;

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime(); // Milisegundos desde el 1 Enero 1970


// Los métodos GET sirven para obtener un valor

// Los métodos SET sirven para modificar un valor


valor = diaHoy.setFullYear(2010);



console.log( diaHoy );


/* ========================================================================== */


/*

new Date();

new Date().toLocaleString(); // '7/9/2021 14:35:47'

new Date().toLocaleTimeString(); // '14:36:04'

new Date().toLocaleDateString(); // '7/9/2021'

*/

const diaHoy = new Date();

moment.locale( 'es' );



console.log( moment().format('MMMM Do YYYY hh:mm:ss a') );


console.log( moment().format('LLLL', diaHoy) );


console.log( moment().add( 3, 'days' ).calendar() ); // Agregar días