import EngineImg from '../../img/engine-motor-icon.svg?react';
import TransmissionImg from '../../img/manual-transmission-icon.svg?react';
import SuspensionImg from '../../img/chassis-icon.svg?react';
import BrakesImg from '../../img/brake-icon.svg?react';
import ElctricImg from '../../img/car-battery-icon.svg?react';
import TiresImg from '../../img/wheel-icon.svg?react';
import OptionalImg from '../../img/fan-blades-icon.svg?react';

export const CATEGORIES = {
  engine: 'engine' as const,
  transmission: 'transmission' as const,
  suspension: 'suspension' as const,
  electric: 'electric' as const,
  brakes: 'brakes' as const,
  tires: 'tires' as const,
  optional: 'optional' as const,
  none: 'none' as const,
};

export interface ICategoryObj {
  name: keyof typeof CATEGORIES;
  title?: string;
  img?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  repair?: string[];
  service?: string[];
}

type CategoriesKeys = keyof typeof CATEGORIES;

type CategoriesMap = {
  [key in CategoriesKeys]: ICategoryObj;
};

const CATEGORIESMAP: CategoriesMap = {
  engine: {
    name: CATEGORIES.engine,
    title: 'ДВИЖОК',
    img: EngineImg,
    repair: ['Капитальный ремонт', 'Устранение течи моторного масла'],
    service: [
      'Замена свечей зажиганий',
      'Замена высоковольтных проводов',
      'Замена моторного масла и фильтра',
      'Замена воздушного фильтра',
    ],
  },
  transmission: {
    name: CATEGORIES.transmission,
    title: 'КОРОБКА',
    img: TransmissionImg,
    repair: ['Ремонт КПП', 'Устранение течи трансмисионного масла'],
    service: ['Замена трансмисионного масла'],
  },
  suspension: {
    name: CATEGORIES.suspension,
    title: 'ПОДВЕСКА',
    img: SuspensionImg,
    repair: [
      'Ремонт рулевой рейки',
      'Замена мортизаторов',
      'Замена рулевых наконечников',
      'Замена стоек стабилизатора',
      'Замена стоек стабилизатора',
      'Замена стоек стабилизатора',
      'Замена стоек стабилизатора',
    ],
    service: ['Диагностика подвески', 'Диагностика рулевого управления'],
  },
  electric: {
    name: CATEGORIES.electric,
    title: 'ЭЛЕКТРИКА',
    img: ElctricImg,
    repair: ['Замена элементов освещения', 'Ремонт стартера'],
    service: ['Диагностика электрооборудования'],
  },
  brakes: {
    name: CATEGORIES.brakes,
    title: 'ТОРМОЗА',
    img: BrakesImg,
    repair: ['Замена дисков (барабанов)', 'Замена тормозных колодок'],
    service: ['Замена тормозной жидкости', 'Обслуживание тормозных механизмов'],
  },
  tires: {
    name: CATEGORIES.tires,
    title: 'ШИНКА',
    img: TiresImg,
    repair: ['Устранение проколов, порезов'],
    service: [
      'Замена покрышки колеса',
      'Замена колеса в сборе',
      'Балансировка',
    ],
  },
  optional: {
    name: CATEGORIES.optional,
    title: 'ДОПЫ',
    img: OptionalImg,
    repair: [
      'Ремонт системы кондиционирования',
      'Ремонт мультимидийной системы',
    ],
    service: [
      'Замена фреона',
      'Установка парктроника',
      'Установка видеорегистратора со скрытой проводкой',
      'Открытие дополнительных вкладок меню бортового компьютера',
    ],
  },
  none: {
    name: CATEGORIES.none,
  },
};

export default CATEGORIESMAP;
