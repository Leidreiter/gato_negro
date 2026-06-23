/**
 * GATO NEGRO — render.js
 * =============================================
 * Funciones de renderizado dinámico.
 * Transforma los objetos de data.js en
 * HTML insertado en el DOM.
 *
 * Todas las funciones devuelven strings HTML
 * o manipulan el DOM directamente.
 * =============================================
 */

/**
 * Genera el HTML de una tarjeta de post.
 * Usada en Home, Blog y Posts relacionados.
 *
 * @param {Object}  post       - Objeto del post (de POSTS en data.js)
 * @param {boolean} isFeatured - Si true, aplica layout horizontal hero
 * @returns {string} HTML de la tarjeta
 */
function renderPostCard(post, isFeatured = false) {
  return `
    <article
      class="post-card ${isFeatured ? 'post-card--featured' : ''}"
      onclick="openPost(${post.id})"
      role="button"
      tabindex="0"
      aria-label="Leer articulo: ${escapeHtml(post.title)}"
      onkeydown="if(event.key === 'Enter') openPost(${post.id})"
    >
      <div class="post-card__img-wrap">
        <img
          class="post-card__img"
          src="${post.image}"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="post-card__body">
        <div class="post-card__meta">
          <span class="post-card__cat">${escapeHtml(post.category)}</span>
          <time class="post-card__date" datetime="${post.dateISO}">${post.date}</time>
          <span class="post-card__read-time">${post.readTime} de lectura</span>
        </div>
        <h3 class="post-card__title">${escapeHtml(post.title)}</h3>
        <p class="post-card__excerpt">${escapeHtml(post.excerpt)}</p>
        <span class="post-card__read" aria-hidden="true">
          Leer articulo <i class="fa-solid fa-arrow-right fa-xs"></i>
        </span>
      </div>
    </article>
  `;
}

/**
 * Renderiza la pagina completa de un post individual.
 * Inyecta todos los datos del post en los elementos
 * correspondientes del template post.html.
 *
 * @param {Object} post - Objeto del post a renderizar
 */
function renderPostPage(post) {
  if (!post) {
    console.error('renderPostPage: post no encontrado');
    return;
  }

  // --- Metadata (categoría, fecha, tiempo de lectura) ---
  const metaEl = document.getElementById('postMeta');
  if (metaEl) {
    metaEl.innerHTML = `
      <span class="post-header__cat">${escapeHtml(post.category)}</span>
      <time class="post-header__date" datetime="${post.dateISO}">${post.date}</time>
      <span class="post-header__sep" aria-hidden="true">·</span>
      <span class="post-header__read-time">${post.readTime} de lectura</span>
    `;
  }

  // --- Titulo ---
  const titleEl = document.getElementById('postTitle');
  if (titleEl) titleEl.textContent = post.title;

  // --- Excerpt / bajada ---
  const excerptEl = document.getElementById('postExcerpt');
  if (excerptEl) excerptEl.textContent = post.excerpt;

  // --- Imagen destacada ---
  const imgEl = document.getElementById('postImg');
  if (imgEl) {
    imgEl.src = post.image;
    imgEl.alt = `Imagen de portada: ${post.title}`;
  }

  // --- Cuerpo del articulo (HTML del content) ---
  const bodyEl = document.getElementById('postBody');
  if (bodyEl) {
    // El content es HTML de confianza (viene de data.js, no del usuario)
    bodyEl.innerHTML = post.content;
  }

  // --- Tags ---
  const tagsEl = document.getElementById('postTags');
  if (tagsEl) {
    tagsEl.innerHTML = post.tags
      .map(tag => `<span class="post-tag">#${escapeHtml(tag)}</span>`)
      .join('');
  }

  // --- Posts relacionados ---
  renderRelatedPosts(post);

  // --- Actualizar titulo de la pagina ---
  document.title = `${post.title} — Gato Negro`;
}

/**
 * Renderiza la grilla de posts relacionados.
 * Busca posts de la misma categoría, excluye el actual.
 * Si no hay suficientes de la misma categoría,
 * completa con otros posts del archivo.
 *
 * @param {Object} currentPost - Post que  se está leyendo actualmente
 */
function renderRelatedPosts(currentPost) {
  const container = document.getElementById('relatedPosts');
  if (!container) return;

  // Buscar misma categoría primero
  const sameCategory = POSTS.filter(
    p => p.id !== currentPost.id && p.category === currentPost.category
  );

  // Si no hay suficientes, completar con otros
  const others = POSTS.filter(
    p => p.id !== currentPost.id && p.category !== currentPost.category
  );

  const related = [...sameCategory, ...others].slice(0, 3);

  if (related.length === 0) {
    container.closest('.related')?.remove();
    return;
  }

  container.innerHTML = related.map(p => renderPostCard(p)).join('');
}

/**
 * Renderiza el listado de posts en blog.html
 * con soporte para filtrado por categoría.
 *
 * @param {string} categoryFilter - Categoría activa ('Todos' o nombre específico)
 */
function renderBlogList(categoryFilter = 'Todos') {
  const container = document.getElementById('blogList');
  const countEl   = document.getElementById('postsCount');

  if (!container) return;

  // Filtrar posts
  const filtered = categoryFilter === 'Todos'
    ? POSTS
    : POSTS.filter(p => p.category === categoryFilter);

  // Actualizar contador
  if (countEl) {
    countEl.textContent = `${filtered.length} articulo${filtered.length !== 1 ? 's' : ''}`;
  }

  // Renderizar cards
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="padding: 4rem; text-align: center; color: var(--text-muted); font-family: var(--font-mono); font-size: 0.75rem; letter-spacing: 0.1em;">
        No hay artículos en esta categoría aún.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => renderPostCard(p)).join('');
}

/**
 * Renderiza el grid de posts en la home.
 * El post featured ocupa la primera posicion en layout hero.
 * Le siguen los proximos 2 posts no featured.
 */
function renderHomePosts() {
  const container = document.getElementById('homePosts');
  if (!container) return;

  const featured = POSTS.find(p => p.featured);
  const rest = POSTS.filter(p => !p.featured).slice(0, 2);

  let html = '';
  if (featured) html += renderPostCard(featured, true);
  rest.forEach(p => { html += renderPostCard(p); });

  container.innerHTML = html;
}

/**
 * Renderiza los tags de categoría en la strip de la home.
 */
function renderHomeTagStrip() {
  const container = document.getElementById('homeTagStrip');
  if (!container) return;

  container.innerHTML = CATEGORIES.slice(1) // quitar 'Todos'
    .map(cat => `
      <a href="blog.html?cat=${encodeURIComponent(cat)}" class="featured-strip__tag">
        ${escapeHtml(cat)}
      </a>
    `)
    .join('');
}

/**
 * Renderiza los links de categorías en el footer de la home.
 */
function renderFooterCategories() {
  const container = document.getElementById('footerCatLinks');
  if (!container) return;

  container.innerHTML = CATEGORIES.slice(1)
    .map(cat => `
      <li>
        <a class="footer__link" href="blog.html?cat=${encodeURIComponent(cat)}">
          ${escapeHtml(cat)}
        </a>
      </li>
    `)
    .join('');
}

/**
 * Renderiza los botones de filtro de categorías en blog.html.
 *
 * @param {string} activeCategory - Categoría actualmente seleccionada
 */
function renderFilterBar(activeCategory = 'Todos') {
  const container = document.getElementById('filterBar');
  if (!container) return;

  container.innerHTML = CATEGORIES.map(cat => `
    <button
      class="filter-btn ${cat === activeCategory ? 'active' : ''}"
      onclick="applyFilter('${escapeHtml(cat)}')"
      aria-pressed="${cat === activeCategory}"
    >
      ${escapeHtml(cat)}
    </button>
  `).join('');
}

// =============================================
// UTILIDADES
// =============================================

/**
 * Escapa caracteres HTML para prevenir XSS
 * cuando se inserta contenido de usuario o data.
 *
 * @param {string} str - Cadena a escapar
 * @returns {string} Cadena escapada
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
