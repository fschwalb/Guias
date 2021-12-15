/* ============================================================================================ */
/*                                      ARRAY METHODS                                           */
/* ============================================================================================ */



// .includes y .some


const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ];

const carrito = [

    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},

];


// Comprobar si un valor existe en un array, de forma manual


meses.forEach( mes => {

    if( mes === 'Enero' ) {
        console.log( 'Enero si existe...' )
    }

})


// O también se puede utilizar el Array Method de .includes ( devuelve true o false )


const resultado = meses.includes( 'Enero' ); 
console.log( resultado );


// En el caso de un arreglo de objetos .includes no es la mejor opción, podrías utilizar uno llamado .some


const existe = carrito.some( producto => producto.nombre === 'Celular' ); // Return implícito
console.log( existe );


// .some en un arreglo tradicional


const existe2 = meses.some( mes => mes === 'Febrero' );
console.log( existe2 );


// .some soporta un arreglo de índices o también un arreglo de objetos
// .includes solamente soporta un arreglo de índices


/* ========================================================================== */


// findIndex
// Sólo va a encontrar el primer valor a buscar, si hay mas de uno devuelve el primero

const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ];

const carrito = [

    { producto: 'Monitor 20 Pulgadas', precio: 500 },
    { producto: 'Televisión 50 Pulgadas', precio: 700 },
    { producto: 'Tablet', precio: 300 },
    { producto: 'Audifonos', precio: 200 },
    { producto: 'Teclado', precio: 50 },
    { producto: 'Celular', precio: 500 },
    { producto: 'Bocinas', precio: 300 },
    { producto: 'Laptop', precio: 800 },

];


// Con un forEach, forma manual
// En un forEach, el segundo parámetro que se pasa es el índice del elemento


meses.forEach( ( mes, index ) => {
    
    if( mes === 'Abril' ) { // Si ponemos diciembre no lo va a encontrar
        console.log( `Encontrado en el índice ${index}` );
    }

});



// FindIndex dirá el índice, es decir la ubicación del elemento en el arreglo


const indice = meses.findIndex( mes => mes === 'Abril' ); // -1 quiere decir que no lo encontró
console.log( indice );


// Encontrar un índice de un arreglo de objetos


const indice = carrito.findIndex( producto => producto.precio === 100 );
console.log( indice );


/* ========================================================================== */


// .reduce

// Es una función reductora

//Toma una gran cantidad de datos y entregar un resultado

// Supongamos que tenemos un carrito de compras y queremos decirle al usuario cuanto es el total a pagar


const carrito = [

    { producto: 'Monitor 20 Pulgadas', precio: 500 },
    { producto: 'Televisión 50 Pulgadas', precio: 700 },
    { producto: 'Tablet', precio: 300 },
    { producto: 'Audifonos', precio: 200 },
    { producto: 'Teclado', precio: 50 },
    { producto: 'Celular', precio: 500 },
    { producto: 'Bocinas', precio: 300 },
    { producto: 'Laptop', precio: 800 },

];

// Con un forEach lo podrías hacer asi


let total = 0;
carrito.forEach( producto => total += producto.precio );

console.log( total );


// Podemos tenerlo todo en una sola linea con un .reduce
                            
                                // total, actual
let resultado = carrito.reduce( ( total, producto ) => total + producto.precio, 0 ); //0 es el inicio
console.log( resultado );


/* ========================================================================== */


// .filter

// Va a crearte un arreglo con la condición que se esté revisando en ese momento


const carrito = [

    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },

];

let resultado = carrito.filter( producto => producto.precio > 400 ); // Todos los mayores a 400 - añadir && producto.precio < 600
let resultado2 = carrito.filter( producto => producto.nombre === 'Celular' ); // Traerte el celular
let resultado3 = carrito.filter( producto => producto.nombre !== 'Laptop' ); // Todos EXCEPTO la laptop


console.log( resultado );
console.log( resultado2 );
console.log( resultado3 );


// .filter es el más útil y el más utilizado


/* ========================================================================== */


// .find

// Creará un arreglo nuevo en base al primer resultado que sea true...


const carrito = [

    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },

];


// con foreach


let resultado = '';

carrito.forEach( ( producto, index ) => {

    if( producto.nombre === 'Bocinas' ) {
        resultado = carrito[index]
    }

});

console.log(resultado);


// con .find


const resultado2 = carrito.find( producto => producto.nombre === 'Bocinas' );
console.log(resultado2);


/* ========================================================================== */


// .every

// Every es raro, ya que todos los elementos del arreglo deberán cumplir esa condición


const carrito = [

    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },

];


// con un foreach seria algo asi...


let cumple = true;

carrito.forEach( producto => {

    if( producto.precio > 700 ) {
        cumple = false;
        return
    }

})
console.log( cumple );


const resultado = carrito.every( producto => producto.precio < 1000 ); // Mil se cumple, 700 no...
console.log(resultado);


// Digamos q .every sería parecido al && ( "todos se deben cumplir" ) y .some al || ( "al menos uno se debe cumplir" )


/* ========================================================================== */


// .concat

// Para unir dos arrays


const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ];
const meses2 = [ 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];

const resultado = meses.concat( meses2 ); // Podemos utilizar , para concatenar más arrays

console.log( resultado );


// Existe otra forma... que es con rest/spread operator


const resultado2 = [ ...meses,...meses2 ]; // Hay que asegurarse que sean arrays cuando usamos spread operator
console.log( resultado2 )


// El rest operator es muy útil para crear un nuevo arreglo sin modificar el original...


const meses = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio' ];

const carrito = [

    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
    { nombre: 'Bocinas', precio: 300 },
    { nombre: 'Laptop', precio: 800 },

];


// Si tienes 2 arreglos los unimos, pero si tengo un arreglo y quiero añadir un elemento al final que es un string utilizaría


const meses2 = [ ...meses, 'Julio' ];

console.log( meses );
console.log( meses2 ); // Esto NO modifica el arreglo original como sí haría .push y eso es muy útil en un tipo de programación llamada funcional


// O al inicio... en lugar de utilizar unshift


const meses3 = [ 'Julio',...meses ]; 


// O tal vez añadir un objeto a un arreglo de objetos al final


const producto = { nombre: 'Disco Duro', precio: 300 };
const carrito2 = [ ...carrito, producto ];

console.log( carrito2 );


// o al inicio


const carrito3 = [ producto, ...carrito ];

console.log( carrito3 );
