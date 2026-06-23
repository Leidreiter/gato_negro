# Gato Negro

Blog personal sobre UX/UI, diseño de interfaces y desarrollo frontend. Artículos sobre jerarquía visual, sistemas de diseño, micro-interacciones, tipografía web y accesibilidad.

## Stack

- HTML, CSS y JavaScript vanilla
- Sin frameworks ni build tools
- Diseño oscuro con tipografía serif para títulos y sans-serif para cuerpo

## Estructura

```
├── index.html      Home con hero y últimas entradas
├── blog.html       Archivo completo con filtro por categorías
├── post.html       Template de artículo individual (ruteo por ?id=)
├── about.html      Sobre el autor
├── contact.html    Formulario de contacto
├── css/
│   ├── variables.css   Tokens de diseño (colores, tipografía, espacio)
│   ├── base.css        Estilos base y resets
│   ├── nav.css         Navegación con scroll swap de logo
│   ├── components.css  Componentes reutilizables
│   └── pages.css       Estilos específicos de páginas
├── js/
│   ├── data.js         Fuente central de datos del blog
│   ├── render.js       Renderizado dinámico de componentes
│   ├── main.js         Inicialización y scroll handlers
│   ├── blog.js         Filtrado y lógica del blog
│   ├── post.js         Carga de artículo individual
│   ├── contact.js      Validación y envío de formulario
│   └── templates.js    Header/footer dinámicos
└── img/
    ├── logo.svg        Logo completo
    └── favicon.svg     Favicon (ícono simplificado)
```

## Posts

Actualmente 5 artículos publicados. Los datos viven en `js/data.js` como objetos en el array `POSTS`.
