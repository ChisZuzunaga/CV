(function(){
    emailjs.init("ZCT5cY2_39XOX6Nc2");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_sayqwth', 'template_pgahedk', this)
        .then(function() {
            alert('Mensaje enviado correctamente.');
            document.getElementById('contact-form').reset(); // Limpia los campos del formulario
        }, function(error) {
            alert('Fallo al enviar el mensaje: ' + error);
        });
});

// Obtener elementos
const modal = document.getElementById("form-modal");
const openFormBtn = document.getElementById("open-form-btn");
const closeBtn = document.querySelector(".close-btn");

// Abrir el modal al hacer clic en el botón
openFormBtn.onclick = function () {
    modal.style.display = "flex";
}

// Cerrar el modal al hacer clic en la 'X'
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera del contenido del formulario
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}