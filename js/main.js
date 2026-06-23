/**
 * GATO NEGRO — main.js
 * =============================================
 * Funcionalidad compartida por todas las páginas:
 * - Navegación y menu mobile
 * - Efecto de scroll en el header
 * - Scroll reveal de elementos
 * - Logica de apertura de posts (lleva a post.html)
 * =============================================
 */

// =============================================
// NAVEGACION MOBILE — Hamburguesa
// =============================================

/**
 * Inicializa el toggle del menu mobile.
 * Anima el icono entre hamburguesa y X.
 */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMobile');

  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.classList.toggle('open');
    menu.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen.toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Cerrar al hacer click en un item del menu
  menu.querySelectorAll('.nav__mobile-item').forEach(item => {
    item.addEventListener('click', closeMobileMenu);
  });

  // Cerrar al hacer click fuera del menu
  document.addEventListener('click', e => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

/**
 * Cierra el menu mobile y restaura el scroll.
 */
function closeMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMobile');

  if (toggle) {
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  if (menu) menu.classList.remove('open');

  document.body.style.overflow = '';
}

// =============================================
// SCROLL — Efecto en el header
// =============================================

/**
 * Agrega la clase .scrolled al nav cuando
 * el usuario hace scroll hacia abajo.
 * Cambia el borde inferior a dorado.
 */
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Ejecutar una vez al inicio por si la página ya está scrolleada
  onScroll();
}

// =============================================
// SCROLL REVEAL — Animacion de entrada
// =============================================

/**
 * Observa todos los elementos con clase .reveal
 * y agrega .visible cuando entran al viewport.
 * Usa IntersectionObserver para performance.
 */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (els.length === 0) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Solo animar una vez
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach(el => observer.observe(el));
}

// =============================================
// NAVEGACION ENTRE PAGINAS
// =============================================

/**
 * Abre la página de un post individual.
 * Navega a post.html pasando el ID por parametro de URL.
 *
 * @param {number} postId - ID del post a abrir
 */
function openPost(postId) {
  window.location.href = `post.html?id=${postId}`;
}

/**
 * Marca el link de navegación activo
 * segun la página actual.
 */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const pageMap = {
    'index.html':   'home',
    '':             'home',
    'blog.html':    'blog',
    'post.html':    'blog',   // El post pertenece a la sección blog
    'about.html':   'about',
    'contact.html': 'contact'
  };

  const activePage = pageMap[currentPage] || 'home';

  // Desktop links
  document.querySelectorAll('.nav__link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === activePage);
  });

  // Mobile links
  document.querySelectorAll('.nav__mobile-item').forEach(item => {
    item.classList.toggle('active', item.dataset.page === activePage);
  });
}

// =============================================
// INIT GLOBAL
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initNavScroll();
  initScrollReveal();
  setActiveNavLink();
});
