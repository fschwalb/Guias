/* ============================================================================================ */
/*                                           DOM                                                */
/* ============================================================================================ */



// Para acceder a los elementos con document.algo


let elemento;


elemento = document;
elemento = document.all;
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;


elemento = document.links;
elemento = document.links[4];
elemento = document.links[4].classList;
elemento = document.links[4].className;

elemento = document.images;

elemento = document.scripts;




console.log(elemento);


/* ========================================================================== */


// getElementsByClassName

// Seleccionar por clase


const header = document.getElementsByClassName('header');

console.log(header);


const hero = document.getElementsByClassName('hero');

console.log(hero);


// Si las clases ya existen mas de una vez


const contenedores = document.getElementsByClassName('contenedor')

console.log(contenedores);


// Si una clase no existe


const noExiste = document.getElementsByClassName('no-existe')

console.log(noExiste);


/* ========================================================================== */


// getElementById

// Seleccionar por ID


const formulario = document.getElementById('formulario');

console.log(formulario);


const noExiste = document.getElementById('no-existe')

console.log(noExiste);


// getElementsByClassName y getElementById ya NO se utilizan tanto


/* ========================================================================== */


// querySelector

// Utilizamos . para las clases y # para los id o nada (nav) para las etiquetas HMTL

// Va a retornar máximo un elemento (el primero que encuentre)


const card = document.querySelector('.card');

console.log(card);


// Podemos tener selectores especificos como en CSS


const info = document.querySelector('.premium .info') // .info es hijo de .premium

console.log(info);


// Seleccionar el segundo card de hospedaje


const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');

console.log(segundoCard);


// Seleccionar el formulario


const formulario = document.querySelector('#formulario');

console.log(formulario);


// Seleccionar elementos HTML


const navegacion = document.querySelector('nav');
console.log(navegacion);


/* ========================================================================== */


// querySelectorAll

// La diferencia principal es que querySelectorAll va a retornar TODOS los elementos que cumplan la condición del selector


const card = document.querySelectorAll('.card'); // Devuelve todos los elementos con la clase card

console.log(card);


const formularios = document.querySelectorAll('#formulario') // Va a devolver todos los ID con es nombre, sin importar que sólo pueda existir un mismo ID

console.log(formularios);


// Si un elemento no existe


const noExiste = document.querySelectorAll('no-existe') // No devuelve errores, sólo retorna un arreglo vacío

console.log(noExiste);


/* ========================================================================== */


// Modificar textos o Imágenes


const encabezado = document.querySelector('.contenido-hero h1');

console.log(encabezado);


// Para acceder a los textos


console.log(encabezado.innerText); // No va a encontrar un texto que este "hidden"
console.log(encabezado.textContent); // Encuentra TODOS los textos
console.log(encabezado.innerHTML); // Trae el HTML


// Chaining


const encabezado = document.querySelector('.contenido-hero h1').textContent;

console.log(encabezado);


// Para modificar el encabezado actual


document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';



// O también


const nuevoHeading = 'Nuevo Heading'
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


// Para acceder a las imágenes


const imagen = document.querySelector('.card img');

imagen.src = 'img/hacer2.jpg' // Cambio la ruta de la imagen


/* ========================================================================== */


// Cambiando el CSS con JS

// Para cambiar color


const encabezado = document.querySelector('h1')

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';


// Para modificarlas clases con .add y .remove


const card = document.querySelector('.card');

card.classList.add('nueva-clase', 'segunda-clase');

card.classList.remove('card');

console.log(card.classList);


/* ========================================================================== */


// Traversing the DOM ( Recorrer el DOM )

// Traversing de Padre a Hijo con .children


const navegacion = document.querySelector('.navegacion');

console.log(navegacion); // Podemos utilizar .firstElementChild para seleccionar el primer elemento. Igual con .lastElementChild
console.log(navegacion.childNodes); // Los espacios en blanco son considerados Elementos (los saltos de línea en el HTML)
console.log(navegacion.children); // Sí lista únicamente elementos que sean reales


console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[1].nodeType);



const card = document.querySelector('.card');


// Para recorrer


console.log(card.children[1].children[1].textContent);


// Para modificar y/o crear


card.children[1].children[1].textContent = 'Nuevo heading desde Traversing the DOM'


console.log(card.children[1].children[1].textContent);


// Para imágenes


card.children[0].src = 'img/hacer2.jpg'

console.log(card.children[0]);


// Traversing de Hijo a Padre con .parentNode y .parentElement


console.log(card.parentNode); // El Node toma los espacios en blanco
console.log(card.parentElement); // Forma más segura


// Traversing de Hermanos con .nextElementSibling y .previousElementSibling


console.log(card.nextElementSibling);

const ultimoCard = document.querySelector('.card:nth-child(4)');

console.log(ultimoCard.previousElementSibling);


/* ========================================================================== */


// Eliminar elementos del DOM


// .remove


// const primerEnlace = document.querySelector( 'a' );
// primerEnlace.remove();

// console.log(primerEnlace);


// Desde el padre con .removeChild


const navegacion = document.querySelector( '.navegacion' );

console.log(navegacion.children); // identifica el índice del elemento

navegacion.removeChild( navegacion.children[2] )


/* ========================================================================== */


// Generar HTML con JavaScript

// .createElement


const enlace = document.createElement( 'A' ) // Se pasa la etiqueta que vamos a crear, igual que en HTML


// Agregar Texto


enlace.textContent = 'Nuevo Enlace';


// Agregar atributos


enlace.href = '/nuevo-enlace'; // Crea un href

enlace.target = '_blank'; // Crea un _blank para que abra en otra pestaña

enlace.setAttribute( 'data-enlace', 'nuevo-enlace'  ); // Crea un atributo

enlace.classList.add( 'alguna-clase' ); // Crea una clase

// enlace.onclick = miFuncion; // Creamos una acción con click

// console.log(enlace);


// Seleccionar la navegación


const navegacion = document.querySelector( '.navegacion' );
// navegacion.appendChild( enlace ); // appendChild lo coloca al final de los hijos

// console.log(navegacion.children);
navegacion.insertBefore( enlace, navegacion.children[1] ); // insertBefore lo coloca antes de otro elemento

// function miFuncion() {

//     alert( 'Diste click!' )

// }


// Crear la estructura de una CARD


const parrafo1 = document.createElement( 'P' );
parrafo1.textContent = 'Concierto';
parrafo1.classList.add( 'categoria', 'concierto' );


const parrafo2 = document.createElement( 'P' );
parrafo2.textContent = 'Concierto de Rock!';
parrafo2.classList.add( 'titulo' );


const parrafo3 = document.createElement( 'P' );
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add( 'precio' );


// Crear div con la clase info


const info = document.createElement( 'div' );
info.classList.add( 'info' );
info.appendChild( parrafo1 );
info.appendChild( parrafo2 );
info.appendChild( parrafo3 );


// Crear una imagen


const imagen = document.createElement( 'img' );

imagen.src = 'img/hacer2.jpg';
imagen.alt = 'Texto Alternativo';


// Crear la Card


const card = document.createElement( 'div' );
card.classList.add( 'card' );


// Asignar la imagen


card.appendChild( imagen );


// Asignar info

card.appendChild( info );



// console.log(card);


// Insertar en el HTML


const contenedor = document.querySelector( '.hacer .contenedor-cards' );

contenedor.appendChild( card );


/* ========================================================================== */


// Crear Eventos en JavaScript con .addEventListener


const btnFlotante = document.querySelector( '.btn-flotante' );
const footer = document.querySelector( '.footer' );

btnFlotante.addEventListener( 'click', () => { // Función anónima
    // console.log( 'Diste click en el botón!' );
});


// Otra forma


btnFlotante.addEventListener( 'click', mostrarOcultarFooter )

function mostrarOcultarFooter() {
    
    if ( footer.classList.contains( 'activo' ) ) {

        footer.classList.remove( 'activo' );
        this.classList.remove( 'activo' );
        this.textContent = 'Idioma y Moneda';

    } else {

        footer.classList.add( 'activo' );
        this.classList.add( 'activo' );
        this.textContent = 'X Cerrar';
        
    }

}