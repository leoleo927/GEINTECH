import type { ImageMetadata } from 'astro';

import sistemasGestion from '../assets/services/sistemas-integrados-gestion.png';
import seguridadSalud from '../assets/services/seguridad-salud-trabajo.png';
import mantenimiento from '../assets/services/mantenimiento-industrial.png';
import automatizacion from '../assets/services/automatizacion-industrial.png';
import solucionesTecnologicas from '../assets/services/soluciones-tecnologicas.png';
import capacitacion from '../assets/services/capacitacion.png';

/**
 * Servicios que se muestran en la sección "Servicios".
 *
 * Para cambiar una imagen: guarda el PNG en src/assets/services/,
 * impórtalo arriba y asígnalo en el campo `image`.
 * Si un servicio no tiene imagen, se muestra su ícono.
 */

export type IconName = 'chart' | 'shield' | 'cpu' | 'academic' | 'clipboard' | 'users' | 'wrench';

export interface Service {
  title: string;
  description: string;
  icon: IconName;
  image?: ImageMetadata;
  highlights?: string[];
}

export const services: Service[] = [
  {
    title: 'Sistemas integrados de gestión',
    description:
      'Diagnóstico, implementación y auditoría de sistemas de gestión para que tu empresa trabaje con procesos ordenados y certificables.',
    icon: 'clipboard',
    image: sistemasGestion,
    highlights: ['ISO 9001', 'ISO 14001', 'ISO 45001'],
  },
  {
    title: 'Seguridad y salud en el trabajo',
    description:
      'Programas, matrices IPERC, planes de emergencia y asesoría para cumplir la Ley N.° 29783 y proteger a tu personal.',
    icon: 'shield',
    image: seguridadSalud,
    highlights: ['IPERC', 'Plan anual SST', 'Inspecciones'],
  },
  {
    title: 'Mantenimiento y gestión de activos',
    description:
      'Planes de mantenimiento preventivo y predictivo que reducen paradas no programadas y alargan la vida útil de tus equipos.',
    icon: 'wrench',
    image: mantenimiento,
    highlights: ['Preventivo', 'Predictivo', 'Indicadores KPI'],
  },
  {
    title: 'Automatización y control industrial',
    description:
      'Integración de sensores, tableros y sistemas de control para procesos más precisos, seguros y eficientes.',
    icon: 'cpu',
    image: automatizacion,
    highlights: ['PLC y HMI', 'Instrumentación', 'Tableros de control'],
  },
  {
    title: 'Soluciones tecnológicas',
    description:
      'Digitalizamos tus procesos con herramientas a medida: tableros de indicadores, sistemas de registro y automatización de reportes.',
    icon: 'chart',
    image: solucionesTecnologicas,
    highlights: ['Transformación digital', 'Dashboards', 'Software a medida'],
  },
  {
    title: 'Capacitación y formación',
    description:
      'Cursos presenciales y virtuales dictados por especialistas, con certificación y acceso a nuestra Aula Virtual.',
    icon: 'academic',
    image: capacitacion,
    highlights: ['In-house', 'Aula Virtual', 'Certificación'],
  },
];
