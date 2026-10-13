# Mover el Aula Virtual (Moodle) a aula.geintech.com.pe

**Qué se hace:** el Moodle sigue en SiteGround, con los mismos cursos, usuarios y datos. Solo cambia su
dirección: de `https://geintech.com.pe/aulavirtual` a `https://aula.geintech.com.pe`.

**Por qué:** la web nueva se publicará en Vercel y el dominio `geintech.com.pe` dejará de apuntar a
SiteGround. Si el Moodle sigue colgado de ese dominio (`/aulavirtual`), dejará de abrirse.

**Cuándo:** esto se hace **antes** de cambiar el DNS del dominio principal. Mientras no se cambie el DNS,
el WordPress actual sigue funcionando con normalidad.

**Tiempo estimado:** 30 a 60 minutos. Conviene hacerlo en un horario con pocos alumnos conectados.

| Dato actual | Valor |
| --- | --- |
| Moodle | 4.5, tema Boost |
| Dirección actual | `https://geintech.com.pe/aulavirtual` |
| Dirección nueva | `https://aula.geintech.com.pe` |
| Hosting | SiteGround |

---

## 0. Antes de empezar

- [ ] **Respaldo completo.** En SiteGround → *Site Tools → Seguridad → Copias de seguridad*, crea una copia
  manual. Además, descarga una copia de la base de datos (*Sitio → MySQL → phpMyAdmin → Exportar*).
- [ ] **Anota la ruta de `moodledata`** (la carpeta de datos de Moodle). Está en el archivo `config.php`, en
  la línea `$CFG->dataroot`. No se mueve ni se modifica: solo conviene saber dónde está.
- [ ] **Anota las tareas programadas (cron).** En *Site Tools → Desarrollo → Cron Jobs*, revisa si hay una tarea
  que ejecute el cron de Moodle. Su ruta incluye la carpeta `aulavirtual` y habrá que actualizarla (paso 5).
- [ ] **Activa el modo mantenimiento de Moodle** (*Administración del sitio → Servidor → Modo mantenimiento*)
  para que nadie trabaje durante el cambio.

## 1. Crear el subdominio

1. En SiteGround → *Site Tools → Dominio → Subdominios*.
2. Crea el subdominio **`aula`** sobre `geintech.com.pe`.
3. SiteGround crea una carpeta para él, normalmente `public_html/aula.geintech.com.pe`, y agrega el registro
   DNS automáticamente. **No borres ese registro DNS nunca**: la web nueva no lo toca, pero el Moodle
   depende de él.

## 2. Mover los archivos de Moodle

1. En *Site Tools → Sitio → Administrador de archivos*, entra a `public_html`.
2. **Mueve** (no copies) **todo el contenido** de la carpeta `aulavirtual` a la carpeta del subdominio
   (`aula.geintech.com.pe`). Incluye los archivos ocultos, en especial `.htaccess`.
3. La carpeta `moodledata` **no se mueve** y su ruta en `config.php` no cambia.

> Desde este punto la dirección vieja (`/aulavirtual`) deja de funcionar. Es lo esperado.
>
> Si prefieres no mover los archivos, pídele a soporte de SiteGround que apunte el subdominio `aula` a la
> carpeta actual del Moodle.

## 3. Instalar el certificado HTTPS del subdominio

1. *Site Tools → Seguridad → Administrador SSL*.
2. Selecciona `aula.geintech.com.pe` e instala **Let's Encrypt**.
3. Puede tardar unos minutos. No sigas hasta que el certificado aparezca como activo.

## 4. Cambiar la dirección en la configuración de Moodle

1. Abre `config.php` (en la raíz de la carpeta nueva) y edita **solo** esta línea:

   ```php
   $CFG->wwwroot = 'https://aula.geintech.com.pe';
   ```

   Sin barra al final. No cambies `dbhost`, `dbname`, `dbuser`, `dbpass` ni `dataroot`.

2. Guarda y abre `https://aula.geintech.com.pe/login/index.php`. Debe mostrar el login.

## 5. Actualizar el cron y limpiar cachés

- [ ] **Cron:** en *Cron Jobs*, cambia la ruta de la tarea de Moodle de `.../aulavirtual/admin/cli/cron.php` a
  la ruta de la carpeta nueva (`.../aula.geintech.com.pe/admin/cli/cron.php`).
- [ ] **Cachés:** *Administración del sitio → Desarrollo → Purgar todas las cachés*.
- [ ] **Apaga el modo mantenimiento.**

## 6. Revisar enlaces con la dirección vieja (opcional, recomendable)

Si en los cursos hay textos, páginas o etiquetas con enlaces escritos como
`https://geintech.com.pe/aulavirtual/...`, esos enlaces seguirán apuntando a la dirección vieja.

1. Haz un respaldo de la base de datos si no lo hiciste.
2. *Administración del sitio → Desarrollo → Buscar y reemplazar en toda la base de datos*
   (`/admin/tool/replace/`).
3. Buscar: `https://geintech.com.pe/aulavirtual` → Reemplazar por: `https://aula.geintech.com.pe`.
4. Al terminar, purga las cachés otra vez.

## 7. Pruebas

- [ ] Iniciar sesión con un usuario de prueba.
- [ ] Entrar como invitado y abrir un curso con acceso de invitados.
- [ ] Abrir un curso con un recurso (PDF o video) y una actividad.
- [ ] Cambiar de idioma y volver.
- [ ] "¿Olvidó su contraseña?": enviar el correo y comprobar que el enlace del mensaje usa
  `aula.geintech.com.pe`.
- [ ] Confirmar que el cron corre (*Administración del sitio → Servidor → Tareas → Tareas programadas*:
  la fecha de la última ejecución debe actualizarse en pocos minutos).

## 8. Avisar al desarrollador de la web

Cuando todo lo anterior funcione, avisar para que:

1. Cambie el botón "Aula Virtual" de la web a `https://aula.geintech.com.pe`.
2. Agregue en la web una redirección de `geintech.com.pe/aulavirtual/*` a la dirección nueva, para que
   los enlaces y favoritos antiguos de los alumnos sigan funcionando.
3. Recién después se cambie el DNS del dominio principal hacia Vercel.

## Cosas a tener en cuenta

- **Alumnos con sesión abierta** tendrán que iniciar sesión de nuevo.
- **App móvil de Moodle:** quienes la usen deberán volver a ingresar la dirección del sitio
  (`aula.geintech.com.pe`).
- **Si algo falla:** vuelve a mover los archivos a la carpeta `aulavirtual`, restaura `wwwroot` a
  `https://geintech.com.pe/aulavirtual` y purga las cachés. O restaura la copia de seguridad del paso 0.
- **Correo y DNS:** durante todo este proceso no se modifica ningún registro MX ni del dominio principal.
