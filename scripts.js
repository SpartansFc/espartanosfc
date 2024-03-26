// Este es solo un ejemplo básico de un script JavaScript
console.log("Script cargado correctamente.");

// Puedes añadir más funcionalidades aquí según sea necesario

// Script para mostrar el año actual en el pie de página
const year = new Date().getFullYear();
document.querySelector('footer p').textContent += year;

// Script para animar el desplazamiento suave
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Script para validar un formulario de contacto
document.querySelector('#contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nameInput = document.querySelector('#name');
    const emailInput = document.querySelector('#email');
    const messageInput = document.querySelector('#message');
    const errorMessage = document.querySelector('.error-message');

    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        errorMessage.textContent = 'Por favor, completa todos los campos.';
    } else {
        // Aquí puedes agregar el código para enviar el formulario
        // Por ejemplo, podrías usar fetch() o enviar los datos a un servidor
        // Y mostrar un mensaje de éxito al usuario
        alert('Formulario enviado con éxito');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
        errorMessage.textContent = '';
    }
});
