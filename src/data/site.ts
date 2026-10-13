/**
 * Información general de la empresa.
 * Edita este archivo para cambiar textos de contacto, redes y navegación
 * sin tocar los componentes.
 */

export const company = {
  name: 'GEINTECH',
  legalName: 'Gestión Integral y Tecnología S.A.C.',
  description:
    'Soluciones integrales basadas en tecnología para la industria. Somos tu aliado estratégico para gestionar tus operaciones de forma segura, eficiente y competitiva.',
};

export const contact = {
  phones: ['974 030 420', '984 476 322'],
  emails: ['ventas@geintech.com.pe', 'egutierrezf@geintech.com.pe'],
  /** Correo que recibe los mensajes del formulario de contacto */
  formEmail: 'ventas@geintech.com.pe',
  address: 'Urb. Tilda, Calle Loreto, Ate – Lima',
};

/** Enlace para llamar desde el celular (agrega el código de Perú +51) */
export const phoneHref = (phone: string) => `tel:+51${phone.replace(/\D/g, '')}`;

/** Enlace a Google Maps con la dirección */
export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${contact.address}, Perú`)}`;

export const navLinks = [
  { label: 'Inicio', href: '/#inicio' },
  { label: 'Nosotros', href: '/#nosotros' },
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Contacto', href: '/#contacto' },
];

/**
 * Destino del botón "Aula Virtual": login del Moodle alojado en SiteGround.
 * Si el Moodle se mueve a un subdominio (p. ej. https://aula.geintech.com.pe),
 * basta con cambiar esta URL.
 */
export const virtualClassroomUrl = 'https://geintech.com.pe/aulavirtual/login/index.php';
