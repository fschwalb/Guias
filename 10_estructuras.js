/* ============================================================================================ */
/*                                  ESTRUCTURAS DE CONTROL                                      */
/* ============================================================================================ */


// De momento todo nuestro código se ejecuta de arriba hacia abajo salvo cuando llamamos una función

// Algunas veces vas a desear que tu código se ejecute basado en una condición

// Cuando vas a un cajero, lo primero que haces es insertar tu tarjeta..

// Segundo colocas tu número, si el número esta bien, puedes continuar, sino, te dice que hubo un error

// Después eliges la operación que deseas hacer, si quieres retirar dinero, el cajero va a revisar que tengas primero esa cantidad, no puedes retirar una cantidad que no tienes..

// Lo mismo pasa en programación, si no eres amigo de alguien en facebook, no lo puedes contactar o escribir, dependiendo de la configuración tal vez tampoco puedas darle me gusta  a su foto de perfil... también si no eres usuario de este curso  no podrías verlo salvo que lo hayas descargado de internet.


// Y para ejecutar nuestro código basado en una condición, se utilizan las estructuras de control...


// Operador if

const puntaje = '1000';


// es igual

if( puntaje == 1000 ) {

    console.log( "Si es igual!" );

} else {

    console.log( "No no es igual" );

}


// Si esta condición se cumple se ejecutará el código, pero que pasa si no se cumple???


// Ahora los if else también pueden ir sin llaves, pero esa sintaxis no es muy común en JS


/* ========================================================================== */


// Veamos otras comparaciones
// Comparadores Estrictos


// Es diferente, se usa ! =

if( puntaje != 1000 ) {
    console.log( "Si! es diferente!" );
}  else {
    console.log( "No, no es diferente" );
}


// Comparador estricto de tipo y valor

if( puntaje === 1000 ) {
    console.log( "Si es igual!" );
} else {
    console.log( "No no es igual") ;
}


// Es Diferente, comparador estricto de tipo y valor

if( puntaje !== 1000 ) {
    console.log( "Si es DIFERENTE (ESTRICTO) !" );
} else {
    console.log( "No no es igual" );
}


/* ========================================================================== */


// Veamos cómo utilizar los operadores de "mayor que" o "menor que"...


const dinero = 500;
const totalAPagar = 300;

if ( dinero >= totalAPagar) {
    console.log( 'Tienes fondos suficientes para pagar!' );
} else {
    console.log( 'No tienes fondos suficientes para pagar!' );
}


let dinero = 500;
let totalCarrito = 300;

if( dinero > totalCarrito ) {
    console.log( 'Pago Correcto' );
} else {
    console.log( 'Fondos Insuficientes' );
}


// También puede ser sin llaves

let dinero = 500;
let totalCarrito = 300;

if( dinero > totalCarrito ) 
    console.log( 'Pago Correcto' );
else
    console.log( 'Fondos Insuficientes' );


/* ========================================================================== */


// Operador Mayor Que, Menor Que y Else If

// El Else sólo se va a ejecutar siempre y cuando NO se cumpla ninguna de las condiciones previas

const dinero = 300;
const totalAPagar = 500;
const cheque = false;
const tarjeta = false;

if (dinero >= totalAPagar ) {
    console.log( 'Si podemos pagar' );
} else if ( cheque ) {
    console.log( 'Si tengo un cheque' );
} else if ( tarjeta ) {
    console.log( 'Si puede pagar, tiene tarjeta' );
} else {
    console.log( 'Fondos Insuficientes' );
}

// Algunas veces vas a desear revisar si se cumple más de una condición...

let rol = 'ADMIN';

if( rol === 'ADMIN' ) {
    console.log( 'El Usuario puede editar, eliminar y ver toda la información' );
} else if( rol === 'EDITOR' ) {
    console.log( 'El usuario solo puede editar sus registros' );
} else {
    console.log( 'El Usuario es visitante, solo puede ver la información' );
}

// El problema del else if es que si agregas múltiples llegan a ser complejos de leer...

let rol = 'ADMIN';

if( rol === 'ADMIN' ) {
    console.log( 'El Usuario puede editar, eliminar y ver toda la información' );
} else if( rol === 'EDITOR' ) {
    console.log( 'El usuario puede editar todos los registros' );
} else if( rol === 'AUTOR' ) { 
    console.log( 'El usuario solo puede registrar usuarios' );
} else {
    console.log( 'El Usuario es visitante, solo puede ver la información' );
}

// Para ello llegan a ser más útiles los Switch, veamos qué son y después volvemos hacia más ejemplos de if else


/* ========================================================================== */


// Switch Case

// Cuando tienes múltiples condiciones por revisar, una forma fácil de leerlo es con un switch...

const metodoPago = 'efectivo';
// const metodoPago = 'cheque';
// const metodoPago = 'tarjeta';

switch( metodoPago ) { // Revisa el valor que queremos comprobar entre ()
    case 'efectivo':
        console.log( `Pagaste con ${metodoPago}` );
        break;
    case 'cheque':
        console.log( `Pagaste con ${metodoPago} revisaremos que tenga fondos primero` );
        break;
    case 'tarjeta':
        console.log( `Pagaste con ${metodoPago} espere un momento...` );
        break;
    default: // Actúa como un ELSE
        console.log( 'Aún no has pagado' );
        break;
}


// Los Switch también pueden ejecutar funciones, no solamente console.logs y también puedes tener 2 condiciones en un mismo if


/* ========================================================================== */


// Operador && ( AND )

// Veamos qué son el Operador && y en el siguiente vemos que es el OR

// El Operador && Revisa que se cumplan ambas condiciones...

// Cuando vas a comprar en Amazon, primero debes tener una cuenta y segundo debes tener suficiente saldo, además de que tu producto debe estar disponible...

// Vamos a crear un par de variables...

const usuario = false;
const puedePagar = true;

if ( usuario && puedePagar ) { // Revisa que se cumplan AMBAS condiciones
    console.log( 'Tu Pedido se realizó con éxito...' );
} else {
    console.log( 'Hubo un error con el pago.' )
}

// Cambiar true o false...

// Si quiero darle mensajes de error más detallados a los usuarios puedo revisar o negar una condición

if ( usuario && puedePagar ) {
    console.log( 'Tu Pedido se hizo con éxito...' );
} else if ( !usuario ) { // Con el ! Negamos la condición
    console.log( 'Inicia sesión para realizar el pedido' )
} else if( !puedePagar ) {
    console.log( 'Fondos insuficientes' )
} else {
    console.log( 'Hubo un error con tu pago.' )
}

// Lo importante es recuerdar que el operador && revisa que se cumplan ambas condiciones


/* ========================================================================== */


// Operador || ( OR )

// Antes vimos el operador && y que en él se deben cumplir ambas condiciones...

// El operador OR revisa que se cumpla al menos una condición o la otra, si colocamos 2 o 3 condiciones y todas se cumplen se va a ejecutar el código porque revisa que se cumpla al menos 1


let efectivo = 300;
let credito = 400;
let disponible = efectivo + credito;
let totalCarrito = 700;

if( efectivo > totalCarrito || credito > totalCarrito ) {
    console.log( 'Puedes pagar con efectivo o credito' );
} else if( disponible >= totalCarrito ) {
    console.log( 'Paga con ambos' );
} else {
    console.log( 'No puedes pagar' );
}


// Se cumple una u otra condición, y con eso basta para que el código de la primera condición se cumpla...


/* ========================================================================== */


// Usando IF - Buenas Prácticas

// Veamos algunas buenas practicas, sencillas para escribirs ifs

// una muy común es que muchas personas hacen lo siguiente...


const autenticado = true;

if( autenticado === true ) {
    console.log( 'El Usuario esta autenticado' )
}


// Debido a que el IF ya retorna true, puedes eliminarlo y tu código será mejor..

// También muchas personas escriben IFs pensando que se podrán ejecutar 2 condiciones al mismo tiempo, el IF sólo va a ejecutar la primera que se cumpla


const puntaje = 500;

if( puntaje > 300 ) {
    console.log( 'Buen puntaje... felicidades' );
} else if( puntaje > 400 ) {
    console.log( 'Excelente esfuerzo' )
} else {
    console.log( 'No sabria decirte, pero buen esfuerzo...' )
}


// Ambas condiciones se cumplen, la de 300 y 400, muchas personas creen que se van a ejecutar ambas porque ambas se cumplen pero el if va a ejecutar la que más pronto cumpla su condición, también recuerda que el orden puede ser importante, lo más seguro es que quieras cambiar el orden del 300 y 400

// Para que se logueen ambas condiciones:


function revisarPuntaje() {

    if(puntaje > 400) {
        console.log('Excelente esfuerzo')
        return; // Poner el RETURN acá es buena práctica para parar el código, pero sólo funcionan dentro de una función
    } 
    
    if(puntaje > 300) {
        console.log('Buen puntaje... felicidades');
        return;
    } // Esta función no se va a mostrar porque ya se cumple la de arriba y tiene RETURN

}

revisarPuntaje();


/* ========================================================================== */


// Previamente vimos los operadores ternarios, llegan a ser muy útiles ya que te dan un código más simplificado, veamos como se utilizan...


const autenticado = true;
const puedePagar = true;

console.log( autenticado  ? 'Si está autenticado' : 'No está autenticado' );


// El OR y el && también se pueden utilizar en el ternario


console.log( autenticado && puedePagar ? 'Si está autenticado' : 'No está autenticado' );


// Ternario anidado...


console.log( autenticado  ?  puedePagar ? 'Si puede pagar' : 'Está autenticado pero no puede pgar' : 'No está autenticado' );

