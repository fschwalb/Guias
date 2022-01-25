/* ======================================================= */
/*                      FETCH API                          */
/* ======================================================= */


// Cómo utilizar FetchAPI

// Sólo puede leer textos o JSONs (NO soporta HTML) y es nativo de JS

const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener( 'click', obtenerDatos );

function obtenerDatos() {

    const url = 'data/datos.txt';

    fetch('data/datos.txt')
        .then( respuesta => {
            console.log( respuesta );
            console.log( respuesta.status );
            console.log( respuesta.statusText );
            console.log( respuesta.url );
            console.log( respuesta.type );

            return respuesta.text();
        })
        .then( datos => {
            console.log( datos );
        })
        .catch( error => {
            console.log( error );
        })

};


/* ======================================================= */


// Como obtener respuesta de un Fetch de un JSON

// Las llaves utilizan un string, es una tecnología de transporte

const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener( 'click', obtenerDatos );

function obtenerDatos() {

    const url = 'data/empleado.json';
    
    fetch( url )
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML( resultado ) )

};

function mostrarHTML({ empresa, id, nombre, trabajo }) {

    const contenido = document.querySelector('.contenido');

    contenido.innerHTML = `
        <p>Empleado: ${ nombre }</p>
        <p>ID: ${ id }</p>
        <p>Empresa: ${ empresa }</p>
        <p>Puesto: ${ trabajo }</p>
    `;

};


/* ======================================================= */


// Cargar un JSON que es un array

// Para hacerlo con un click:

const cargarJSONArrayBtn = document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener( 'click', obtenerDatos );

// Para hacerlo de forma automática:

// document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos() {

    const url = 'data/empleados.json';

    fetch( url )
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML( resultado ) )

};

function mostrarHTML( empleados ) {

    const contenido = document.querySelector('.contenido');

    let html = '';

    empleados.forEach( empleado => {

        const { id, nombre, empresa, trabajo } = empleado;

        html += `
            <p>Empleado: ${ nombre }</p>
            <p>ID: ${ id }</p>
            <p>Empresa: ${ empresa }</p>
            <p>Puesto: ${ trabajo }</p>
        `;
        
    });

    contenido.innerHTML = html;

};


/* ======================================================= */


// Consultar e Imprimir resultados de una API

const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener( 'click', obtenerDatos );

function obtenerDatos() {

    const url = 'https://picsum.photos/list';

    fetch( url )
        .then( respuesta => respuesta.json() )
        .then( resultado => mostrarHTML( resultado ) )

};

function mostrarHTML( datos ) {

    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach( perfil => {

        const { author, post_url } = perfil;

        html += `
            <p>Autor: ${ author }</p>
            <a href="${ post_url }" target="_blank">Ver Imágen</a>
        `;
        
    });

    contenido.innerHTML = html;

};