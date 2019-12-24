/* Para que escriba automáticamente el subtitulo */

const typed = new Typed('.typed', {
    strings: [  'Magia', 
                'humor', 
                'y diversión', 
                'para todos tus eventos'],   //Recordar poner esa ","

        //Todo esto esta en la documentación de la libreria "typed.js": https://github.com/mattboldt/typed.js/
        //stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
        typeSpeed: 90, // Velocidad en mlisegundos para poner una letra,
        startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
        backSpeed: 90, // Velocidad en milisegundos para borrrar una letra,
        smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
        shuffle: false, // Alterar el orden en el que escribe las palabras.
        backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
        loop: true, // Repetir el array de strings
        loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
        showCursor: true, // Mostrar cursor palpitanto
        cursorChar: '|', // Caracter para el cursor
        contentType: 'html', // 'html' o 'null' para texto sin formato
        
    });

    /*  Si quiero cambiar algunos estilos a las palabras que aparecen con CSS, puedo hacer lo siguiente: 
        const typed = new Typed('.typed', {
        strings: [
            '<i class="mascota">Gato</i>',
            '<i class="mascota">Perro</i>',
            '<i class="mascota">Conejo</i>',
            '<i class="mascota">Pez</i>'
        ],
        
        y luego, en CSS usar .mascota para editar lo que quiero.
*/
