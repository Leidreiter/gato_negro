/**
 * GATO NEGRO — blog.js
 * =============================================
 * Logica especifica de la pagina blog.html.
 * Maneja el filtrado por categoría, la lectura
 * de parámetros de URL y la inicialización
 * del listado dinámico de posts.
 * =============================================
 */

/**
 * Categoría actualmente seleccionada.
 * Se inicializa desde el parametro ?cat= de la URL
 * si existe, o "Todos" por defecto.
 */
let activeCategory = 'Todos';

/**
 * Aplica un filtro de categoría al listado de posts.
 * Actualiza el estado de los botones de filtro,
 * re-renderiza las cards y actualiza la URL.
 *
 * @param {string} category - Nombre de la categoría a filtrar
 */
function applyFilter(category) {
  activeCategory = category;

  // Actualizar estado visual de los botones
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const isActive = btn.textContent.trim() === category;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive.toString());
  });

  // Re-renderizar el listado
  renderBlogList(category);

  // Actualizar URL sin recargar la pagina (para permitir compartir el link)
  const url = new URL(window.location);
  if (category === 'Todos') {
    url.searchParams.delete('cat');
  } else {
    url.searchParams.set('cat', category);
  }
  window.history.replaceState({}, '', url);
}

/**
 * Lee los parametros de URL al cargar la pagina.
 * Si existe ?cat=X, aplica ese filtro automaticamente.
 *
 * @returns {string} Categoría encontrada en URL o 'Todos'
 */
function getCategoryFromURL() {
  const params = new URLSearchParams(window.location.search);
  const catParam = params.get('cat');

  // Verificar que la categoría exista en los datos
  if (catParam && CATEGORIES.includes(catParam)) {
    return catParam;
  }

  return 'Todos';
}

/**
 * Inicializacion de la pagina blog.html.
 * Se ejecuta en DOMContentLoaded.
 */
function initBlogPage() {
  // Leer categoría desde URL si hay
  activeCategory = getCategoryFromURL();

  // Renderizar barra de filtros con la categoría activa
  renderFilterBar(activeCategory);

  // Renderizar listado de posts con el filtro aplicado
  renderBlogList(activeCategory);

  // Scroll reveal para elementos que entran al viewport
  initScrollReveal();
}

// Ejecutar al cargar el DOM
document.addEventListener('DOMContentLoaded', initBlogPage);
