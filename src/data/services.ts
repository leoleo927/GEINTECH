import type { ImageMetadata } from 'astro';

import sistemasGestion from '../assets/services/sistemas-integrados-gestion.png';
import seguridadSalud from '../assets/services/seguridad-salud-trabajo.png';
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
    title: 'Auditorias y Homologación',
    description:
      'Preparamos a tu empresa para superar con éxito las exigentes auditorías de homologación (SGS, Bureau Veritas, Hodelpe). Implementamos sistemas de gestión ágiles que te abren las puertas para licitar con las grandes mineras e industrias del país.',
    icon: 'clipboard',
    image: sistemasGestion,
    highlights: ['ISO 9001', 'ISO 14001', 'ISO 45001'],
  },
  {
    title: 'Cumplimiento SSOMA in Situ',
    description:
      'Evita paralizaciones y multas de SUNAFIL. Nos encargamos del diagnóstico normativo, la actualización de tus matrices IPERC y el soporte a tu Comité de SST, adaptándonos a la realidad operativa de tu taller o planta sin generar burocracia.',
    icon: 'shield',
    image: seguridadSalud,
    highlights: ['IPERC', 'Plan anual SST', 'Inspecciones'],
  },
  {
    title: 'Plataforma SSOMA 100% Digital',
    description:
      'Olvídate de los reportes en papel y los Excel desactualizados. Digitalizamos tus IPERC, auditorias, inspecciones de campo, control de EPPs y levantamiento de hallazgos mediante nuestra plataforma web accesible desde cualquier dispositivo móvil, con indicadores en tiempo real.',
    icon: 'chart',
    image: solucionesTecnologicas,
    highlights: ['Transformación digital', 'Dashboards', 'Software a medida'],
  },
  {
    title: 'Capacitación y Entrenamiento',
    description:
      'Entrenamiento técnico especializado para operarios y supervisores. Destacamos en el uso seguro de herramientas de poder y trabajos de alto riesgo. Disponible de forma presencial en tu planta o 24/7 a través de nuestra Aula Virtual certificada.',
    icon: 'academic',
    image: capacitacion,
    highlights: ['In-house', 'Aula Virtual', 'Certificación'],
  },
];
