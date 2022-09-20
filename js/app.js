// variables
const nombre = document.getElementById('nombre');
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('submit');
const formularioEnviar = document.getElementById('contact-form');
const resetBtn = document.getElementById('resetBtn');
const resetBtnRes = document.getElementById('resetBtnRes');
const textarea = document.getElementById('textarea-container');

// event Listener

eventListeners();

function eventListeners() {
     // Inicio de la aplicación y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);

     // Campos del formulario
     nombre.addEventListener('blur', validarCampo);
     email.addEventListener('blur', validarCampo);
     asunto.addEventListener('blur', validarCampo);
     mensaje.addEventListener('blur', validarCampo);

     // Boton de enviar en el submit
     formularioEnviar.addEventListener('submit', enviarEmail);

     // Boton de reset
     resetBtn.addEventListener('click', resetFormulario);
     resetBtnRes.addEventListener('click', resetFormulario);
}

// funciones
function inicioApp() {
     // deshabilitar el envio
     btnEnviar.disabled = true;
}
// Valida que el campo tengo algo escrito

function validarCampo() {
    
     // Se valida la longitud del texto y que no este vacio
     validarLongitud(this);

     // Validar unicamente el email
     if(this.type === 'nombre') {
          validarCampo(this);
     }
     if(this.type === 'email') {
          validarEmail(this);
     }
     if(this.type === 'asunto') {
          validarCampo(this);
     }
     if(this.type === 'mensaje') {
          validarCampo(this);
     }

     let errores = document.querySelectorAll('.error');

     if(nombre.value !== '' && email.value !== '' && asunto.value !== '' /*&& mensaje.value !== ''*/ ) {
          if(errores.length === 0) {
               //if(mensaje.value.length > 0 ) {
                    btnEnviar.disabled = false;
               // } else {
               //      btnEnviar.disabled = true;
               // }
          }
     }
}
document.getElementById("textarea-container").onclick = function() {
     document.querySelector('.formulario .textarea-container .input-field').classList.add('expand');
}

// Resetear el formulario 
function resetFormulario(e) {
     formularioEnviar.reset();
     e.preventDefault();
}

//Cuando se envia el correo
function enviarEmail() {
     // Loading de Materialize
     const loading = document.querySelector('.send-overlay');
     // se muestra el Loading
     loading.classList.add('showLoading');

     setTimeout(function() {
          // se oculta el Loading
          loading.classList.remove('showLoading');
          // se muestra el TOAST por 3 segundos
          //showToast();
          setTimeout(function() {
               // se resetea el form
               formularioEnviar.reset();
               document.querySelector('.formulario .textarea-container .input-field').classList.remove('expand');
               // el botón ENVIAR queda inactivo para un nuevo mail
               btnEnviar.disabled = true;
          }, 5000);
     }, 3000);

     //e.preventDefault();
}

// Verifica la longitud del texto en los campos
function validarLongitud(campo) {

     if(campo.value.length > 0 ) {
          campo.style.color = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.color = 'red';
          campo.classList.add('error');
     }
}

function validarEmail(campo) {
     const mensaje = campo.value;
     if(mensaje.indexOf('@') !== -1 ) {
          campo.style.color = 'green';
          campo.classList.remove('error');
     } else {
          campo.style.color = 'red';
          campo.classList.add('error');
     }
}

function showToast() {
     var toastHTML = '<span>Mensaje enviado!</span><button class="btn-flat toast-action no-back" onclick="closeToast()"><i class="material-icons white-text">clear</i></button>';
     M.toast({html: toastHTML});
};


function closeToast() {
     var toastElement = document.querySelector('.toast');
     var toastInstance = M.Toast.getInstance(toastElement);
     toastInstance.dismiss();
}