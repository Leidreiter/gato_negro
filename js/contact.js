/**
 * GATO NEGRO — contact.js
 * =============================================
 * Logica del formulario de contacto (contact.html).
 *
 * - Validacion de todos los campos en frontend
 * - Construccion dinamica del mensaje para WhatsApp
 * - Apertura de wa.me con el mensaje pre-cargado
 * - Feedback visual al usuario post-envio
 * =============================================
 */

/** Número de WhatsApp destino (formato internacional sin +) */
const WA_NUMBER = '543515957014';

/** URL de WhatsApp generada al enviar — guardada para el link de fallback */
let lastWaUrl = '';

/**
 * Valida un campo de formulario y muestra/oculta
 * el mensaje de error correspondiente.
 *
 * @param {HTMLElement} el      - Campo a validar
 * @param {string}      errId   - ID del elemento de error
 * @param {boolean}     isValid - Condicion de validez
 * @returns {boolean} true si el campo es válido
 */
function validateField(el, errId, isValid) {
  const errEl = document.getElementById(errId);

  if (!isValid) {
    el.classList.add('error');
    if (errEl) errEl.classList.add('visible');
    return false;
  }

  el.classList.remove('error');
  if (errEl) errEl.classList.remove('visible');
  return true;
}

/**
 * Valida el formulario completo.
 * Devuelve true solo si todos los campos son válidos.
 *
 * @returns {boolean}
 */
function validateForm() {
  const fname   = document.getElementById('fname');
  const femail  = document.getElementById('femail');
  const freason = document.getElementById('freason');
  const fmsg    = document.getElementById('fmsg');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const v1 = validateField(fname,   'err-fname',   fname.value.trim().length >= 2);
  const v2 = validateField(femail,  'err-femail',  emailRegex.test(femail.value.trim()));
  const v3 = validateField(freason, 'err-freason', freason.value !== '');
  const v4 = validateField(fmsg,    'err-fmsg',    fmsg.value.trim().length >= 10);

  return v1 && v2 && v3 && v4;
}

/**
 * Construye el mensaje de WhatsApp formateado
 * con los datos del formulario.
 *
 * @returns {string} Mensaje en formato WhatsApp (con *negritas*)
 */
function buildWhatsAppMessage() {
  const fname   = document.getElementById('fname').value.trim();
  const femail  = document.getElementById('femail').value.trim();
  const freason = document.getElementById('freason').value;
  const fmsg    = document.getElementById('fmsg').value.trim();

  return (
    `*Consulta desde Gato Negro Blog*\n\n` +
    `*Nombre:* ${fname}\n` +
    `*Email:* ${femail}\n` +
    `*Motivo:* ${freason}\n\n` +
    `*Mensaje:*\n${fmsg}`
  );
}

/**
 * Maneja el envio del formulario.
 * Valida, construye el mensaje, abre WhatsApp
 * y muestra el estado de éxito.
 *
 * @param {Event} event - Evento submit del formulario
 */
function handleFormSubmit(event) {
  event.preventDefault();

  // Validar antes de continuar
  if (!validateForm()) return;

  // Construir URL de WhatsApp
  const message = buildWhatsAppMessage();
  lastWaUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

  // Configurar el link de fallback
  const fallbackLink = document.getElementById('waFallback');
  if (fallbackLink) fallbackLink.href = lastWaUrl;

  // Mostrar estado de éxito y ocultar formulario
  const form        = document.getElementById('contactForm');
  const successMsg  = document.getElementById('formSuccess');

  if (form)       form.style.display = 'none';
  if (successMsg) successMsg.classList.add('visible');

  // Abrir WhatsApp (puede ser bloqueado por el browser en algunos casos)
  window.open(lastWaUrl, '_blank', 'noopener,noreferrer');
}

/**
 * Limpia el estado del formulario y lo muestra
 * nuevamente (para si el usuario quiere enviar otro).
 */
function resetContactForm() {
  const form       = document.getElementById('contactForm');
  const successMsg = document.getElementById('formSuccess');

  if (form) {
    form.reset();
    form.style.display = '';
    form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    form.querySelectorAll('.form-error.visible').forEach(el => el.classList.remove('visible'));
  }

  if (successMsg) successMsg.classList.remove('visible');

  lastWaUrl = '';
}

/**
 * Inicializacion de la pagina contact.html.
 * Adjunta el handler al formulario.
 */
function initContactPage() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);
  }

  // Limpiar errores al escribir en cada campo
  ['fname', 'femail', 'fmsg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', () => {
        el.classList.remove('error');
        const errEl = document.getElementById(`err-${id}`);
        if (errEl) errEl.classList.remove('visible');
      });
    }
  });

  // Limpiar error del select al cambiar
  const freason = document.getElementById('freason');
  if (freason) {
    freason.addEventListener('change', () => {
      freason.classList.remove('error');
      const errEl = document.getElementById('err-freason');
      if (errEl) errEl.classList.remove('visible');
    });
  }
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', initContactPage);
