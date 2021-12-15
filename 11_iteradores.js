/* ============================================================================================ */
/*                                        ITERADORES                                            */
/* ============================================================================================ */


// For Loop

// Inicializar el for
// Condición
// Incremento

// Algunas veces vas a desear ejecutar tu código hasta que una condición se cumpla o se deje de cumplir...

// los For Loop tienen esa caracteristica, se ejecutan hasta que el código deja de cumplir esa condición...


for( let i = 0; i <= 10; i += 2 ) {
    console.log( `Numero:  ${i} ` );
}


// cambiar el <= < o el número hasta unos 20, también iniciarlizar o avanzar con i+= 2


// Podemos llevar este ejemplo más allá una pregunta sencilla para programadores JR es como identificas un numero par o impar en un for loop...


for( let i = 0; i <= 10; i++ ) {

    if( i % 2 === 0 ) {
        console.log( `Numero ${i} ES PAR ` );
    } else {
        console.log( `Numero ${i} ES IMPAR ` );
    }

}
    

// Los for son útiles cuando tienes un arreglo, digamos un carrito de compras...


const carrito = [

    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},

]

for( let i = 0; i < carrito.length; i++ ) {
    console.log( carrito[i].nombre );
}


// For loop corre hasta que una condición se cumple, ahora como este arreglo el usuario se va a encargar de llenarlo, que el carrito tenga elementos, un for loop ejecutará el código hasta que lleguemos al final del carrito...


/* ========================================================================== */


// Break y Continue

// Break cortará la ejecución del for loop, mientras que Continue nos permitirá interceptar un elemento y continuar su ejecucicón

// BREAK


for( let i = 0; i <= 10; i++ ) {

    if( i === 5 ) { // "Si i es igual a 5..."
        console.log( 'Estamos en el 5... FIN.' ); // "Muestra el string"
        break; // Corta la ejecución del ciclo cuando se cumple el IF
    }

    console.log( `Numero:  ${i}` ); // "Muestra los números en cada iteración"

}


// CONTINUE


for( let i = 0; i <= 10; i++ ) {

    if( i === 5 ) { // "Si i es igual a 5..."
        console.log( 'Estamos en el 5... CONTINUAR....' ); // "Muestra el string"
        continue; // Corta la ejecución en esa posición y vuelve el ciclo desde la siguiente posición
    }

    console.log( `Numero:  ${i}` );

}


// Y en qué casos puedo utilizar el continue?


const carrito = [

    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300, descuento: true},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50, descuento: true},
    { nombre: 'Celular', precio: 500},

]

for( let i = 0; i <= carrito.length; i++ ) {

    if( carrito[i].descuento ) {
        console.log( `El articulo ${carrito[i].nombre} Tiene descuento... ` );
        continue;
    }

    console.log( carrito[i].nombre ); // Para listar todos los elementos

}


/* ========================================================================== */


// El Reto de Fizz BUZZ

// Fizz Buzz es un reto que complica mucho a los programadores, básicamente si un número es múltiplo de 3 imprimes FIZ, si es múltiplo de 5 imprimes BUZZ y si es múltiplo de ambos como 15, 30, 45 debes imprimir FIZZ BUZZ

// 3 6 9 12 15 ...  fizz ( Múltiplos de 3 )
// 5 10 15 20 25 ... buzz ( Múltiplos de 5 )
// 15 30 45 ... FizzBuzz ( Múltiplos de 3 y 5 )


for( let i = 1; i < 100; i++ ) {

    if( i % 15 === 0 ) { // Siendo la condición más estricta tiene que ejecutarse primero
        console.log( `${i} FizzBuzz!` )
    } else if( i % 3 === 0 ) {
        console.log( `${i} fizz` );
    } else if ( i % 5 === 0 ) {
        console.log( `${i} buzz` )
    } 
    
}


// También se puede hacer:


for( let i = 1; i < 100; i++ ) {

    if( i % 3 === 0 && i % 5 === 0 ) { // Siendo la condición más estricta tiene que ejecutarse primero
        console.log( `${i} FizzBuzz!` )
    } else if( i % 3 === 0 ) {
        console.log( `${i} fizz` );
    } else if ( i % 5 === 0 ) {
        console.log( `${i} buzz` )
    } 
    
}


// Ó tambíen:


function fizzBuzz(numero) {

    if ( numero % 3 === 0 && numero % 5 === 0 ) {
        return "FizzBuzz!";
    } else if ( numero % 3 === 0 ) { 
        return "fizz";
    } else if ( numero % 5 === 0 ) { 
        return "buzz";
    } else {
        return numero;
    }

}

console.log(fizzBuzz(10));


// Ó tambíen:


let i = 1; 

while ( i < 100 ) { // Condición

    // Bloque de código...

    if( i % 3 === 0 && i % 5 === 0 ) {
        console.log( `${i} FizzBuzz!` )
    } else if( i % 3 === 0 ) {
        console.log( `${i} fizz` );
    } else if ( i % 5 === 0 ) {
        console.log( `${i} buzz` )
    } 


    i++; // Incremento

}


/* ========================================================================== */


// While Loop

// Este se ejecuta MIENTRAS una condición sea verdadera..


let i = 0; // Inicializar

while ( i < 10 ) { // Condición

    // Bloque de código...
    console.log( `Número: ${i}` );
    


    i++; // Incremento

}


// Por lo tanto si inicicializamos en 20, no hará nada..


/* ========================================================================== */


// Do While

// Otro iterador que es muy común en otros lenguajes y también en javascript, es el do while...

// A diferencia del for y del while, el do while se ejecuta al menos una vez, y después verifica si la condición se cumple...

// Do While va a correr al menos una vez.


let i = 0; // Inicializar

do {

    // Bloque de código

    console.log( `Numero: ${i}` )



    i++;

} while( i < 10 ); // Condición


// Ahora, lo que hace diferente a un while de un for o un do while, es que al menos se va a ejecutar una vez aunque la condición no se cumpla...


/* ========================================================================== */


// ForEach y Map

// El forEach es ideal para recorrer arrays


const pendientes = [ 'Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript' ];


// Recorrer un Foreach ( Siempre con Arrow Function )


pendientes.forEach( ( pendiente, index ) =>  {
    console.log( `${index} : ${pendiente}` ); // Devuelve: 0 : Tarea ,etc
});


// ( La llave es opcional, ya que es código de una sola línea )

// Recorrer arreglo de objetos


const carrito = [

    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Disco' }

];

carrito.forEach( producto =>  {
    console.log( `Agregaste ${producto}` );
});


// Lo mismo aplica para los maps, la sintaxis es la misma, pero el map te crea un nuevo arreglo, si solo deseas recorrer los elementos utiliza el Foreach, si requieres crear un nuevo arreglo, sin duda el map sera mejor...


/* ========================================================================== */


// For Of ( Itera sobre Arrays )

// No es como un for tradicional que ejecuta una pieza de código mientras una condición sea verdadera, este ejecuta mientras haya elementos por iterar como puede ser un arreglo y otros llamados Maps y Sets que veremos más adelante...


let pendientes = [ 'Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript' ];

for ( let pendiente of pendientes ) {
    console.log( pendiente );
}

// También aplica a objetos complejos

const carrito = [

    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300, descuento: true},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50, descuento: true},
    { nombre: 'Celular', precio: 500},

]

for ( const producto of carrito ) {
    console.log(( producto.nombre ));
}
for ( const producto of carrito ) {
    console.log(( producto.precio ));
}


// Sin duda una forma más sencilla que un foreach y un for!


/* ========================================================================== */


// For In ( Itera sobre Objects )

// Va a iterar sobre todas las propiedades de un objeto

// Primero veamos como recorrer un arreglo con objetos:

const carrito = [

    { id: 1, producto: 'Libro' },
    { id: 2, producto: 'Camisa' },
    { id: 3, producto: 'Disco' }

];

for ( let producto of carrito ) {
    console.log( producto.producto );
}


// Para recorrer un objeto:


const automovil = {

    modelo: 'Camaro',
    motor: '6.0',
    año: '1969',
    marca: 'Chevrolet'

}

// for( let auto in automovil ) {
//     console.log( `${auto} : ${automovil[auto]}` );
// }

for( let [llave, valor] of Object.entries(automovil) ) {
    console.log(valor);
    console.log(llave);
}
