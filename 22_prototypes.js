/* ============================================================================================ */
/*                                         FECHAS                                               */
/* ============================================================================================ */



// Todos los Objetos tienen un prototype

// Son funciones exclusivas de ese tipo de objeto

// Object Literal era: ( Objeto Estático )


const cliente = {
    nombre : 'Fernando',
    saldo  : 500
}

console.log( cliente );
// console.log( typeof cliente );


// Objecto Constructor era: ( Objeto Dinámico y Reutilizable )


function Cliente( nombre, saldo ) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente( 'Juan', 500 );


console.log( juan );


/* ========================================================================== */


// El problema que solulciona el Prototype

// Crearlos ayuda a que los proyectos donde muchas personas participan en los archivos de código se puedan mantener mejor y más claros

function Cliente( nombre, saldo ) {
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente( 'Juan', 500 );


function formatearCliente( cliente ) {

    const { nombre, saldo } = cliente;

    return `El cliente ${nombre} tiene un saldo de: $${saldo}`;

}

function formatearEmpresa( empresa ) {

    const { nombre, saldo, categoria } = empresa;

    return `El cliente ${nombre} tiene un saldo de: $${saldo} y pertenece a la categoría ${categoria}`;

    

}

console.log( formatearCliente( juan ) );


function Empresa( nombre, saldo, categoria ) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa( 'Código con Juan', 4000, 'Cursos en Línea' );

console.log( formatearCliente( CCJ ) );

console.log( formatearEmpresa( CCJ ) );


/* ========================================================================== */


// Creando Prototypes

function Cliente( nombre, saldo ) {
    this.nombre = nombre;
    this.saldo  = saldo;
}


// Creando un Proto en el objeto Cliente
// El function busca en el objeto actual, mientras que los arrow function van a buscar en la ventana global

Cliente.prototype.tipoCliente = function () {
    // console.log( 'Desde mi nuevo proto!!!' );
    // console.log( this.saldo );
    let tipo;

    if ( this.saldo > 10000 ) {
        tipo = 'Gold';
    } else if ( this.saldo > 5000 ){
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function ( retira ) {
    this.saldo -= retira
}

// Instanciar el Objeto


const pedro = new Cliente( 'Pedro', 6000 );
console.log( pedro.tipoCliente() ); // Accediendo al Proto creado, como si fuera un método

console.log( pedro.nombreClienteSaldo() );

pedro.retiraSaldo(1000);
console.log( pedro.nombreClienteSaldo() );

console.log( pedro );


/* ========================================================================== */


// Herencia en Prototypes


function Cliente( nombre, saldo ) {

    this.nombre = nombre;
    this.saldo  = saldo;

}

// Proto: tipoCliente <== <== <== <== <== <== <== <== <== <== <== <== <== <== <==
Cliente.prototype.tipoCliente = function () {

    let tipo;

    if ( this.saldo > 10000 ) {
        tipo = 'Gold';
    } else if ( this.saldo > 5000 ){
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;

}

// Proto: nombreClienteSaldo <== <== <== <== <== <== <== <== <== <== <== <== <== <== <==
Cliente.prototype.nombreClienteSaldo = function () {

    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo Cliente: ${this.tipoCliente()}`

}

// Proto: retiraSaldo <== <== <== <== <== <== <== <== <== <== <== <== <== <== <==
Cliente.prototype.retiraSaldo = function ( retira ) {

    this.saldo -= retira

}


// Heredar de Cliente hacia Persona con .call      ( nombre y saldo )


function Persona( nombre, saldo, telefono ) {

    Cliente.call( this, nombre, saldo );
    this.telefono = telefono;
    
}


// Heredar Funciones de Cliente hacia Persona


Persona.prototype = Object.create( Cliente.prototype );

Persona.prototype.constructor = Cliente;


// Instanciarlo


const juan = new Persona( 'Juan', 5000, 1145151515 );

console.log( juan );
console.log( juan.nombreClienteSaldo() );


// Si agregamos un proto a Persona NO va a estar disponible para Cliente


Persona.prototype.mostrarTelefono = function () {
    return `El teléfono de ${this.nombre} es ${this.telefono}`
}

console.log( juan.mostrarTelefono() );