/* ======================================================= */
/*                          API's                          */
/* ======================================================= */


// Notificación API

const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener( 'click', () => {

    Notification
        .requestPermission()
        .then( result => {
            console.log( `El resultado es: ${ result }` );
        });

});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {

    if(Notification.permission === 'granted') {

        const notificacion = new Notification('Esta es la notificacion', {
            icon : 'img/ccj.png',
            body : 'Código con Juan aprende con proyectos reales'
        });

        notificacion.onclick = function() {
            window.open( 'https://www.codigoconjuan.com' );
        };

    };

});


/* ======================================================= */


// Intersection Observer

// Sirve para un scroll infinito

document.addEventListener( 'DOMContentLoaded', () => {

    const observer = new IntersectionObserver( entries => {

        if( entries[0].isIntersecting ) {
            console.log( 'Ya está visible!' );
        };

    });

    observer.observe( document.querySelector('.premium') );

});


/* ======================================================= */


// Detectar Consexión a Internet

window.addEventListener( 'online', actualizarEstado );
window.addEventListener( 'offline', actualizarEstado );

function actualizarEstado() {

    if( navigator.onLine ) {
        console.log( 'Si estás conectado' );
    } else {
        console.log( 'No estás conectado...' );
    };

};


/* ======================================================= */


// Ejecutar Pantalla Completa en JS

const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener( 'click', abrirPantallaCompleta );
salirBtn.addEventListener( 'click', cerrarPantallaCompleta );

function abrirPantallaCompleta() {

    document.documentElement.requestFullscreen();

};

function cerrarPantallaCompleta() {

    document.exitFullscreen();

};


/* ======================================================= */


// Visibility State

// Detectar cuando cambiamos la página actual

document.addEventListener( 'visibilitychange', () => {

    if( document.visibilityState === 'visible' ) {
        console.log( 'Ejecutar la función para reproducir el video...' );
    } else {
        console.log( 'Pausar el video' );
    };

});


/* ======================================================= */


// Speech Recognition API

const salida = document.querySelector('#salida');
const microfono = document.querySelector('#microfono');

microfono.addEventListener( 'click', ejecutarSpeechAPI );

function ejecutarSpeechAPI() {

    const SpeechRecognition = webkitSpeechRecognition;

    const recognition = new SpeechRecognition();

    recognition.start();

    recognition.onstart = function() {
        salida.classList.add( 'mostrar' );
        salida.textContent = 'Escuchando...';
    };

    recognition.onspeechend = function() {
        salida.textContent = 'Se dejó de grabar...';
        recognition.stop();
    };

    recognition.onresult = function(e) {
        console.log( e.results[0][0] );

        const { confidence, transcript } = e.results[0][0];

        const speech = document.createElement('p');
        speech.innerHTML = `Grabado: ${ transcript }`;

        const seguridad = document.createElement( 'p' );
        seguridad.innerHTML = `Seguridad: ${ parseInt( confidence * 100 ) }%`;

        salida.appendChild( speech );
        salida.appendChild( seguridad );
    };

};
