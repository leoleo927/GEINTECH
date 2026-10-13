# GEINTECH – Landing page

Sitio web de **GEINTECH – Gestión Integral y Tecnología S.A.C.**, migrado desde WordPress.

**Stack:** [Astro](https://astro.build) · [Tailwind CSS v4](https://tailwindcss.com) · despliegue en [Vercel](https://vercel.com).

## Comandos

| Comando           | Acción                                          |
| ----------------- | ----------------------------------------------- |
| `npm install`     | Instala dependencias (Node ≥ 22.12)             |
| `npm run dev`     | Servidor local en `http://localhost:4321`       |
| `npm run check`   | Revisa tipos y errores en componentes           |
| `npm run build`   | Genera el sitio estático en `dist/`             |
| `npm run preview` | Sirve localmente el build de producción         |

## Estructura

```
src/
├── assets/
│   ├── brand/          # Logo e isotipo (PNG)
│   └── services/       # Imágenes de servicios (PNG)
├── components/
│   ├── layout/         # Header (navegación) y Footer
│   ├── sections/       # Secciones de la landing: Hero, About, Services, Contact
│   └── ui/             # Piezas reutilizables: Button, Icon, SectionHeading
├── data/               # ✏️ Todo el contenido editable (textos, contacto, servicios)
│   ├── site.ts
│   ├── about.ts
│   └── services.ts
├── layouts/
│   └── BaseLayout.astro  # <head>, SEO, header y footer comunes
├── pages/
│   ├── index.astro       # Landing (Inicio, Nosotros, Servicios, Contáctanos)
│   └── 404.astro
├── scripts/
│   └── reveal.ts         # Animación de aparición al hacer scroll
└── styles/
    └── global.css        # Tailwind + colores de marca (@theme)
```

## Aula Virtual (Moodle)

El botón "Aula Virtual" lleva al login del Moodle alojado en SiteGround (`virtualClassroomUrl` en
`src/data/site.ts`). Los estilos para personalizar ese login están en [`moodle/`](moodle/README.md).

## Cómo editar contenido

- **Textos, teléfono, correo, dirección:** `src/data/site.ts`
- **Misión, visión, valores y cifras:** `src/data/about.ts`
- **Servicios:** `src/data/services.ts`. Para agregar una imagen, guarda el PNG en `src/assets/services/`, impórtalo y asígnalo al campo `image`.
- **Colores de marca:** variables `--color-brand-*` en `src/styles/global.css`.

Las imágenes se procesan con `astro:assets` manteniendo el formato **PNG** (`format="png"`).
Las fotos actuales son de Unsplash (uso comercial libre); el detalle está en `src/assets/CREDITS.md`.
Antes de agregar una foto nueva, redúcela a su ancho máximo de uso (≈800 px para servicios,
≈1600 px para el fondo del inicio) para que la página cargue rápido.

## Despliegue en Vercel

1. Sube el repositorio a GitHub.
2. En Vercel: **Add New → Project**, importa el repo. Detecta Astro automáticamente.
3. En Vercel → **Settings → Domains**, agrega `geintech.com.pe` y `www.geintech.com.pe`.

### Dominio (actualmente en SiteGround)

El dominio `geintech.com.pe` hoy apunta al WordPress en SiteGround. Para el cambio, en
**SiteGround → Site Tools → Dominio → Zona DNS**:

| Tipo  | Nombre | Valor                  |
| ----- | ------ | ---------------------- |
| A     | `@`    | `76.76.21.21`          |
| CNAME | `www`  | `cname.vercel-dns.com` |

> ⚠️ **No borrar los registros MX** si el correo `@geintech.com.pe` está en SiteGround.
> ⚠️ El Aula Virtual (Moodle) vive en `geintech.com.pe/aulavirtual` dentro de SiteGround. Al
> apuntar el dominio a Vercel esa ruta deja de funcionar: conviene moverla a un subdominio
> (p. ej. `aula.geintech.com.pe`) que siga en SiteGround, y luego cambiar
> `virtualClassroomUrl` en `src/data/site.ts`.
