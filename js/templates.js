// Template dinámico para Header y Footer

// Renderizar Header
function renderHeader(activePage = '') {
    const header = document.createElement('header');
    header.innerHTML = `
    <nav class="nav" id="nav">
    <div class="nav__pill">
      <a class="nav__logo" href="index.html" aria-label="Gato Negro">
        <img src="img/logo.svg" alt="logo gato negro" class="logo">
      </a>
      <ul class="nav__links" role="list">
        <li><a class="nav__link active" href="index.html" data-page="home">Inicio</a></li>
        <li><a class="nav__link" href="blog.html" data-page="blog">Blog</a></li>
        <li><a class="nav__link" href="about.html" data-page="about">Autor</a></li>
        <li><a class="nav__link" href="contact.html" data-page="contact">Contacto</a></li>
      </ul>
      <div class="nav__cta">
        <a href="blog.html" class="btn btn--primary" style="padding:0.4rem 1rem;font-size:0.72rem;">
          Leer el blog <i class="fa-solid fa-arrow-right fa-xs"></i>
        </a>
      </div>
      <button class="nav__toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>

  <div class="nav__mobile" id="navMobile">
    <ul class="nav__mobile-list">
      <li><a class="nav__mobile-item active" href="index.html" data-page="home">Inicio</a></li>
      <li><a class="nav__mobile-item" href="blog.html" data-page="blog">Blog</a></li>
      <li><a class="nav__mobile-item" href="about.html" data-page="about">Sobre el Autor</a></li>
      <li><a class="nav__mobile-item" href="contact.html" data-page="contact">Contacto</a></li>
    </ul>
  </div>
    `;

    return header;
}

// Renderizar Footer
function renderFooter() {
    const footer = document.createElement('footer');
    footer.innerHTML = `
        <footer class="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__grid">
          <div>
            <div class="footer__brand-name">Gato <span>Negro</span></div>
            <p class="footer__brand-desc">Blog independiente sobre UX/UI, diseño y desarrollo web. Sin filtros corporativos, sin contenido genérico.</p>
            <div class="social-links">
              <a href="#" class="social-btn" aria-label="Twitter"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" class="social-btn" aria-label="GitHub"><i class="fa-brands fa-github"></i></a>
              <a href="#" class="social-btn" aria-label="LinkedIn"><i class="fa-brands fa-linkedin-in"></i></a>
              <a href="#" class="social-btn" aria-label="Dribbble"><i class="fa-brands fa-dribbble"></i></a>
            </div>
          </div>
          <div>
            <div class="footer__heading">Navegación</div>
            <ul class="footer__links">
              <li><a class="footer__link" href="index.html">Inicio</a></li>
              <li><a class="footer__link" href="blog.html">Blog</a></li>
              <li><a class="footer__link" href="about.html">Sobre el Autor</a></li>
              <li><a class="footer__link" href="contact.html">Contacto</a></li>
            </ul>
          </div>
          <div>
            <div class="footer__heading">Categorías</div>
            <ul class="footer__links" id="footerCatLinks"></ul>
          </div>
        </div>
        <div class="footer__bottom">
          <span class="footer__copy">&copy; 2025 Gato Negro &mdash; Todos los derechos reservados</span>
          <div class="footer__legal">
            <a href="#" class="footer__legal-link">Privacidad</a>
            <a href="#" class="footer__legal-link">Terminos</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
        `;

    return footer;
}

// Inicializar template
function initTemplate(activePage = '') {
    // Insertar header al inicio del body
    const body = document.body;
    const header = renderHeader(activePage);
    body.insertBefore(header, body.firstChild);

    // Insertar footer al final del body
    const footer = renderFooter();
    body.appendChild(footer);
}

// Auto-inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    // Detectar página activa desde el atributo data-page del body
    const activePage = document.body.getAttribute('data-page') || '';
    initTemplate(activePage);
});