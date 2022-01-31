/* ======================================================= */
/*                    DOMINANDO JS                         */
/* ======================================================= */



// Hoisting

// Cuando tengo Function Declaration la función se puede llamar antes de declararla y no da error

function obtenerCliente( nombre ) {
    console.log( `El nombre del cliente es ${ nombre }` );
}

obtenerCliente( 'Fernando' );

// Pero en las Function Expression no se puede llamar la función antes de ser declarada.

obtenerCliente2( 'Esteban' );

const obtenerCliente2 = function ( nombre ) {
    console.log( `El nombre del cliente es ${ nombre }` );
}



// Si llamo a un Function Expression antes de declarar la función...

obtenerCliente2( 'Esteban' );

const obtenerCliente2 = function ( nombre ) {
    console.log( `El nombre del cliente es ${ nombre }` );
}

// JS lo lee de esta forma:

const obtenerCliente2; // Acá la variables es un "undefined"

obtenerCliente2 = function ( nombre ) {
    console.log( `El nombre del cliente es ${ nombre }` );
}

obtenerCliente2( 'Esteban' ); // Por eso da error en consola


/* ======================================================= */


// Coerción


// Implícita:

const numero1 = 20;
const numero2 = "40";

console.log( numero1 + numero2 ); // 2040


// Explícita:

console.log( Number(numero2) + numero1 ); // 60



console.log( numero1.toString() ); // "20"

const pedido = [1,2,3,4];

console.log( pedido.toString() ); // 1,2,3,4
console.log( JSON.stringify(pedido) ); // [1,2,3,4]


/* ======================================================= */


// Implicit Binding

// Encuentra valores con la palabra .this

const usuario = {
    nombre: 'Fernando',
    edad: 37,
    informacion() {
        console.log( `Mi nombre es ${nombre} y mi edad es ${edad}` );
    }
};

// usuario.informacion(); // Uncaught ReferenceError: Fernando is not defined


// Con el método .this le decimos a JS que esos valores están dentro del objeto y por ende las va a buscar ahí.

const usuario2 = {
    nombre: 'Esteban',
    edad: 37,
    informacion() {
        console.log( `Mi nombre es ${this.nombre} y mi edad es ${this.edad}` );
    }
};

const usuario3 = {
    nombre: 'Paula',
    edad: 27,
    informacion() {
        console.log( `Mi nombre es ${this.nombre} y mi edad es ${this.edad}` );
    },
    mascota: {
        nombre: 'Gitana',
        edad: 5,
        informacion(){
            console.log( `Mi nombre es ${this.nombre} y mi edad es ${this.edad}` );
        } 
    }
};

usuario2.informacion();
usuario3.informacion();
usuario3.mascota.informacion();


/* ======================================================= */


// Explicit Binding

// Básicamente es lo mismo que el Implicit pero se utilizan 3 funciones (Call, Apply, Bind)

function persona( el1, el2 ) {
    console.log( `Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}` );
};


const informacion = {
    nombre: 'Fernando'
};

const musicaFavorita = [ 'Heavy Metal', 'Rock' ];

// Call existe en TODAS las funciones de JS, y puedo pasarle un objeto o un arreglo dentro de la misma función.

persona.call( informacion, musicaFavorita[0], musicaFavorita[1] );

// Apply también existe en todas las funciones de JS, pero a diferencia de Call, se le puede pasar un arreglo entero.

persona.apply( informacion, musicaFavorita );

// Bind, es muy parecido a Call (hay que pasarle los valores de forma individual) pero además crea una nueva función.

const nuevaFn = persona.bind( informacion, musicaFavorita[0], musicaFavorita[1] );

nuevaFn();


/* ======================================================= */


// new Binding


function Auto( modelo, color ) {
    this.modelo = modelo;
    this.color = color;
};

const auto = new Auto( 'Camaro', 'Negro' );

console.log(auto);



// window Binding

window.color = 'negro';

function hola() {
    console.log(color);
}

hola();


/* ======================================================= */


// Event Loop


console.log( 'Primero' );

setTimeout(() => {
    console.log( 'Segundo' );
}, 0);

console.log( 'Tercero' );

setTimeout(() => {
    console.log( 'Cuarto' );
}, 0);

new Promise( function( resolve ) {
    resolve( 'Desconocido...' )
}).then(console.log);

console.log( 'Último' );



    // Primero
    // Tercero
    // Último
    // Desconocido...
    // Segundo
    // Cuarto


/* ======================================================= */


// Self

// Se utiliza mucho en los ServiceWorkers y WebWorkers
// Funciona igual que la propiedad window pero se utiliza la palabra self

self.onload = () => {
    console.log( 'Ventana Lista' );
};


const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 30,
    disponible: true,
    mostrarInfo: function() {
        const self = this;
        return `El Producto: "${this.nombre}" tiene un precio de $${self.precio}`
    }
};


console.log( producto.mostrarInfo() );


/* ======================================================= */