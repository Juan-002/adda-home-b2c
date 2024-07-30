function emailAlreadyExistsCustom() {
  const errorAlerts = document.querySelectorAll("#create_customer .alert li");

  if (errorAlerts.length > 0) {
    errorAlerts.forEach((el) => {
      if (el.textContent.includes("enlace incluido para verificar tu")) {
        el.innerHTML = `<a href="/account/login#recover">Esta dirección de e-mail ya ha sido asociada con una cuenta. Si la cuenta es tuya, puedes restablecer tu contraseña aquí</a>`;
      }
    });
  }
}

emailAlreadyExistsCustom();
