/**
 * GATO NEGRO — data.js
 * =============================================
 * Fuente central de datos del blog.
 * Todos los posts se definen aquí como objetos
 * dentro del array POSTS.
 *
 * Para agregar un nuevo post, copiar un bloque
 * existente, asignar un id único y completar
 * todos los campos.
 *
 * Estructura de cada post:
 * {
 *   id:        Number  — identificador único
 *   slug:      String  — URL-friendly, sin espacios
 *   title:     String  — título completo
 *   excerpt:   String  — resumen (1-3 oraciones)
 *   category:  String  — debe coincidir con CATEGORIES
 *   date:      String  — fecha legible: "12 Dic 2025"
 *   dateISO:   String  — formato ISO para ordenamiento
 *   readTime:  String  — ej: "8 min"
 *   image:     String  — URL de imagen destacada
 *   featured:  Boolean — solo uno debe ser true
 *   tags:      Array   — keywords del articulo
 *   content:   String  — HTML del cuerpo del articulo
 * }
 * =============================================
 */

const POSTS = [
  {
    id: 1,
    slug: "jerarquia-visual-principios",
    title: "Jerarquía visual: el principio que separa el diseño amateur del profesional",
    excerpt: "La jerarquía visual no es un concepto decorativo. Es la arquitectura cognitiva que guía al usuario a través de tu interfaz sin que tenga que pensar. Aprender a dominarla cambia la forma en que construyes cualquier pantalla.",
    category: "Fundamentos UX",
    date: "12 Dic 2025",
    dateISO: "2025-12-12",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    featured: true,
    tags: ["jerarquía", "tipografía", "layout", "fundamentos"],
    content: `
      <h2>Por qué la jerarquía visual es fundamental</h2>
      <p>Cuando un usuario llega a tu interfaz, su cerebro procesa la información visual en milisegundos antes de que el pensamiento consciente entre en juego. La jerarquía visual es el sistema que le dice a ese cerebro: <em>esto primero, luego esto, después aquello</em>.</p>
      <p>Sin jerarquía, todo tiene el mismo peso. Y cuando todo tiene el mismo peso, nada importa. El usuario se pierde, se frustra y se va. Con jerarquía bien construida, el usuario fluye a través de tu contenido como el agua sigue la pendiente.</p>
      <blockquote><p>El diseño no organiza la estética. Organiza la atención.</p></blockquote>
      <h2>Los seis pilares de la jerarquia visual</h2>
      <h3>1. Tamaño y escala</h3>
      <p>El elemento más importante debe ser el más grande. Simple, pero frecuentemente ignorado. El tamaño es la señal más primitiva de importancia que nuestro cerebro reconoce. Un título que compite en tamaño con el cuerpo del texto no es un título — es ruido.</p>
      <p>En diseño de interfaces, la escala tipográfica es tu herramienta principal. Una escala bien definida (por ejemplo: 48px, 32px, 24px, 18px, 14px) crea distinción inmediata entre niveles de información.</p>
      <h3>2. Contraste y valor tonal</h3>
      <p>El contraste no es solo color sobre color. Es la diferencia perceptual entre elementos adyacentes. Texto oscuro sobre fondo claro, un boton solido rodeado de elementos outline, un componente iluminado en un fondo oscuro: todos crean jerarquía a través del contraste.</p>
      <p>La regla práctica: el elemento de mayor importancia debe tener el mayor contraste con su entorno inmediato.</p>
      <h3>3. Color y saturación</h3>
      <p>Los elementos de acento en color saturado sobre un fondo neutro sobresalen inmediatamente. Esto es por eso que los botones de CTA usan color mientras el resto de la interfaz es más sobria. El color es una palanca de atención poderosa pero que se gasta rápido: úsala con moderación.</p>
      <h3>4. Posición y espacio</h3>
      <p>En culturas de lectura occidental, el ojo escanea en patron F o Z: de izquierda a derecha, de arriba a abajo. Lo que coloques en la esquina superior izquierda será lo primero visto. Los patrones de lectura son predecibles — y eso es una ventaja para el diseñador.</p>
      <p>El espacio en blanco no es espacio vacío. Es el silencio que hace que la música suene. Un elemento rodeado de espacio tiene mayor peso visual que uno apretado entre otros elementos.</p>
      <h3>5. Tipografia y peso</h3>
      <p>La tipografía tiene su propio sistema de jerarquía interno: peso (light, regular, bold), estilo (normal, itálico), casing (mayúsculas, minúsculas, small caps) y tracking (espaciado entre letras). Un texto en bold italic mayúsculas con tracking abierto grita. Un texto en light regular minúsculas susurra. Asegúrate de que el volumen correcto esté en el lugar correcto.</p>
      <h3>6. Repetición y consistencia</h3>
      <p>La jerarquía funciona porque el usuario aprende el sistema. Si tu H1 siempre es de 48px en Cormorant, el usuario aprende que ese es el nivel más importante. Romper la consistencia rompe la jerarquía. La repetición de patrones visuales crea expectativa y confianza.</p>
      <h2>Aplicación práctica: el ejercicio del grayscale</h2>
      <p>Una técnica infalible para evaluar tu jerarquía: convierte tu diseño a escala de grises. Sin color, lo que queda es solo valor tonal, tamaño y espacio. Si en grayscale tu elemento principal no sobresale, el color estaba haciendo trabajo que la jerarquía debería hacer sola. El color debe amplificar la jerarquía, no crearla.</p>
      <pre><code>/* Jerarquía tipográfica con CSS custom properties */
:root {
  --text-xs:   0.75rem;
  --text-sm:   0.875rem;
  --text-base: 1rem;
  --text-lg:   1.125rem;
  --text-xl:   1.25rem;
  --text-2xl:  1.5rem;
  --text-3xl:  1.875rem;
  --text-4xl:  2.25rem;

  --font-light:   300;
  --font-regular: 400;
  --font-medium:  500;
  --font-bold:    700;
}</code></pre>
      <h2>El error más común: dar prioridad a todo</h2>
      <p>Cuando todo es importante, nada lo es. Este es el error más frecuente en interfaces diseñadas por developers sin background en diseño: cada sección tiene el mismo peso, cada botón el mismo estilo, cada título el mismo tamaño. El resultado es una interfaz democraticamente equitativa y completamente ilegible.</p>
      <p>La jerarquía requiere decisión. Requiere elegir qué es lo más importante y degradar todo lo demás en relación a eso. Es un acto de edición, no de adición. Aprende a editar tu diseño con tanta rigurosidad como editas tu código.</p>
    `
  },

  {
    id: 2,
    slug: "sistemas-diseño-developers",
    title: "Cómo construir un sistema de diseño desde cero siendo developer",
    excerpt: "Los sistemas de diseño no son solo para diseñadores. Son la documentación viva de tu interfaz. Aprende a construir uno que escale, que sea mantenible y que tu equipo realmente use.",
    category: "Sistemas de Diseño",
    date: "28 Nov 2025",
    dateISO: "2025-11-28",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1544931170-0920e5c4158a?w=1200&q=80",
    featured: false,
    tags: ["design system", "css", "componentes", "escalabilidad"],
    content: `
      <h2>Un sistema de diseño no es una librería de componentes</h2>
      <p>Esta es la confusión más común cuando un equipo de desarrollo decide "hacer un design system". Crean un Storybook con botones y inputs, lo llaman sistema de diseño y siguen adelante. Lo que tienen es una librería de componentes — algo útil, pero no lo mismo.</p>
      <p>Un sistema de diseño es el conjunto de decisiones, principios, patrones y herramientas que gobiernan cómo se construye la interfaz de un producto. Incluye los componentes, sí, pero también los tokens de diseño, la documentación de patrones, las guías de uso y los principios que los sostienen.</p>
      <blockquote><p>Un sistema de diseño es una conversación cristalizada entre diseño y desarrollo. Es el lenguaje común del equipo.</p></blockquote>
      <h2>Los tokens: el fundamento del sistema</h2>
      <p>Antes de construir un solo componente, necesitas definir tus tokens de diseño. Los tokens son los valores atómicos del sistema: colores, tamaños tipográficos, espaciados, radios de borde, sombras. Todo lo demás se construye sobre ellos.</p>
      <pre><code>/* Tokens de color */
:root {
  --color-background:  #0a0a0a;
  --color-surface:     #181818;
  --color-border:      rgba(255, 255, 255, 0.06);
  --color-text:        #e8e4dc;
  --color-text-muted:  #7a7570;
  --color-accent:      #c49c52;

  /* Tokens de espacio */
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-4:  1rem;
  --space-8:  2rem;
  --space-16: 4rem;

  /* Tokens tipográficos */
  --font-sans:    'Syne', sans-serif;
  --font-display: 'Cormorant Garamond', serif;
  --font-mono:    'DM Mono', monospace;
}</code></pre>
      <h3>Por qué los tokens importan</h3>
      <p>Los tokens permiten cambiar el "tema" del sistema modificando valores en un solo lugar. Quieres hacer un modo claro? Cambias los tokens de color. Quieres ajustar el espaciado? Cambias los tokens de espacio. Sin tokens, ese cambio requiere tocar decenas de archivos.</p>
      <h2>Construyendo el sistema de manera incremental</h2>
      <p>El error clásico es intentar diseñar el sistema completo antes de construirlo. Los sistemas de diseño que funcionan crecen de forma orgánica desde componentes reales, necesidades reales. Empieza por los componentes que usas en cada pantalla: el botón, el input, la card, el modal.</p>
      <h3>Documentación: la parte que nadie quiere hacer</h3>
      <p>Un componente sin documentación es un componente que el equipo va a reimplementar mal seis meses después. La documentación no es un lujo — es el mecanismo por el que el sistema escala. Para cada componente, documenta: propósito, cuando usarlo y cuando NO, variantes, estados, consideraciones de accesibilidad y ejemplos de uso.</p>
      <h2>Accesibilidad como parte del sistema</h2>
      <p>El sistema de diseño es el lugar perfecto para enfocar accesibilidad de forma sistemática. Si tus tokens de color tienen contraste suficiente, todos los componentes que los usen serán accesibles por defecto. La accesibilidad que se implementa en el sistema cuesta mucho menos que la accesibilidad que se agrega luego, componente por componente.</p>
    `
  },

  {
    id: 3,
    slug: "micro-interacciones-confianza",
    title: "Micro-interacciones: como los detalles construyen confianza en tu producto",
    excerpt: "Las micro-interacciones son el lenguaje no verbal de tu interfaz. Comunican estado, dan feedback y crean la diferencia entre una interfaz que se siente viva y una que se siente muerta. Y no necesitas un motion designer para implementarlas.",
    category: "Motion & UI",
    date: "15 Nov 2025",
    dateISO: "2025-11-15",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    featured: false,
    tags: ["micro-interacciones", "animación", "css", "feedback"],
    content: `
      <h2>El feedback silencioso que lo cambia todo</h2>
      <p>Hay una diferencia perceptible entre usar una aplicación que "funciona" y usar una que se "siente bien". Esa diferencia, la mayor parte del tiempo, no viene de las features sino de las micro-interacciones. Son el feedback constante, silencioso, que le dice al usuario que la interfaz lo está escuchando.</p>
      <blockquote><p>Las micro-interacciones no son decoración. Son el acuse de recibo de la interfaz.</p></blockquote>
      <h2>Los cuatro tipos de micro-interacciones esenciales</h2>
      <h3>1. Feedback de estado</h3>
      <p>El usuario necesita saber que su acción fue registrada. Un boton que no da feedback visual cuando es clickeado genera incertidumbre. El feedback de estado puede ser tan simple como un cambio de color o tan elaborado como una animación de transformación, pero debe existir.</p>
      <pre><code>/* Feedback de presion en boton */
.btn {
  transition: transform 0.1s ease, box-shadow 0.15s ease;
}
.btn:active {
  transform: translateY(1px) scale(0.99);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
}</code></pre>
      <h3>2. Transiciones de estado</h3>
      <p>Cuando la interfaz cambia de un estado a otro — loading a loaded, collapsed a expanded — la transición debe ser suave. Los cambios abruptos rompen la continuidad cognitiva del usuario. Tu cerebro espera continuidad física; cuando un elemento aparece de la nada, tienes que procesar su existencia desde cero.</p>
      <h3>3. Validación en tiempo real</h3>
      <p>Los formularios son el lugar donde las micro-interacciones tienen mayor impacto. La validación inline reduce el error y la frustración de manera significativa. Un campo que se vuelve verde cuando el input es válido, o que muestra un mensaje de error claro cuando no lo es, convierte un formulario en una experiencia asistida.</p>
      <h3>4. Estados de carga</h3>
      <p>Los estados de carga son momentos de ansiedad potencial. Un buen estado de carga transforma la espera en paciencia. Le dice al usuario: estamos en ello, espera un segundo.</p>
      <h2>Principios de animación para developers</h2>
      <p><strong>Duración apropiada:</strong> Entre 100ms y 300ms para feedback de acción, hasta 400ms para transiciones de estado. Las animaciones lentas se sienten lentas — y eso mata la percepción de performance.</p>
      <p><strong>Easing natural:</strong> Evita las curvas lineales. El movimiento lineal se siente mecánico. Usa <code>ease-out</code> para elementos que entran, <code>ease-in</code> para los que salen.</p>
      <pre><code>/* Curvas de easing recomendadas */
:root {
  --ease-out:    cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-in:     cubic-bezier(0.4, 0.0, 1, 1);
  --ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
}</code></pre>
      <h2>Accesibilidad y reducción de movimiento</h2>
      <p>Algunas personas con condiciones vestibulares pueden ser afectadas negativamente por animaciones. Implementar la media query de reducción de movimiento es literalmente cinco líneas de código:</p>
      <pre><code>@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}</code></pre>
    `
  },

  {
    id: 4,
    slug: "tipografía-web-principios",
    title: "Tipografía para interfaces: lo que todo developer necesita saber",
    excerpt: "La tipografía bien ejecutada es invisible. La tipografía mal ejecutada arruina incluso los mejores diseños. Estos son los principios que marcan la diferencia entre texto que se lee y texto que se descifra.",
    category: "Fundamentos UX",
    date: "3 Nov 2025",
    dateISO: "2025-11-03",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
    featured: false,
    tags: ["tipografía", "legibilidad", "web fonts", "css"],
    content: `
      <h2>La tipografía como decisión de UX</h2>
      <p>La mayor parte del contenido en la web es texto. Eso hace a la tipografía una decisión de UX fundamental, no estética. Una tipografía mal calibrada — con interlineado insuficiente, tamaño de fuente demasiado chico, longitud de línea excesiva — no solo se ve mal. Se lee peor.</p>
      <h2>Tamano de fuente: más grande de lo que crees</h2>
      <p>El cuerpo de texto en interfaces modernas debe estar entre 16px y 20px. La investigación sobre lectura en pantalla es clara: menores de 16px aumentan la fatiga ocular y disminuyen la velocidad de lectura. En mobile, considera 17px o 18px como base.</p>
      <h2>Interlineado: el espacio que hace respirar al texto</h2>
      <p>El interlineado (line-height) es probablemente el parámetro más ignorado y más impactante de la tipografía web. Para cuerpo de texto, un interlineado entre 1.5 y 1.7 es el rango óptimo. Para títulos grandes, bajar a 1.0–1.2 funciona bien.</p>
      <pre><code>/* Escala tipográfica recomendada */
body {
  font-size: 1rem;        /* 16px */
  line-height: 1.65;
}

h1 { font-size: 3.5rem;  line-height: 1.1; }
h2 { font-size: 2.25rem; line-height: 1.2; }
h3 { font-size: 1.5rem;  line-height: 1.3; }
h4 { font-size: 1.125rem; line-height: 1.4; }</code></pre>
      <h2>Longitud de línea: la regla de los 65 caracteres</h2>
      <p>La longitud de línea óptima para cuerpo de texto es entre 45 y 75 caracteres. El sweet spot está cerca de los 65. En CSS, <code>max-width: 65ch</code> implementa esto directamente.</p>
      <h2>Jerarquía tipográfica en código</h2>
      <p>Define tu escala tipográfica con CSS Custom Properties y úsala consistentemente. Una escala modular — donde cada nivel es el anterior multiplicado por una razón constante — garantiza armonía visual matemática. Las razones más usadas son 1.25 (quinta mayor) y 1.333 (cuarta perfecta).</p>
      <pre><code>/* Escala modular 1.25 */
:root {
  --step--1: clamp(0.80rem, 0.79vw + 0.64rem, 1.00rem);
  --step-0:  clamp(1.00rem, 0.99vw + 0.80rem, 1.25rem);
  --step-1:  clamp(1.25rem, 1.24vw + 1.00rem, 1.56rem);
  --step-2:  clamp(1.56rem, 1.55vw + 1.25rem, 1.95rem);
  --step-3:  clamp(1.95rem, 1.94vw + 1.56rem, 2.44rem);
  --step-4:  clamp(2.44rem, 2.42vw + 1.95rem, 3.05rem);
}</code></pre>
    `
  },

  {
    id: 5,
    slug: "accesibilidad-no-es-opcional",
    title: "Accesibilidad web: por que no es una feature sino una base",
    excerpt: "La accesibilidad no es un checklist de compliance ni una feature para un sprint futuro. Es diseño bien hecho. Y cuando la implementas correctamente desde el principio, mejora la experiencia para absolutamente todos tus usuarios.",
    category: "Accesibilidad",
    date: "20 Oct 2025",
    dateISO: "2025-10-20",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1200&q=80",
    featured: false,
    tags: ["accesibilidad", "a11y", "WCAG", "semantica"],
    content: `
      <h2>El mito de que la accesibilidad es para minoria</h2>
      <p>Más del 15% de la población mundial tiene alguna forma de discapacidad (WHO). Pero más alla de eso, todos experimentamos discapacidades contextuales: una persona usando el teléfono con una mano ocupada, alguien en un ambiente ruidoso sin poder escuchar audio. La accesibilidad bien hecha los sirve a todos.</p>
      <blockquote><p>El diseño accesible no agrega limitaciones. Elimina barreras innecesarias.</p></blockquote>
      <h2>Los cuatro principios WCAG</h2>
      <p>Las Web Content Accessibility Guidelines (WCAG) organizan la accesibilidad en cuatro principios: <strong>Perceptible</strong>, <strong>Operable</strong>, <strong>Comprensible</strong>, y <strong>Robusto</strong>.</p>
      <h3>Perceptible</h3>
      <p>El contenido debe ser presentable de formas que los usuarios puedan percibir. Esto incluye: texto alternativo para imágenes, subtítulos para video, contraste suficiente (mínimo 4.5:1 para texto normal), y no usar solo color para comunicar información.</p>
      <h3>Operable</h3>
      <p>Todo lo que se puede hacer con mouse debe poder hacerse con teclado. El foco debe ser siempre visible. Los usuarios de lectores de pantalla deben poder operar tu interfaz.</p>
      <pre><code>/* Focus visible obligatorio */
:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 3px;
  border-radius: 2px;
}

/* Nunca hacer esto */
:focus { outline: none; }</code></pre>
      <h3>Comprensible</h3>
      <p>Lenguaje claro, etiquetas de formulario correctas, mensajes de error útiles (no solo "error" — sino "El email debe tener el formato nombre@ejemplo.com"), y comportamiento predecible.</p>
      <h3>Robusto</h3>
      <p>HTML semántico es la base: usar los elementos correctos para su propósito. Los atributos ARIA complementan la semántica cuando HTML no alcanza, pero nunca reemplazan al HTML semántico.</p>
      <h2>Lo que puedes implementar hoy</h2>
      <p><strong>HTML semantico:</strong> header, nav, main, section, article y footer bien estructurados dan a los lectores de pantalla un mapa del documento. Cuesta cero esfuerzo adicional si lo haces desde el principio.</p>
      <p><strong>Contraste de color:</strong> Verifica con herramientas como WebAIM Contrast Checker. El nivel AA requiere 4.5:1 para texto normal.</p>
      <p><strong>Texto alternativo:</strong> Toda imagen que comunica información necesita un <code>alt</code> descriptivo. Las imágenes decorativas deben tener <code>alt=""</code>.</p>
      <p><strong>Etiquetas de formulario:</strong> Cada input debe tener un <code>label</code> asociado correctamente. El placeholder no es un label.</p>
    `
  }
];

/**
 * Categorias extraidas automaticamente de los posts.
 * "Todos" se agrega como primera opción para el filtro.
 */
const CATEGORIES = ['Todos', ...new Set(POSTS.map(p => p.category))];
