document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const usuarioInput = document.getElementById('nombre').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const mensajeError = document.getElementById('mensajeError');

    // Validación de credenciales
    if (usuarioInput === 'Arena' && passwordInput === '1234') {
        mensajeError.style.display = 'none';
        alert('¡Bienvenida, Arena! Inicio de sesión exitoso.');
        // Aquí puedes redireccionar si lo necesitas:
        window.location.href = "Formulario.html";
    } else {
        mensajeError.textContent = 'Usuario o contraseña incorrectos.';
        mensajeError.style.display = 'block';
    }
});