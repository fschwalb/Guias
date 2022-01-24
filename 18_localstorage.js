/* ============================================================================================ */
/*                                      LOCAL STORAGE                                           */
/* ============================================================================================ */



// Local/Session Storage

// Solo pueden almacenar Strings

// localStorage va a perdurar

// Para agregar elementos utilizamos localStorage.setItem


localStorage.setItem( 'nombre', 'Juan' );

const producto = {

    nombre : "Monitor 24 Pulgadas",
    precio : 300

}


// stringify convierte un Objeto a un String


const productoString = JSON.stringify( producto );
localStorage.setItem( 'producto', productoString );

const meses = [ 'Enero', 'Febrero', 'Marzo'];
localStorage.setItem( 'meses', JSON.stringify( meses ) );

// console.log( productoString );
// console.log( typeof productoString );


// sessionStorage se almacena hasta cerrar el browser


sessionStorage.setItem('nombre', 'Juan');


/* ========================================================================== */


// Obtener datos de localStorage

// Utilizamos localStorage.getItem


const nombre = localStorage.getItem( 'nombre' );

const productoJSON = localStorage.getItem( 'producto' );


// Convertir un String en un Objeto/Arreglo

console.log( JSON.parse( productoJSON ) );


const meses = localStorage.getItem( 'meses' );
const mesesArray = JSON.parse( meses );

console.log( JSON.parse( meses ) );


/* ========================================================================== */


// Eliminar elementos del localStorage

localStorage.removeItem( 'nombre' );


// Actualizar el registro


// const mesesArray = localStorage.getItem( 'meses' )

// O también

const mesesArray = JSON.parse ( localStorage.getItem( 'meses' ) );

console.log( mesesArray );

// También funcionan los Array Methods

mesesArray.push( 'Nuevo Mes' );

console.log( mesesArray );

localStorage.setItem( 'meses', JSON.stringify( mesesArray ) );


// Para eliminar todo

localStorage.clear();