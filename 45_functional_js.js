/* ======================================================= */
/*                    FUNCTIONAL JS                        */
/* ======================================================= */


// Crear tu código utilizando funciones
// Hay ciertas reglas, las funciones deben tomar una entrada y tener una salida de datos.
// No se permite la modificación de los datos.
// Tiene una sintaxis mas de matemáticas.


// Se deben cumplir los siguientes procesos:
// Inmutabilidad - Los datos no deben modificarse (utilizar const casi siempre)

// Separar funciones de datos (se utilizan mucho las funciones que retornan un nuevo dato o Array Methods, de esa forma tendremos funciones que entregan un resultado nuevo pero nunca modician los datos originales.)

// First-class Functions (Poder crear funciones que parezcan cualquier variable como lo es Function Expression.)
// Ejemplo:

// const suma = function( a, b ) {

//     return a + b;

// }

// const resultado = suma;

const suma = function( a, b ) {
    return a + b;
}

const resultado = suma;

console.log( resultado(10, 20) );


/* ======================================================= */


// Pasar una Función como argumento

const suma = ( a, b ) => a + b;

const mutiplica = ( a, b ) => a * b;

const sumarOMultiplicar = fn => fn(10, 20);


// Toma una función específica según el argumento que se pase
console.log( sumarOMultiplicar( suma ) );
console.log( sumarOMultiplicar( mutiplica ) );


/* ======================================================= */


// Higher Order Functions
// Es una función que retorna otra función como argumento

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


// Esto....
const resultado = carrito.filter( producto => {

    return producto.precio > 400;

});

console.log( resultado );

// Es igual a esto....
const mayor400 = producto => {
    return producto.precio > 400;
}

const resultado = carrito.filter(mayor400);


/* ======================================================= */


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


const obtenerNombres = producto => {
    return producto.nombre;
}

const resultado = carrito.map( obtenerNombres )

// .map crea un arreglo nuevo con los resultados
console.log(resultado);
// Carrito sigue estando sin modificarse
console.log(carrito);


/* ======================================================= */


// Pure Functions

// Son funciones que retornan un dato pero no modifica los valores de las variables.
// El resultado debe ser una nueva variable con un valor nuevo


const numero1 = 20;
const duplicar = numero => numero * 2;

const resultado = duplicar( numero1 );

console.log(resultado);
console.log(numero1);


/* ======================================================= */


// Funciones que retornan funciones

const obtenerCliente = () => () => console.log('Fernando');

const fn = obtenerCliente();

fn();


/* ======================================================= */


// Closures
// Es una forma de acceder a una función o valor desde el exterior del Scope


const obtenerCliente = () => {

    const nombre = 'Fernando';

    function muestraNombre() {
        console.log( nombre );
    };

    return muestraNombre;

};


const cliente = obtenerCliente(); 
cliente()


/* ======================================================= */


// Currying y Partials

// Dividir una función que toma más de un parámetro en argumentos de forma parcial


const suma = ( a, b, c ) => a + b + c;

// const parcial = a => ( b, c ) => suma( a, b, c );

// const primerNumero = parcial(5);
// const resultado = primerNumero(4,3);


// console.log( resultado );


// Dividir las funciones en pequeños parciales

const parcial = a => b => c => suma( a, b, c );

// Esto....
const primerNumero = parcial(5);
const segundoNumero = primerNumero(4);
const resultado = segundoNumero(3);

// Es igual a esto....
const resultadoParcial = parcial(5)(4)(3);

console.log( resultado );
console.log( resultadoParcial );


/* ======================================================= */


// Composition

// Son una alternativa a las Clases.

const obtenerNombre = info => ({
    mostrarNombre() {
        console.log( `Nombre: ${ info.nombre }` );
    }
});


function Cliente( nombre, email, empresa ) {
    
    let info = {
        nombre,
        email,
        empresa
    };

    return Object.assign(
        info,
        obtenerNombre( info )
    );

};

function Empleado( nombre, email, puesto ) {
    
    let info = {
        nombre,
        email,
        puesto
    };

    return Object.assign(
        info,
        obtenerNombre( info )
    );

};


const cliente = Cliente( 'Fernando', 'correo@correo.com', 'Destination' );
cliente.mostrarNombre();

const empleado = Empleado( 'Juan', 'empleado@empleado.com', 'Developer' );
empleado.mostrarNombre();


/* ======================================================= */