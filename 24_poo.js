/* ============================================================================================ */
/*                                           POO                                                */
/* ============================================================================================ */



// Programación Orientada a Objetos con Clases

// Hay dos formas de crear clases

// Class Declaration:

class Cliente {

}

class Cliente {

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo  = saldo;
    }

}

// Para Instanciar la clase
const juan = new Cliente( 'juan', 400 );
console.log(juan);


// Class Expression:

const Cliente2 = class {

}

const Cliente2 = class {

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo  = saldo;
    }

}

// Para Instanciar la clase
const juan2 = new Cliente2( 'juan2', 500 );
console.log(juan2);


/* ========================================================================== */


// Métodos y Métodos estáticos en las Clases

class Cliente {

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo  = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // Propiedades Estáticas ( Para mostrarlas no requiere de una instancia )
    static bienvenida() {
        return `Bienvenido al Cajero`
    }

}

// Para Instanciar la clase
const juan = new Cliente( 'juan', 400 );

console.log( juan.mostrarInformacion() );
console.log(juan);

console.log( Cliente.bienvenida() );


// Lo mismo aplica para el método Class Expression

const Cliente2 = class {

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo  = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

}

// Para Instanciar la clase
const juan2 = new Cliente2( 'juan2', 500 );

console.log( juan2.mostrarInformacion() );
console.log(juan2);


/* ========================================================================== */


// Heredar una CLase

class Cliente {

    constructor( nombre, saldo ) {
        this.nombre = nombre;
        this.saldo  = saldo;
    }

    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }

    // Propiedades Estáticas ( Para mostrarlas no requiere de una instancia )
    static bienvenida() {
        return `Bienvenido al Cajero`
    }

}

// Herencia

// Utilizamos super() para heredar atributos del constructor padre

class Empresa extends Cliente {

    constructor( nombre, saldo, telefono, categoria ) {
        super( nombre, saldo );
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida() { // Reescribir un Método
        return `Bienvenido al Cajero de Empresas`
    }

}

// Para Instanciar la clase
const juan = new Cliente( 'juan', 400 );
const empresa = new Empresa ( 'Código con Juan', 500, 114050505, 'Aprendizaje Online' );


console.log( empresa );
console.log( empresa.mostrarInformacion() );

console.log( Cliente.bienvenida() );
console.log( Empresa.bienvenida() );


/* ========================================================================== */


// Propiedades Privadas en JavaScript

class Cliente {

    #nombre; // Propiedad Privada

    constructor( nombre, saldo ) {
        this.#nombre = nombre; // Propiedad Pública
        this.saldo  = saldo; // Propiedad Pública
    }

    mostrarInformacion() {
        return `Cliente: ${this.#nombre}, tu saldo es de ${this.saldo}`;
    }

    static bienvenida() {
        return `Bienvenido al Cajero`
    }

}

const juan = new Cliente( 'Juan', 400 );

console.log( juan.mostrarInformacion() );
console.log( juan.#nombre ); // Esto marca error porque la prop es privada


// Otra forma de acceder es con set y get

class Cliente2 {

    #nombre;

    setNombre( nombre ) {
        this.#nombre = nombre;
    }

    getNombre() {
        return this.#nombre;
    }

}

const juan2 = new Cliente2();
juan2.setNombre( 'Juan' );
console.log( juan2.getNombre() );
