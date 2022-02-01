// ServiceWorkers
// Es la base de una PWA

// Son Scripts que están corriendo todo el tiempo detrás de escena

// Soporte Offline

// No tiene acceso al DOM (excepto con un script especial)

// Cargan de forma instantánea

// Pueden sincronizar datos detrás de escena o sin interferir en la navegación


// FUNCIONES NO DISPONIBLES EN SERVICE WORKERS

// window       => utiliza self
// document     => utiliza caches
// localStorage => utiliza fetch




// PWA (Progressive Web Application)
// Característicaas:

// Rapida: Cargan toda la información en menos de 5 segundos

// Instalable: Se puede navegar o instalar en tu navegador o teléfono móvil como una aplicación nativa.

// Soporte Offline: Puede funcionar incluso sin conexión a internet.


// Para tener una correcta instalación de PWA se deben tener 3 cosas:
// Manifest Válido, Dominio HTTPS o localHost y tener registrado el eventListener de fetch()


// PARA INSTALAR UNA PWA

// En un archivo sw.js


/* 

    // Cuando se instala el Service Worker
    self.addEventListener( 'install', e => {
        console.log( 'Instalado el Service Worker' );

        console.log( e );
    });

    // Activar el Service Worker
    self.addEventListener( 'activate', e => {
        console.log( 'Service Worker Activado' );

        console.log( e );
    });

    // Evento fetch para descargar archivos estáticos
    self.addEventListener( 'fetch', e => {
        console.log( 'Fetch... ', e );
    });

*/



// PARA CACHEAR ARCHIVOS

/*

    const nombreCache = 'apv-v1';

    const archivos = [
        '/',
        '/index.html',
        '/css/bootstrap.css',
        '/css/styles.css',
        '/js/app.js',
        '/js/apv.js'
    ];



    // Cuando se instala el Service Worker
    self.addEventListener( 'install', e => {
        console.log( 'Instalado el Service Worker' );

        e.waitUntil(
            caches.open( nombreCache )
                .then( cache => {
                    console.log( 'cacheando' );
                    cache.addAll( archivos )
                })
        )
    });

    // Evento fetch para descargar archivos estáticos
    self.addEventListener( 'fetch', e => {
    console.log( 'Fetch... ', e );

    // Revisamos el tipo de request y en caso de que sea igual a lo  q tenemos en cache, entonces carga el cache
    e.responseWith(
        caches.match( e.request )
            .then( respuestaCache => {
                return respuestaCache;
            })
    )
});

*/


// EL SW FINAL QUEDARIA ASI:

/*

    const nombreCache = 'apv-v3';

    const archivos = [
        '/',
        '/index.html',
        '/error.html',
        '/css/bootstrap.css',
        '/css/styles.css',
        '/js/app.js',
        '/js/apv.js'
    ];



    // Cuando se instala el Service Worker
    self.addEventListener( 'install', e => {
        console.log( 'Instalado el Service Worker' );

        e.waitUntil(
            caches.open( nombreCache )
                .then( cache => {
                    console.log( 'cacheando' );
                    cache.addAll( archivos )
                })
        )
    });

    // Activar el Service Worker
    self.addEventListener( 'activate', e => {
        console.log( 'Service Worker Activado' );

        // Para eliminar el cache anterior
        e.waitUntil(
            caches.keys()
                .then( keys => {
                    return Promise.all(
                        keys.filter( key => key !== nombreCache)
                            .map( key => caches.delete(key))
                    )
                })
        )
    });

    // Evento fetch para descargar archivos estáticos
    self.addEventListener( 'fetch', e => {
        console.log( 'Fetch... ', e );

        e.respondWith(
            caches.match( e.request )
                .then( respuestaCache => {
                    return respuestaCache;
                })
                .catch( () => caches.match( '/error.html' ))
        )
    });

*/