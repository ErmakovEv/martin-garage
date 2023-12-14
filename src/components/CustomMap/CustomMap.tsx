import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

/*
Кастомные значки для PlaceMark
https://yandex.com/dev/jsapi-v2-1/doc/en/v2-1/ref/reference/option.presetStorage
*/

function CustomMap() {
  return (
    <div className="map-container">
      <YMaps query={{ apikey: '5bf1dfe2-6837-415a-8c4d-7eabd85d601c' }}>
        <Map
          defaultState={{ center: [60.080433, 31.046361], zoom: 11 }}
          width="100%"
          height="350px"
        >
          <Placemark
            geometry={[60.093433, 31.066361]}
            options={{
              preset: `islands#darkGreenRepairShopCircleIcon`,
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}

export default CustomMap;
