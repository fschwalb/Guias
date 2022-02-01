/* ======================================================= */
/*                   DESIGN PATTERNS                       */
/* ======================================================= */



// Design Patterns

// Son soluciones típicas a problemas comunes en Desarrollo de Software, cada patrón es como un plano que se puede personalizar para resolver un problema de diseño en el código.


// BENEFICIOS:

// Son soluciones a problemas de diseño de código.

// Son soluciones probadas.

// Son soluciones conocidas por todos, y evitan la forma de escribir código "como cada quien entiende"


// CATEGORIAS DE PATRONES:

// De creación: Permiten crear objetos y permiten la re-utilización del código.

// Estructura: Explican cómo deben comuncarse los objetos y clases en grandes proyectos.

// Comportamiento: Se encargan de cómo se comportan y comunican los objetos.


/* ======================================================= */


// Class Pattern

class Persona {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    };
};

const persona = new Persona( 'Fernando', 'correo@correo.com' );


console.log( persona );


/* ======================================================= */


// Constructor Pattern

class Persona {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    };
};

class Cliente extends Persona {
    constructor( nombre, email, empresa ) {
        super( nombre, email );
        this.empresa = empresa;
    };
};


const persona = new Persona( 'Fernando', 'correo@correo.com' );

console.log( persona );


const cliente = new Cliente( 'Miguel', 'cliente@correo.com', 'Logística Maikel' )

console.log( cliente );


/* ======================================================= */


// Singleton

// No permite crear múltiples instancias d euna misma clase, siempre va a retornar el objeto instanciado


let instancia = null;

class Persona {
    constructor( nombre, email ) {

        if ( !instancia ) {
            this.nombre = nombre;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }

    };
};


const persona = new Persona( 'Fernando', 'correo@correo.com' );
console.log( persona );

const persona2 = new Persona( 'Pau', 'paula@paula.com' );
console.log( persona2 );


/* ======================================================= */


// Factory

// Crea objetos basados en ciertas condiciones

class InputHTML {
    constructor( type, nombre ) {
        this.type = type;
        this.nombre = nombre;
    };

    crearInput() {
        return `<input type="${this.type}" name="${this.nombre}" id="${this.nombre}">`;
    };
};


class HTMLFactory {
    crearElemento( tipo, nombre ) {

        switch ( tipo ) {
            case 'text':
                return new InputHTML( 'text', nombre );

            case 'tel':
                return new InputHTML( 'tel', nombre );

            case 'email':
                return new InputHTML( 'email', nombre );

            default:
                return;
        };
        
    };
};

const elemento = new HTMLFactory();
const inputText = elemento.crearElemento( 'text', 'nombre-cliente' )

console.log( inputText.crearInput() );


const elemento2 = new HTMLFactory();
const inputText2 = elemento2.crearElemento( 'tel', 'telefono-cliente' )

console.log( inputText2.crearInput() );


const elemento3 = new HTMLFactory();
const inputText3 = elemento3.crearElemento( 'email', 'email-cliente' )

console.log( inputText3.crearInput() );


/* ======================================================= */


// Module Pattern

const mostrarCliente = nombre => {
    console.log( nombre );
};


export default mostrarCliente;


// La forma de hacerlo antes era:

const modulo1 = (function() {
    const nombre = 'Fernando';
    
    function hola() {
        console.log( 'Hola' );
    };

    return {
        nombre,
        hola
    };
})();


/* ======================================================= */


// Mixin Pattern

// Es una forma de agregar funciones a una clase una vez que ha sido creada


class Persona {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    };
};

class Cliente {
    constructor( nombre, email ) {
        this.nombre = nombre;
        this.email = email;
    };
};


const funcionesPersona = {
    mostrarInformacion() {
        console.log( `Nombre Persona: ${ this.nombre } Email: ${ this.email }` )
    },
    mostrarNombre() {
        console.log( `Mi Nombre es: ${ this.nombre }` )
    }
};

// Object Assign
// Añadir funcionesPersona a la clase de Persona

Object.assign( Persona.prototype, funcionesPersona );
Object.assign( Cliente.prototype, funcionesPersona );

const cliente = new Persona( 'Fernando', 'correo@correo.com' );



console.log( cliente );
cliente.mostrarInformacion();
cliente.mostrarNombre();

console.log('===');


const cliente2 = new Cliente( 'cliente', 'cliente@correo.com' )
console.log( cliente2 );
cliente2.mostrarInformacion();
cliente2.mostrarNombre();


/* ======================================================= */


// Namespace Pattern

// Crear un objeto global alrededor de la aplicación y agregar todas las funciones dentro, en lugar de crear múltiples funciones y objetos que se puedan acceder de forma global.


const restaurantApp = [];

restaurantApp.platillo = [

    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot-Dog',
        precio: 15
    }

];


restaurantApp.funciones = {

    mostrarMenu: platillos => {
        console.log( `Bienvenidos a nuestro menú` );

        platillos.forEach(( platillo, index ) => {
            console.log( `${ index } : ${ platillo.platillo } ${ platillo.precio }` );
        });
    },
    ordenar: id => {
        console.log( `Tu Platillo: ${ restaurantApp.platillos[id] } se está preparando` );
    },
    agregarPlatillo: ( platillo, precio ) => {
        const nuevo = {
            platillo,
            precio
        };

        restaurantApp.platillos.push( nuevo );
    }

};


restaurantApp.funciones.ordenar( 1 );

restaurantApp.funciones.agregarPlatillo( 'Taco', 20 );


const { platillos } = restaurantApp;

restaurantApp.funciones.mostrarMenu( platillos );


/* ======================================================= */


// Mediador o Intermediario

// Es un patrón de diseño que se comunica con diferentes objetos a la vez.


// Un intermediario es un design pattern que se comunica con distintos objetos a la vez...
// el mediator define objetos ya localizados para objetivos especificos,

function Vendedor (nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: comprador => {
        console.log(`Vendido a ${comprador}`);
    }
}

function Comprador(nombre) {
    this.nombre = nombre;
    this.sala = null;
}
Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

function Subasta(id) {
    let compradores = {};

    return {
        registrar: usuario =>  {
            compradores[usuario.nombre] = usuario;
            usuario.sala = id;
        }
    }
}

const juan = new Comprador('Juan');
const pablo = new Comprador('pablo');
const vendedor = new Vendedor('Vendedor de Autos...');
const subasta = new Subasta(Date.now());

subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 1966', 300);
juan.oferta(300, juan);
pablo.oferta(400, pablo); // Comentar... y no se podrá ver la oferta porque no fue registrado...
vendedor.vendido('Pablo');


/* ======================================================= */