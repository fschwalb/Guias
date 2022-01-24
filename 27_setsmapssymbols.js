/* ============================================================================================ */
/*                      Sets, Maps, Symbols, Iteradores y Generadores                           */
/* ============================================================================================ */



// Sets

// Permite crear una lista de valores sin duplicados. Cuando se manejan muchos datos, un set tiende a ser mas rápido que un objeto o un arreglo.

// Los Set, son sólo valores, no tienen llave/valor como los objetos.

const carrito = new Set();

// Para agregar elementos al Set

carrito.add('Camisa');
carrito.add('Pantalon');
carrito.add('Remera');

// Para obtener cuantos elementos hay en un Set

console.log(carrito.size);

// Para comprobar si un valor existe en el Set

console.log(carrito.has('Camisa'));

// Para eliminar un valor del Set

carrito.delete('Remera')

console.log(carrito);

// Para reestablecer a 0 los valores del Set

// carrito.clear();

// Se puede iterar en el Set

carrito.forEach( producto => {

    console.log(producto);

} )


console.log(carrito);


// Del siguiente arreglo, eliminar los duplicados

const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set( numeros );

console.log( noDuplicados );


/* ========================================================================== */


// Weak Set

// Los WeakSet solo aceptan objetos, no valores individuales

const weakSet = new WeakSet();

const cliente = {
    nombre : 'Juan',
    saldo : 100
}

// const nombre = 'Juan'; // Esto va a dar error

weakSet.add(cliente);

console.log(weakSet.has(cliente));

// Para borrar el objeto

// weakSet.delete(cliente);

// En un WeakSet no existe el método .size a diferencia del Set

// Tampoco funciona el forEach

console.log( weakSet );


/* ========================================================================== */


// Maps

// Son listas ordenadas en llaves y valor, pueden ser cualquier tipo de dato

// Tienen mejor performance

// Especialmente diseñados para agregar o quitar elementos, o para recorrerlos


const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);


console.log(cliente.size);
console.log(cliente.has('nombre'));
console.log(cliente.get('tipo'));

// Para eliminar un dato

cliente.delete('saldo');

console.log(cliente.has('saldo'));
console.log(cliente.get('saldo'));

// Para limpiar todos los datos

cliente.clear();

console.log(cliente);

// Se pueden crear Maps con valores determinados

const paciente = new Map ([ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);

paciente.set('dr', 'Dr. Asignado');

console.log(paciente);

// Los maps son iterables

paciente.forEach( datos => { // También se puede pasar datos, index
    console.log(datos);
} );


/* ========================================================================== */


// WeakMaps

// Son los menos utilizados
// Sirven para mantener datos privados, NO DATOS SENSIBLES, pero si para ocultar un id x ejemplo
// No se pueden iterar, ni utilizar forEach, ni .size

const producto = {
    idProducto : 10
}

const weakmap = new WeakMap();

weakmap.set(producto, 'Monitor');

console.log(weakmap);


/* ========================================================================== */


// Symbols

// No se utiliza la palabra reservada new

// Los Symbols NUNCA son iguales

const sym = Symbol();
const sym2 = Symbol();

if ( sym === sym2 ) {
    console.log( 'Son iguales!!' );
} else {
    console.log( 'Son diferentes!!' );
}



const nombre = Symbol();
const apellido = Symbol();

const persona = {}

// Agregar nombre y apellido como llaves del objeto

persona[ nombre ] = 'Juan';
persona[ apellido ] = 'De la Torre';
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log( persona );
console.log(persona[nombre]);

// Las propiedades que utilizan un Symbol NO son iterables
for( let i in persona ) {
    console.log( i );
}

// Definir una descripción del Symbol

const nombreCliente = Symbol('Nombre del Cliente');
const cliente = {};

cliente[ nombreCliente ] = 'Pedro';

console.log(cliente);
console.log(cliente[ nombreCliente ]);
console.log( nombreCliente );


/* ========================================================================== */


// Iteradores en JavaScript

function crearIterador(carrito) {

    let i = 0;

    return {

        siguiente: () => {

            const fin = ( i >= carrito.length );
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }

        }

    }

}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// Utilizar el iterador

const recorrerCarrito = crearIterador(carrito);

console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());


/* ========================================================================== */


// Generadores en JavaScript

// Los generadores inician con un *

function *crearGenerador() {

    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
    
}

// const iterador = crearGenerador();


// console.log(iterador);
// console.log(iterador.next().value);
// console.log(iterador.next().done);
// console.log(iterador.next().value);
// console.log(iterador);


// Generador para carrito de compras

function *generadorCarrito( carrito ) {

    for( let i = 0; i < carrito.length; i++ ) {
        yield carrito[i];
    }

}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const iterador = generadorCarrito(carrito);

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());


/* ========================================================================== */


// Más Iteradores en JavaScript

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set( [123, 231, 131, 102] );
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');


// default

for(let ciudad of ciudades) {
    console.log(ciudad);
}

for(let orden of ordenes) {
    console.log(orden);
}

for(let dato of datos) {
    console.log(dato);
}

// .keys Iterator

for (let keys of ciudades.keys()) {
    console.log(keys);
}

for (let keys of ordenes.keys()) {
    console.log(keys);
}

for (let keys of datos.keys()) {
    console.log(keys);
}

// .values Iterator

for (let value of ciudades.values()) {
    console.log(value);
}

for (let value of ordenes.values()) {
    console.log(value);
}

for (let value of datos.values()) {
    console.log(value);
}


// .entries Iterator

for (let entry of ciudades.entries()) {
    console.log(entry);
}

for (let entry of ordenes.entries()) {
    console.log(entry);
}

for (let entry of datos.entries()) {
    console.log(entry);
}