import EngineImg from '../../img/engine-motor-icon.svg?react';
import TransmissionImg from '../../img/manual-transmission-icon.svg?react';
import SuspensionImg from '../../img/chassis-icon.svg?react';
import BrakesImg from '../../img/brake-icon.svg?react';
import ElctricImg from '../../img/car-battery-icon.svg?react';
import TiresImg from '../../img/wheel-icon.svg?react';
import OptionalImg from '../../img/fan-blades-icon.svg?react';

import engineImg from '../../img/checkboxImg/1.jpeg';
import engine2Img from '../../img/checkboxImg/1006.jpeg';
import candle from '../../img/checkboxImg/6450568339.jpeg';
import wire from '../../img/checkboxImg/provoda.jpeg';
import oil from '../../img/checkboxImg/maslo.webp';
import airFilter from '../../img/checkboxImg/344853.webp';

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

type worksType = {
  title: string;
  img: string;
};

export interface ICategoryObj {
  name: keyof typeof CATEGORIES;
  title?: string;
  img?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  repair?: Array<worksType>;
  service?: Array<worksType>;
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
    repair: [
      { title: 'Капитальный ремонт', img: engineImg },
      { title: 'Устранение течи моторного масла', img: engine2Img },
    ],
    service: [
      { title: 'Замена свечей зажиганий', img: candle },
      { title: 'Замена высоковольтных проводов', img: wire },
      { title: 'Замена моторного масла и фильтра', img: oil },
      { title: 'Замена воздушного фильтра', img: airFilter },
    ],
  },
  transmission: {
    name: CATEGORIES.transmission,
    title: 'КОРОБКА',
    img: TransmissionImg,
    repair: [
      { title: 'Ремонт КПП', img: '' },
      { title: 'Устранение течи трансмисионного масла', img: '' },
    ],
    service: [{ title: 'Замена трансмисионного масла', img: '' }],
  },
  suspension: {
    name: CATEGORIES.suspension,
    title: 'ПОДВЕСКА',
    img: SuspensionImg,
    repair: [
      { title: 'Ремонт рулевой рейки', img: '' },
      { title: 'Замена мортизаторов', img: '' },
      { title: 'Замена рулевых наконечников', img: '' },
      { title: 'Замена стоек стабилизатора', img: '' },
      { title: 'Замена стоек стабилизатора', img: '' },
      { title: 'Замена стоек стабилизатора', img: '' },
      { title: 'Замена стоек стабилизатора', img: '' },
    ],
    service: [
      { title: 'Диагностика подвески', img: '' },
      { title: 'Диагностика рулевого управления', img: '' },
    ],
  },
  electric: {
    name: CATEGORIES.electric,
    title: 'ЭЛЕКТРИКА',
    img: ElctricImg,
    repair: [
      { title: 'Замена элементов освещения', img: '' },
      { title: 'Ремонт стартера', img: '' },
    ],
    service: [{ title: 'Диагностика электрооборудования', img: '' }],
  },
  brakes: {
    name: CATEGORIES.brakes,
    title: 'ТОРМОЗА',
    img: BrakesImg,
    repair: [
      { title: 'Замена дисков (барабанов)', img: '' },
      { title: 'Замена тормозных колодок', img: '' },
    ],
    service: [
      { title: 'Замена тормозной жидкости', img: '' },
      { title: 'Обслуживание тормозных механизмов', img: '' },
    ],
  },
  tires: {
    name: CATEGORIES.tires,
    title: 'ШИНКА',
    img: TiresImg,
    repair: [{ title: 'Устранение проколов, порезов', img: '' }],
    service: [
      { title: 'Замена покрышки колеса', img: '' },
      { title: 'Замена колеса в сборе', img: '' },
      { title: 'Балансировка', img: '' },
    ],
  },
  optional: {
    name: CATEGORIES.optional,
    title: 'ДОПЫ',
    img: OptionalImg,
    repair: [
      { title: 'Ремонт системы кондиционирования', img: '' },
      { title: 'Ремонт мультимидийной системы', img: '' },
    ],
    service: [
      { title: 'Замена фреона', img: '' },
      { title: 'Установка парктроника', img: '' },
      { title: 'Установка видеорегистратора со скрытой проводкой', img: '' },
      {
        title: 'Открытие дополнительных вкладок меню бортового компьютера',
        img: '',
      },
    ],
  },
  none: {
    name: CATEGORIES.none,
  },
};

export default CATEGORIESMAP;
