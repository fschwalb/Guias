/* ======================================================= */
/*                    ASYNC / AWAIT                        */
/* ======================================================= */


// Try Catch

// console.log( 1 + 1 );

// hola();

// console.log( 2 + 2 );

// Se ejecuta el primer console.log, la funcion es undefined y corta la ejecución

// Para eso esta el Try Catch

console.log( 1 + 1 );

try {
    hola();
} catch (error) {
    console.log( error );
}

console.log( 2 + 2 );


/* ======================================================= */



// Async Await
// Await bloquea la ejecución del código hasta que se resuelva el Promise

function descargarClientes() {

    return new Promise( (resolve, reject) => {
        const error = true;

        setTimeout(() => {

            if ( !error ) {
                resolve('El listado de CLientes se descargó correctamente')
            } else {
                reject('Error en la conexión');
            };

        }, 2000);

    });

};

// Ejemplo de Async y Await
// La función padre tiene que tener ASYNC

async function ejecutar() {

    try {
        console.log( 1 + 1 ); // Esto es lo primero que se va a ejecutar
        const respuesta = await descargarClientes();

        console.log( 2 + 2 );
        console.log( respuesta );
    } catch (error) {
        console.log( error );
    }

}

ejecutar();


/* ======================================================= */


// Con Arrow Function

const ejecutar = async () => {

    try {
        console.log( 1 + 1 ); 
        const respuesta = await descargarClientes();

        console.log( 2 + 2 );
        console.log( respuesta );
    } catch (error) {
        console.log( error );
    }

}

ejecutar();


/* ======================================================= */


function descargarNuevosClientes() {

    return new Promise( resolve => {
        console.log('Descargando clientes....');

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 4000);
    });

};

function descargarNuevosPedidos() {

    return new Promise( resolve => {
        console.log('Descargando pedidos....');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 2000);
    });

};

const app = async () => {

    try {
        const respuesta = await Promise.all([ descargarNuevosClientes(), descargarNuevosPedidos() ]);
        console.log( respuesta[0] );
        console.log( respuesta[1] );
    } catch (error) {
        console.log( error );
    }

};

app();


/* ======================================================= */


const url = "https://picsum.photos/list";

document.addEventListener('DOMContentLoaded', obtenerDatos);

// function obtenerDatos() {

//     fetch(url)
//         .then( respuesta => respuesta.json())
//         .then( resultado => console.log(resultado))
//         .catch( error => console.log(error))

// };

async function obtenerDatos() {

    try {
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado);
    } catch (error) {
        console.log(error);
    }

};


/* ======================================================= */