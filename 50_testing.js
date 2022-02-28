/* ======================================================= */
/*                        TESTING                          */
/* ======================================================= */



// VENTAJAS DE HACER TESTING

// Mejorará la calidad del Software evitando BUGS
// Probar todos los diferentes escenarios puede ser complicado o tardado, pero hay erramientas que automatizan las pruebas de nuestros proyectos (JEST y CYPRESS).
// Liberar nuevas versiones sin las preocupaciones de que algo salga mal.


// CONSIDERACIONES CON EL TESTING

// ¿Cuántas veces has agregado nuevas funciones a un proyecto existente pero desconoces si funciona bien con lo existente?
// Tener pruebas hará que una persona que no ha mantenido un proyecto conozca qué es lo que hace cada parte.
// No harás pruebas de todo, más bien de cómo se integran diferentes partes de la aplicación.


// TIPOS DE TESTING

// End to End - Más interactivo, simula algunos clocks, llenar formularioes y asegurarse de que se muestre en pantalla lo que se desea.
// Integración - Revisar que múltiples partes de nuestro proyecto funcione bien.
// Unit - Revisar que cada parte por si sola funcione bien.
// Static - Revisar por errores en el código mientras vas escribiendo.


// HERRAMIENTAS PARA TESTING

// Cada tecnología tiene sus herramientas para Testing, pero una muy popular es Jest, hay versiones para VueJS, Angular, TypeScript, Node, React, etc. Es necesario tener instalado Node.js
// Otra opción es Cypress que es una herramienta para hacer testings End to End.


/* ======================================================= */


// Probar 2 valores

function suma( a, b ) {
    return a + b;
}

function restar( a, b ) {
    return a - b;
}

let resultado = suma( 1, 2 );
let esperado = 3;


if ( resultado !== esperado ) {
    console.error( `El ${ resultado } es diferente a lo esperado. ¡La prueba NO pasó!` )
} else {
    console.log( 'La prueba pasó correctamente' );
}

resultado = restar( 10, 5 );
esperado = 5;

if ( resultado !== esperado ) {
    console.error( `El ${ resultado } es diferente a lo esperado. ¡La prueba NO pasó!` )
} else {
    console.log( 'La prueba pasó correctamente' );
}


/* ======================================================= */



// Probar 2 valores

function suma( a, b ) {
    return a + b;
}

function restar( a, b ) {
    return a - b;
}

let resultado = suma( 1, 2 );
let esperado = 3;

expected(esperado).toBe(resultado);

resultado = restar( 10, 5 );
esperado = 5;

expected(esperado).toBe(resultado);

expected(esperado).toEqual(resultado);





// Creamos una Función reutilizable.

function expected( esperado ) {
    
    return {
        toBe( resultado ) {
            if ( resultado !== esperado ) {
                console.error( `El ${ resultado } es diferente a lo esperado. ¡La prueba NO pasó!` )
            } else {
                console.log( 'La prueba pasó correctamente' );
            };
        },
        toEqual( resultado ) {
            if ( resultado !== esperado ) {
                console.error( `El ${ resultado } no es igual a lo esperado. ¡La prueba NO pasó!` )
            } else {
                console.log( 'La prueba pasó correctamente' );
            };
        }
    };

};


/* ======================================================= */



// Probar 2 valores

function suma( a, b ) {
    return a + b;
}

function restar( a, b ) {
    return a - b;
}

async function sumaAsync( a, b ) {
    return Promise.resolve( suma(a,b) );
};


let resultado = suma( 1, 2 );
let esperado = 3;

expected(esperado).toBe(resultado);

resultado = restar( 10, 5 );
esperado = 5;

expected(esperado).toBe(resultado);

expected(esperado).toEqual(resultado);

test( 'Suma 10 + 20 y el resultado debe ser 30', async () => {
    const resultado = await sumaAsync(10,20);
    const esperado = 30;
    expected(esperado).toBe(resultado);
});

async function test( mensaje, callback ) {
    try {
      await callback();
      console.log( `El Test: ${ mensaje } se ejecutó correctamente` );
    } catch ( error ) {
        console.error( 'Error:' );
        console.error( error );
    };
};





// Creamos una Función reutilizable.

function expected( esperado ) {
    
    return {
        toBe( resultado ) {
            if ( resultado !== esperado ) {
                console.error( `El ${ resultado } es diferente a lo esperado. ¡La prueba NO pasó!` )
            } else {
                console.log( 'La prueba pasó correctamente' );
            };
        },
        toEqual( resultado ) {
            if ( resultado !== esperado ) {
                console.error( `El ${ resultado } no es igual a lo esperado. ¡La prueba NO pasó!` )
            } else {
                console.log( 'La prueba pasó correctamente' );
            };
        }
    };

};


/* ======================================================= */