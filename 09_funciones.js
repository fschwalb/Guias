/* ============================================================================================ */
/*                                        FUNCIONES                                             */
/* ============================================================================================ */



// Declaración de Función ( Function Declaration )


function sumar() {
    console.log( 2 + 2 ); // Cuerpo de la llave
}

sumar(); // Llamamos a la función


// Expresión de Función ( Function Expression )


const sumar2 = function() {
    console.log( 3 + 3 );
}

sumar2();


/* ========================================================================== */


// Diferencia entre FD y FE

// Declaración de Función ( Function Declaration )


sumar();

function sumar() {
    console.log( 2 + 2 ); // Cuerpo de la llave
}

// Esta forma si la puede ejecutar JS



// Expresión de Función ( Function Expression )


sumar2();

const sumar2 = function() {
    console.log( 3 + 3 );
}

// Al ser una variable esta no funciona si la función se manda a llamar antes.


/* ========================================================================== */


// Funciones del Lenguaje

// JavaScript cuenta con más de 4 mil funciones 

// Java, python, PHP todos incluyen miles de funciones, estas funciones se les conoce como la librería estándard..

// En JavaScript no hay librería estandard, pero si hay funciones que son parte digamos del Core...


alert('Hubo un error...');

prompt('Cual es tu edad?');


parseInt('1');


// Son ejemplos de funciones. cuentan con un nombre y son llamadas con un parentesis...


/* ========================================================================== */


const  numero1 = 20;
const numero2 = "20";


console.log( parseInt(numero2) ); // Esto es una función

console.log( numero1.toString() ); // Esto es un método

// Ambas son reutilizables y cumplen el objetivo de una función


function sumar() {
    console.log( 2 + 2 ); 
}

sumar();


/* ========================================================================== */


function sumar(a, b) { // a y b Son parámetros de la función

    console.log( a + b );

}

sumar(2, 3); // 2 y 3 son los argumentos


function saludar(nombre, apellido) { // Estos parámetros serían variables
    console.log( `Hola ${nombre} ${apellido}` );
}

saludar('Fer', 'Schwalb');
saludar('Fer');
saludar();



/* ========================================================================== */


// Parámetros por Default


function saludar(nombre = 'Desconocido', apellido = '') {

    console.log( `Hola ${nombre} ${apellido}` );

}

saludar('Fer', 'Schwalb');
saludar();


/* ========================================================================== */


iniciarApp();

function iniciarApp() {

    console.log('Iniciando App...');

    segundaFuncion(); // Llamamos a la función siguiente dentro de ésta

}



function segundaFuncion() {

    console.log( 'Desde la segunda función' );

    usuarioAutenticado( 'Fer' );

}


function usuarioAutenticado(usuario) {

    console.log( 'Autenticando usuario... espere...' );
    console.log( `Usuario autenticado exitosamente: ${usuario}` );

}


/* ========================================================================== */


function sumar(a, b) {
    
    // console.log( a + b );
    return a + b ;

}

const resultado = sumar(2, 3); // Esto es una variable que retorna el calor de una función

console.log( resultado );


// Ejemplo avanzado

let total = 0;

function agregarCarrito(precio) {

    return total += precio;

}

function calcularImpuesto(total) {
    
    return total * 1.21;

}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log( `El total a pagar es de ${totalPagar}` );



console.log(total);


/* ========================================================================== */


// Añadir Funciones en un Objeto

const reproductor = {

    reproducir: function(id) {
        console.log( `Reproduciendo canción con el id ${id}` );
    },

    pausar: function() { 
        console.log( 'Pausando...' );
    },

    borrar: function(id) {
        console.log( `Borrando canción ${id}` );
    }, 

    crearPlaylist: function(nombre) {
        console.log( `Creando la playlist de ${nombre}` );
    },

    reproducirPlaylist: function(nombre) {
        console.log( `Reproduciendo la playlist ${nombre}` );
    }

}

reproductor.reproducir(30);
reproductor.reproducir(34);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist(`Heavy Metal`);
reproductor.crearPlaylist(`Rock 90's`);
reproductor.reproducirPlaylist('Heavy Metal');


/* ========================================================================== */


// Arrow Function

// Los arrow functions son otra forma de declarar funciones y fueron agregadas en las últimas versiones, la sintaxis es más corta y cuando comencé a utilizarlas me parecian algo complejas, en este video y los siguientes te mostraré todo lo que tienes que saber de arrow functions

// En los Arrow Functions de una sola linea las llaves son opcionales y se da por implícito el return.

const aprendiendo = function() {
    console.log('Aprendiendo JavaScript');
}

const aprendiendo2 = () =>  {
    console.log('Aprendiendo JavaScript');
}

// una linea no requiere llaves
const aprendiendo3 = () => console.log('Aprendiendo JavaScript');

// retornar un valor
const aprendiendo4 = () => 'Aprendiendo JavaScript';


console.log(aprendiendo());


/* ========================================================================== */


// Parámetros en un Arrow Function...


// Parámetros
const aprendiendo = (tecnologia) => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// Si es un sólo parámetro NO ocupamos el paréntesis
const aprendiendo = tecnologia => console.log(`aprendiendo ${tecnologia}`);
aprendiendo('JavaScript');

// Múltiples parámetros SI requieren paréntesis
const aprendiendo = (tecn1, tecn2) => console.log(`Aprendiendo ${tecn1} ${tecn2}`);
aprendiendo('JS', 'ES');


/* ========================================================================== */


// ForEach y Map con arrow functions...

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500 },
    { nombre: 'Televisión 50 Pulgadas', precio: 700 },
    { nombre: 'Tablet ', precio: 300 },
    { nombre: 'Audifonos', precio: 200 },
    { nombre: 'Teclado', precio: 50 },
    { nombre: 'Celular', precio: 500 },
]


const nuevoArray = carrito.map( producto =>  `Articulo: ${ producto.nombre } Precio: $ producto.precio}` )

const nuevoArray2 = carrito.forEach( producto =>  console.log( `Articulo: ${ producto.nombre } Precio: ${ producto.precio }` ));

console.log(nuevoArray);
console.log(nuevoArray2);


// Los arrow functions si no se coloca el return y queda en una sola linea dan por implicito el return.. en el map


/* ========================================================================== */


// Arrow functions en métodos de propiedad


const reproductor = {
    cancion: '',
    reproducir: id => console.log( `Reproduciendo canción id ${ id }`),
    pausar: () => console.log( 'pausando...' ),
    borrar: id => console.log( `Borrando canción con id: ${ id }` ),
    crearPlaylist: nombre =>  console.log( `Creando la Playlist ${ nombre }` ),
    reproducirPlaylist: nombre =>  console.log( `Reproduciendo la Playlist ${ nombre }` ),

// También existen los Set y Get si tienes experiencia con esos términos, y si no, set es para añadir un valor, get es para obtenerlo...

    set nuevaCancion( cancion ) {
        this.cancion = cancion;
        console.log( `Añadiendo ${ cancion }` )
    },
    get obtenerCancion() {
        console.log( `${ this.cancion }` )
    }

}
reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {    
// }

reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');


// Probando set y get se utilizando de la siguiente forma
reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;