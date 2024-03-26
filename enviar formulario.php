<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Configuración del correo electrónico
    $to = "tucorreo@gmail.com";
    $subject = "Mensaje del formulario de contacto de Spartans FC";
    $body = "Nombre: $name\n";
    $body .= "Correo electrónico: $email\n";
    $body .= "Mensaje:\n$message";

    // Encabezados adicionales
    $headers = "From: Spartans FC <noreply@tudominio.com>";

    // Envío del correo electrónico
    if (mail($to, $subject, $body, $headers)) {
        echo "¡Gracias por enviar el formulario, $name! Tu mensaje ha sido enviado.";
    } else {
        echo "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.";
    }
} else {
    // Si no es una solicitud POST, redirecciona o muestra un mensaje de error
    echo "Hubo un error al procesar el formulario. Por favor, inténtalo de nuevo más tarde.";
}
?>
