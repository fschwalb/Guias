/* ============================================================================================ */
/*                                         EVENTOS                                              */
/* ============================================================================================ */



// DOMContentLoaded

// Se va a ejecutar una vez esté listo el HTML


console.log( 1 );


document.addEventListener( 'DOMContentLoaded', () => {
    console.log( 2 );
})


console.log( 3 );


/* ========================================================================== */


// Eventos con Mouse


const nav = document.querySelector( '.navegacion' );


// Registrar un evento


nav.addEventListener( 'click', () => {
    console.log( 'Click en nav' );
})

nav.addEventListener( 'mouseenter', () => {
    console.log( 'Entrando en nav' );

    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener( 'mouseout', () => {
    console.log( 'Saliendo de nav' );

    nav.style.backgroundColor = 'white';
})

nav.addEventListener( 'mousedown', () => {
    console.log( 'Mouse down' );

    nav.style.backgroundColor = 'white';
})

nav.addEventListener( 'mouseup', () => {
    console.log( 'Mouse up' );

    nav.style.backgroundColor = 'white';
})

nav.addEventListener( 'click', () => {
    console.log( 'Click en nav' );

    nav.style.backgroundColor = 'white';
})

nav.addEventListener( 'dblclick', () => {
    console.log( 'Doble Click en nav' );

    nav.style.backgroundColor = 'white';
})


/* ========================================================================== */


// Eventos con Teclado


const busqueda = document.querySelector( '.busqueda' );

busqueda.addEventListener( 'keydown', () => {
    console.log( 'Escribiendo...' );
})

busqueda.addEventListener( 'keyup', () => {
    console.log( 'Escribiendo...' );
})

busqueda.addEventListener( 'blur', () => {
    console.log( 'Escribiendo...' );
})

busqueda.addEventListener( 'copy', () => {
    console.log( 'Escribiendo...' );
})

busqueda.addEventListener( 'paste', () => {
    console.log( 'Escribiendo...' );
})

busqueda.addEventListener( 'cut', () => {
    console.log( 'Escribiendo...' );
})

busqueda.addEventListener( 'input', () => { // Cubre todos menos el blur
    console.log( 'Escribiendo...' );
})



busqueda.addEventListener( 'input', ( e ) => { // para escuchar lo que se escribe en el input
    console.log( e.target.value );
})

busqueda.addEventListener( 'input', ( e ) => { 

    if ( e.target.value === '' ) {
        console.log( 'Falló la validación' );
    }

})


/* ========================================================================== */


// Eventos de Formularios


const formulario = document.querySelector( '#formulario' );

formulario.addEventListener( 'submit', (e) => {

    e.preventDefault(); // Evita la acción por Default

    console.log( e );

    console.log( e.target.method ); // Devuelve tipo de método

    console.log( e.target.action ); // Devuelve el tipo de acción

});



formulario.addEventListener( 'submit', validarFormulario );

function validarFormulario( e ) {

    e.preventDefault(); 

    console.log( 'Buscando...' );

    console.log( e.target.action ); 

};


/* ========================================================================== */


// Eventos con Scroll

window.addEventListener( 'scroll', () => {

    // console.log( 'Scrolling...' );
    const scrollPX = window.scrollY;

    console.log( scrollPX );

})

window.addEventListener( 'scroll', () => {

    const premium = document.querySelector( '.premium' );
    const ubicacion = premium.getBoundingClientRect();

    console.log( ubicacion ); // Mandamos a consola para ir debuggueando

    if ( ubicacion.top < 784 ) {

        console.log( 'El elemento ya es visible' );

    } else {

        console.log( 'Elemento aún no visible' );

    }

});


/* ========================================================================== */


// Event Bubbling

// Es cuando presionas en un evento, pero ese evento se propaga por muchos otros dando resultados inesperados

// Tenemos diferentes cards, con información...

// Crear 3 selectores

const cardDiv = document.querySelector( '.card' );
const infoDiv = document.querySelector( '.info' );
const titulo = document.querySelector( '.titulo' );


cardDiv.addEventListener( 'click', e => {

    e.stopPropagation(); // Detiene la propagación del evento
    console.log( 'click card' );

})

infoDiv.addEventListener( 'click', e => {

    e.stopPropagation();
    console.log( 'click info' );

})

titulo.addEventListener( 'click', e => {

    e.stopPropagation();
    console.log( 'click titulo' );

})


// Delegation

// Evita resultados inesperados

const cardDiv = document.querySelector( '.card' );

cardDiv.addEventListener( 'click', e => {

    if(e.target.classList.contains( 'titulo' )) {
        console.log( 'Diste click en titulo' );
        // console.log( e.target ); // Para saber a qué le estamos dando click
        // console.log( e.target.classList ); // Para saber las clases a donde estamos dando click
    }

    if(e.target.classList.contains( 'info' )) {
        console.log( 'Diste click en info' );
    }

});


// Prevenir Event Bubbling con un método

// Evitar la propagación con contenido creado...


const parrafo1 = document.createElement('P' );

parrafo1.textContent = 'Concierto';
parrafo1.classList.add( 'categoria' );
parrafo1.classList.add( 'concierto' );


// Segundo parrafo


const parrafo2 = document.createElement( 'P' );

parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add( 'titulo' );


// Tercer parrafo...


const parrafo3 = document.createElement( 'p' );

parrafo3.textContent = '$800 por persona';
parrafo3.classList.add( 'precio' );

parrafo3.onclick = nuevaFuncion( 1 );


// crear el div...


const info = document.createElement( 'div' );

info.classList.add( 'info' );
info.appendChild( parrafo1 );
info.appendChild( parrafo2 );
info.appendChild( parrafo3 );


// Vamos a crear la imagen


const imagen = document.createElement( 'img' );

imagen.src = 'img/hacer2.jpg';


// Crear el Card..


const contenedorCard = document.createElement( 'div' );

contenedorCard.classList.add( 'contenedorCard' );


// Vamos a asignar la imagen al card...


contenedorCard.appendChild( imagen );


// y el info


contenedorCard.appendChild( info );


// Insertarlo en el HTML...


const contenedor = document.querySelector( '.hacer .contenedor-cards' );

contenedor.appendChild( contenedorCard ); // al inicio info


function nuevaFuncion( id ) {
    console.log( 'click..', id )
}


























