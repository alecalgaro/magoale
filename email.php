<?php
// Comentario de una linea en php
/* Comentario de varias lineas en php*/

    //Para tomar los datos ingresados por el usuario:
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    //Dirección a la que quiero que se envien los mensajes:
    $direccion = "alecalgaro@hotmail.com";

    //Para concatenar:
    $contenido = "Nombre: ".$nombre."\nCorreo: ".$email."\nMensaje: ".$mensaje ;

    /* Para mostrar los datos obtenidos puedo hacer:
    echo $nombre;
    echo $nombre. " ha dicho: " .$mensaje;
    */

    //Para enviar por email uso la funcion "mail" de php (no permite enviar correos desde localhost, solo desde un servidor):
    //Se usa el correo donde lo quiero enviar y los datos que se quieren enviar.
    //Puede que los mensajes aparezcan en spam.
    mail($direccion, "Contacto ", $contenido);

    /*Otra opción en lugar de usar la función "mail", sería usar la librería "PhpMailer":
    En éste vídeo explican como se usa: https://www.youtube.com/watch?v=RSlE38lvlys
    */

    /*Si quiero que al apretar el botón "Enviar" le aparezca otra pantalla al usuario, puedo hacer: 
    header("Location:gracias.html") y programar un archivo "gracias.html" que por ejemplo sea una pantalla
    que diga "Gracias por enviar tu mensaje"
    */

    //Para que aparezca un alert como en js con un mensaje: (Comprobar si al apretar "Aceptar" te deja en la misma página)
    //echo '<script language="javascript">alert("Gracias por enviar tu mensaje");</script>';  //Cuidado con las comillas simples y dobles.

    /*Si quiero poner un mensaje para comprobar si el email se envio correctamente, puedo hacer:
    if(mail('alecalgaro@hotmail.com', $nombre, $email, $mensaje)){
        echo '<script language="javascript">alert("Gracias por enviar tu mensaje");</script>';;
    }else{
        echo '<script language="javascript">alert("Error al enviar el mensaje");</script>';;
    }
    */
?>
