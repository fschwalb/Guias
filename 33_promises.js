/* ======================================================= */
/*                        PROMISES                         */
/* ======================================================= */


// Callbacks


const paises = ['Francia', 'España', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais( pais, callback ) {

    setTimeout(() => {
        paises.push( pais );
        callback();
    }, 2000);
    
};

function mostrarPaises() {

    setTimeout(() => {
        paises.forEach( pais => {
            console.log(pais);
        });
    }, 1000);

};

mostrarPaises();

nuevoPais( 'Alemania', mostrarPaises );


/* ======================================================= */


// Callback Hell

const paises = [];

function nuevoPais( pais, callback ) {

    paises.push( pais );
    console.log( `Agregado ${ pais }` );
    callback();

};

function mostrarPaises() {

    console.log( paises );
    
};

function iniciarCallbackHell() {

    setTimeout(() => {
        nuevoPais( 'Alemania', mostrarPaises );

        setTimeout(() => {
            nuevoPais( 'Francia', mostrarPaises );

            setTimeout(() => {
                nuevoPais( 'Inglaterra', mostrarPaises );
            }, 3000);

        }, 3000);

    }, 3000);
    
};

iniciarCallbackHell();


/* ======================================================= */


// Primer Promise


const aplicarDescuento = new Promise( (resolve, reject) => {

    const descuento = true;

    if( descuento ) {
        resolve( 'Descuento aplicado' );
    } else {
        reject( 'No se pudo aplicar el descuento' );
    };

});

// console.log( aplicarDescuento );

aplicarDescuento
    .then( resultado => descuento( resultado ) )
    .catch( error => console.log( error ) )

function descuento( mensaje ) {
    console.log( mensaje );
};

/* 

- Hay 3 valores posibles:

    fulfilled - El promise se cumplió
    rejected - El promise no se cumplió
    pending - No se ha cumplido y tampoco fue rechazado

*/


/* ======================================================= */


const paises = [];

const nuevoPais = pais => new Promise( resolve => {

    setTimeout(() => {
        paises.push( pais );
        resolve( `Agregado: ${ pais }` );
    }, 1000);

});

nuevoPais( 'Alemania' )
    .then( result => { // Este es el resultado del resolve
        console.log( result );
        console.log( paises );

        return nuevoPais( 'Francia' )
    })
    .then( result => { // Este es el resultado del resolve
        console.log( result );
        console.log( paises );

        return nuevoPais( 'Inglaterra' )
    })
    .then( result => { // Este es el resultado del resolve
        console.log( result );
        console.log( paises );
    });




