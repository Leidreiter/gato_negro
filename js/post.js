/**
 * GATO NEGRO — post.js
 * =============================================
 * Logica de la pagina individual de post (post.html).
 *
 * La pagina es un template reutilizable: recibe
 * el id del post por parametro de URL (?id=X)
 * y renderiza dinamicamente todo el contenido
 * del artículo correspondiente usando data.js.
 *
 * Flujo:
 * 1. Leer ?id=X de la URL
 * 2. Buscar el post en el array POSTS
 * 3. Renderizar el contenido completo
 * 4. Manejar el caso de post no encontrado
 * =============================================
 */

/**
 * Lee el parametro ?id= de la URL actual.
 *
 * @returns {number|null} ID del post como Number, o null si no existe
 */
function getPostIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  return id ? parseInt(id, 10) : null;
}

/**
 * Busca un post en el array POSTS por su id.
 *
 * @param {number} id - ID del post a buscar
 * @returns {Object|undefined} Post encontrado o undefined
 */
function findPostById(id) {
  return POSTS.find(post => post.id === id);
}

/**
 * Muestra un estado de error cuando el post
 * no existe o el ID es inválido.
 */
function renderPostNotFound() {
  document.title = 'Post no encontrado — Gato Negro';

  const header = document.querySelector('.post-header');
  if (header) {
    header.innerHTML = `
      <button class="post-header__back" onclick="history.back()">
        <i class="fa-solid fa-arrow-left"></i> Volver
      </button>
      <div style="padding: 4rem 0; text-align: center;">
        <div style="font-family: var(--font-mono); font-size: 0.65rem; letter-spacing: 0.2em; color: var(--gold); margin-bottom: 1rem;">404</div>
        <h1 style="font-family: var(--font-display); font-size: 2.5rem; font-weight: 300; margin-bottom: 1rem;">Artículo no encontrado</h1>
        <p style="color: var(--text-muted); margin-bottom: 2rem;">El artículo que buscas no existe o fue removido.</p>
        <a href="blog.html" class="btn btn--primary">
          <i class="fa-solid fa-arrow-left"></i> Ver todos los artículos
        </a>
      </div>
    `;
  }

  // Ocultar sección de imagen y related si el post no existe
  const postImg = document.getElementById('postImg');
  if (postImg) postImg.style.display = 'none';

  const relatedSection = document.querySelector('.related');
  if (relatedSection) relatedSection.style.display = 'none';
}

/**
 * Inicializacion de la pagina post.html.
 * Se ejecuta en DOMContentLoaded.
 */
function initPostPage() {
  const postId = getPostIdFromURL();

  if (!postId) {
    renderPostNotFound();
    return;
  }

  const post = findPostById(postId);

  if (!post) {
    renderPostNotFound();
    return;
  }

  // Renderizar todos los elementos del artículo
  renderPostPage(post);

  // Scroll reveal para elementos secundarios
  initScrollReveal();
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', initPostPage);
